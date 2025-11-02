'use client';

import React, { useMemo, useState } from 'react';
import { BookOpen, Search, Tag, Calendar, ArrowUpRight } from 'lucide-react';

const CATEGORY_OPTIONS = ['All', 'Guides', 'Updates', 'Opinions'] as const;
type CategoryOption = typeof CATEGORY_OPTIONS[number];

type BlogPost = {
    _id: string;
    _title: string;
    _slug: string;
    status: string;
    thumbnail?: {
        url: string;
        alt?: string;
    };
    content?: {
        plainText: string;
        readingTime: number;
    };
    _sys: {
        createdAt: string;
    };
};

const BlogFilters = ({ posts }: { posts: BlogPost[] }) => {
    const [category, setCategory] = useState<CategoryOption>('All');
    const [query, setQuery] = useState('');

    const filtered = useMemo(() => {
        return posts.filter((post) => {
            const matchesCategory = category === 'All' || post.category === category;
            const q = query.trim().toLowerCase();
            const matchesQuery =
                q.length === 0 ||
                post._title.toLowerCase().includes(q) ||
                post.description?.toLowerCase().includes(q) ||
                post.tags?.join(' ').toLowerCase().includes(q);
            return matchesCategory && matchesQuery;
        });
    }, [posts, category, query]);

    return (
        <>
            <section className="pb-6">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4">
                        <div className="inline-flex rounded-lg border border-white/10 bg-black/30 backdrop-blur p-1">
                            {CATEGORY_OPTIONS.map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => setCategory(opt)}
                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-colors ${
                                        category === opt ? 'bg-white text-black' : 'text-white/70 hover:text-white'
                                    }`}
                                    aria-pressed={category === opt}
                                >
                                    {opt === 'All' ? <BookOpen className="w-4 h-4" /> : <Tag className="w-4 h-4" />}
                                    {opt}
                                </button>
                            ))}
                        </div>

                        <div className="flex-1">
                            <div className="group relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                                <input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search posts"
                                    className="w-full rounded-lg border border-white/10 bg-black/30 backdrop-blur pl-10 pr-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400/40"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-16">
                <div className="container mx-auto px-4">
                    {filtered.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-white/50">No posts found matching your criteria.</p>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {filtered.map((post) => (
                                <a
                                    href={`/blog/${post._slug}`}
                                    key={post._id}
                                    className="group border border-white/10 rounded-xl overflow-hidden bg-black/30 backdrop-blur-sm hover:border-cyan-400/20 hover:bg-cyan-950/5 transition-all duration-300"
                                >
                                    {post.image?.url ? (
                                        <div className="h-28 overflow-hidden">
                                            <img
                                                src={post.image.url}
                                                alt={post.image.alt || post._title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    ) : (
                                        <div className="h-28 bg-gradient-to-br from-cyan-950/30 via-black to-blue-950/20" />
                                    )}

                                    <div className="p-6">
                                        <div className="flex items-center gap-3 text-xs text-white/50 mb-2">
                                            <span className="inline-flex items-center gap-1">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {new Date(post.publishDate).toLocaleDateString(undefined, {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                })}
                                            </span>
                                            {post.category && (
                                                <span className="inline-flex items-center gap-1">
                                                    <Tag className="w-3.5 h-3.5" />
                                                    {post.category}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-lg font-medium text-white group-hover:text-cyan-100 mb-1">
                                            {post._title}
                                        </h3>
                                        {post.description && (
                                            <p className="text-sm text-white/50">{post.description}</p>
                                        )}

                                        {post.tags && post.tags.length > 0 && (
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {post.tags.map((tag: string, i: number) => (
                                                    <span
                                                        key={i}
                                                        className="inline-flex items-center rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/60"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <div className="mt-4 inline-flex items-center gap-1 text-xs text-white/60 group-hover:text-white">
                                            Read post
                                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default BlogFilters;