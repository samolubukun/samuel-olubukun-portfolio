import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BLOG_POSTS } from "../constants/blogs";
import { Calendar, Clock, Tag, ArrowLeft, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Code block component with copy button
const CodeBlock = ({ children, inline }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (inline) {
        return <code className="bg-neutral-200 dark:bg-neutral-800 text-cyan-700 dark:text-cyan-400 px-1.5 py-0.5 rounded text-sm font-mono border border-neutral-300 dark:border-neutral-700">{children}</code>;
    }

    return (
        <div className="relative group">
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 p-2 rounded bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors opacity-0 group-hover:opacity-100 shadow-sm"
                title="Copy code"
            >
                {copied ? <Check className="w-4 h-4 text-green-600 dark:text-green-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <code className="block bg-neutral-50 dark:bg-neutral-900 text-emerald-700 dark:text-green-400 p-4 pr-12 rounded-lg overflow-x-auto mb-4 font-mono text-sm leading-relaxed border border-neutral-200 dark:border-neutral-800 shadow-inner">
                {children}
            </code>
        </div>
    );
};

const BlogPostPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = BLOG_POSTS.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-white">Post Not Found</h1>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6">The blog post you're looking for doesn't exist.</p>
                    <Link to="/blog" className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300">← Back to Blog</Link>
                </div>
            </div>
        );
    }

    // Unescape the markdown content (fix escaped backticks)
    const processedContent = post.content
        .replace(/\\`\\`\\`/g, '```')
        .replace(/\\`/g, '`');

    return (
        <div className="min-h-screen pt-20 pb-20">
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto px-4"
            >
                {/* Back Button */}
                <button
                    onClick={() => navigate("/blog")}
                    className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                </button>

                {/* Header */}
                <header className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-sm font-medium">
                            {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-neutral-500">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-neutral-500">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 leading-tight">
                        {post.title}
                    </h1>

                    <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                        {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-6">
                        {post.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400 text-sm border border-neutral-200 dark:border-transparent"
                            >
                                <Tag className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                {/* Divider */}
                <div className="border-t border-neutral-200 dark:border-neutral-800 mb-12"></div>

                {/* Content */}
                <div className="prose dark:prose-invert prose-lg max-w-none">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-12 mb-6 text-neutral-900 dark:text-white border-b border-neutral-100 dark:border-neutral-800 pb-2" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-10 mb-4 text-neutral-900 dark:text-white" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-8 mb-3 text-neutral-900 dark:text-white" {...props} />,
                            p: ({ node, ...props }) => <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6" {...props} />,
                            ul: ({ node, children, ...props }) => <ul className="list-disc list-outside text-neutral-700 dark:text-neutral-300 mb-6 space-y-3 ml-6" {...props}>{children}</ul>,
                            ol: ({ node, children, ...props }) => <ol className="list-decimal list-outside text-neutral-700 dark:text-neutral-300 mb-6 space-y-3 ml-6" {...props}>{children}</ol>,
                            li: ({ node, children, ...props }) => {
                                // Check if this is a task list item
                                const text = children?.toString() || '';
                                if (text.startsWith('[ ] ') || text.startsWith('[x] ')) {
                                    const isChecked = text.startsWith('[x]');
                                    const content = text.replace(/^\[[ x]\] /, '');
                                    return (
                                        <li className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300" {...props}>
                                            <input
                                                type="checkbox"
                                                checked={isChecked}
                                                readOnly
                                                className="mt-1.5 cursor-default h-4 w-4 rounded border-neutral-300 dark:border-neutral-700 text-blue-600 focus:ring-blue-500 transition-colors"
                                            />
                                            <span>{content}</span>
                                        </li>
                                    );
                                }
                                return <li className="text-neutral-700 dark:text-neutral-300" {...props}>{children}</li>;
                            },
                            strong: ({ node, ...props }) => <strong className="font-bold text-neutral-900 dark:text-white" {...props} />,
                            code: ({ node, inline, className, children, ...props }) => {
                                const codeString = String(children).trim();
                                return <CodeBlock inline={inline}>{codeString}</CodeBlock>;
                            },
                             pre: ({ node, ...props }) => <pre className="bg-neutral-50 dark:bg-neutral-900 rounded-lg overflow-x-auto mb-6 border border-neutral-200 dark:border-neutral-800 shadow-inner" {...props} />,
                            a: ({ node, ...props }) => <a className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors" {...props} />,
                            blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-blue-500 bg-neutral-50 dark:bg-blue-500/5 px-6 py-4 italic text-neutral-600 dark:text-neutral-400 my-8 rounded-r-lg" {...props} />,
                            table: ({ node, ...props }) => <div className="overflow-x-auto mb-8 shadow-sm rounded-lg"><table className="min-w-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300" {...props} /></div>,
                            thead: ({ node, ...props }) => <thead className="bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white" {...props} />,
                            tbody: ({ node, ...props }) => <tbody {...props} />,
                            tr: ({ node, ...props }) => <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30 transition-colors border-b border-neutral-100 dark:border-neutral-800 last:border-0" {...props} />,
                            th: ({ node, ...props }) => <th className="border-r border-neutral-200 dark:border-neutral-800 px-4 py-3 font-bold text-left last:border-0" {...props} />,
                            td: ({ node, ...props }) => <td className="border-r border-neutral-200 dark:border-neutral-800 px-4 py-3 last:border-0" {...props} />,
                        }}
                    >
                        {processedContent}
                    </ReactMarkdown>
                </div>

                {/* Divider */}
                <div className="border-t border-neutral-200 dark:border-neutral-800 mt-16 mb-10"></div>

                {/* Back to Blog Button */}
                <div className="flex justify-center">
                    <Link
                        to="/blog"
                        className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-neutral-900/40 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white rounded-xl transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-500/10 font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to All Posts
                    </Link>
                </div>
            </motion.article>
        </div>
    );
};

export default BlogPostPage;
