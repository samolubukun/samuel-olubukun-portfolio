import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BLOG_POSTS } from "../constants/blogs";
import { Calendar, Clock, Tag, ArrowLeft, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

// Code block component with copy button
const CodeBlock = ({ children, inline }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (inline) {
        return <code className="bg-neutral-800 text-cyan-400 px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>;
    }

    return (
        <div className="relative group">
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 p-2 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                title="Copy code"
            >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <code className="block bg-neutral-900 text-green-400 p-4 pr-12 rounded-lg overflow-x-auto mb-4 font-mono text-sm leading-relaxed border border-neutral-800">
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
                    <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                    <p className="text-neutral-400 mb-6">The blog post you're looking for doesn't exist.</p>
                    <Link to="/blog" className="text-blue-400 hover:text-blue-300">← Back to Blog</Link>
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
                    className="flex items-center gap-2 text-neutral-400 hover:text-blue-400 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Blog
                </button>

                {/* Header */}
                <header className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
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

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        {post.title}
                    </h1>

                    <p className="text-xl text-neutral-400 leading-relaxed">
                        {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-6">
                        {post.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-800/50 text-neutral-400 text-sm"
                            >
                                <Tag className="w-3 h-3" />
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                {/* Divider */}
                <div className="border-t border-neutral-800 mb-8"></div>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none">
                    <ReactMarkdown
                        components={{
                            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-white" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-6 mb-3 text-white" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-4 mb-2 text-white" {...props} />,
                            p: ({ node, ...props }) => <p className="text-neutral-300 leading-relaxed mb-4" {...props} />,
                            ul: ({ node, children, ...props }) => <ul className="list-disc list-outside text-neutral-300 mb-4 space-y-2 ml-6" {...props}>{children}</ul>,
                            ol: ({ node, children, ...props }) => <ol className="list-decimal list-outside text-neutral-300 mb-4 space-y-2 ml-6" {...props}>{children}</ol>,
                            li: ({ node, children, ...props }) => {
                                // Check if this is a task list item
                                const text = children?.toString() || '';
                                if (text.startsWith('[ ] ') || text.startsWith('[x] ')) {
                                    const isChecked = text.startsWith('[x]');
                                    const content = text.replace(/^\[[ x]\] /, '');
                                    return (
                                        <li className="flex items-start gap-2 text-neutral-300" {...props}>
                                            <input
                                                type="checkbox"
                                                checked={isChecked}
                                                readOnly
                                                className="mt-1 cursor-default"
                                            />
                                            <span>{content}</span>
                                        </li>
                                    );
                                }
                                return <li className="text-neutral-300" {...props}>{children}</li>;
                            },
                            strong: ({ node, ...props }) => <strong className="font-bold text-white" {...props} />,
                            code: ({ node, inline, className, children, ...props }) => {
                                const codeString = String(children).trim();
                                return <CodeBlock inline={inline}>{codeString}</CodeBlock>;
                            },
                            pre: ({ node, ...props }) => <pre className="bg-neutral-900 rounded-lg overflow-x-auto mb-4 border border-neutral-800" {...props} />,
                            a: ({ node, ...props }) => <a className="text-blue-400 hover:text-blue-300 underline" {...props} />,
                            blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-blue-500 pl-4 italic text-neutral-400 my-4" {...props} />,
                            table: ({ node, ...props }) => <div className="overflow-x-auto mb-6"><table className="min-w-full border border-neutral-700 text-neutral-300" {...props} /></div>,
                            thead: ({ node, ...props }) => <thead className="bg-neutral-900" {...props} />,
                            th: ({ node, ...props }) => <th className="border border-neutral-700 px-4 py-2 font-bold text-left" {...props} />,
                            td: ({ node, ...props }) => <td className="border border-neutral-700 px-4 py-2" {...props} />,
                        }}
                    >
                        {processedContent}
                    </ReactMarkdown>
                </div>

                {/* Divider */}
                <div className="border-t border-neutral-800 mt-12 mb-8"></div>

                {/* Back to Blog Button */}
                <div className="flex justify-center">
                    <Link
                        to="/blog"
                        className="flex items-center gap-2 px-6 py-3 bg-neutral-900/40 backdrop-blur-xl border border-neutral-800 hover:border-blue-500/50 text-neutral-300 hover:text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
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
