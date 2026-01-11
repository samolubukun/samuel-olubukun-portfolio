import { useState } from "react";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../constants";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "AI/ML", "Full-Stack", "System Design"];

    const filteredPosts = selectedCategory === "All"
        ? BLOG_POSTS
        : BLOG_POSTS.filter(post => post.category === selectedCategory);

    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 1, y: -50 }}
                transition={{ duration: 0.5 }}
                className="mt-0 mb-8 text-center"
            >
                <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-4">
                    Blog <span className="text-neutral-500">Posts</span>
                </h2>
                <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
                    Technical deep dives, tutorials, and insights on AI, full-stack development, and system design.
                </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex justify-center gap-3 mb-12 flex-wrap px-4">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg transition-all duration-300 ${selectedCategory === category
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                            : "bg-neutral-900/50 text-neutral-400 hover:bg-neutral-800 border border-neutral-800"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {filteredPosts.map((post, index) => (
                    <motion.article
                        key={post.id}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group bg-neutral-900/40 backdrop-blur-xl border border-neutral-800/60 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col"
                    >
                        {/* Category Badge */}
                        <div className="p-6 pb-4">
                            <div className="flex items-center justify-between mb-3">
                                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
                                    {post.category}
                                </span>
                                <span className="flex items-center gap-1 text-xs text-neutral-500">
                                    <Clock className="w-3 h-3" />
                                    {post.readTime}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                                {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                {post.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.slice(0, 3).map((tag, i) => (
                                    <span
                                        key={i}
                                        className="flex items-center gap-1 px-2 py-1 rounded bg-neutral-800/50 text-neutral-400 text-xs"
                                    >
                                        <Tag className="w-3 h-3" />
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Date & Read More */}
                            <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                                <span className="flex items-center gap-1 text-xs text-neutral-500">
                                    <Calendar className="w-3 h-3" />
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </span>
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors group/link"
                                >
                                    Read More
                                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-neutral-500">No posts found in this category.</p>
                </div>
            )}
        </div>
    );
};

export default Blog;
