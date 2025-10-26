'use client';

import React, { useMemo, useState } from 'react';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { Rocket, BookOpen, Search, Tag, Calendar, ArrowUpRight } from 'lucide-react';

type BlogPost = {
    title: string;
    description: string;
    date: string;
    category: 'Guides' | 'Updates' | 'Opinions';
    tags: string[];
    link: string;
};

const MOCK_POSTS: BlogPost[] = [
    {
        title: 'Designing AI Features That Feel Effortless',
        description:
            'Principles we use to make AI-powered workflows intuitive from the first click.',
        date: '2025-09-18',
        category: 'Guides',
        tags: ['UX', 'AI', 'Product'],
        link: '#',
    },
    {
        title: 'Shipping Faster With Reliable Guardrails',
        description:
            'How we balance iteration speed with stability across services and AI components.',
        date: '2025-08-04',
        category: 'Updates',
        tags: ['Infra', 'Reliability'],
        link: '#',
    },
    {
        title: 'The Case for Minimal Interfaces',
        description:
            'Why less UI often leads to more clarity, speed, and adoption.',
        date: '2025-07-22',
        category: 'Opinions',
        tags: ['Design', 'Minimalism'],
        link: '#',
    },
    {
        title: 'Patterns for AI-Powered Support Desks',
        description:
            'From triage to suggested replies—patterns that reduce resolution time.',
        date: '2025-06-10',
        category: 'Guides',
        tags: ['Support', 'LLM'],
        link: '#',
    },
    {
        title: 'What We’re Building Next',
        description:
            'A look at upcoming capabilities across Automate, Studio, and Guard.',
        date: '2025-05-03',
        category: 'Updates',
        tags: ['Roadmap'],
        link: '#',
    },
];

const CATEGORY_OPTIONS = ['All', 'Guides', 'Updates', 'Opinions'] as const;
type CategoryOption = typeof CATEGORY_OPTIONS[number];

const BlogPage = () => {
    const [category, setCategory] = useState<CategoryOption>('All');
    const [query, setQuery] = useState('');

    const filtered = useMemo(() => {
        return MOCK_POSTS.filter((post) => {
            const matchesCategory = category === 'All' || post.category === category;
            const q = query.trim().toLowerCase();
            const matchesQuery =
                q.length === 0 ||
                post.title.toLowerCase().includes(q) ||
                post.description.toLowerCase().includes(q) ||
                post.tags.join(' ').toLowerCase().includes(q);
            return matchesCategory && matchesQuery;
        });
    }, [category, query]);

    return (
        <div className="text-white min-h-screen bg-black">
            <Header />
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,174,239,0.08),transparent_60%)]" />
                <div className="absolute top-24 right-1/4 w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse" />
                <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-cyan-300/60 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }} />
                <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '2.2s' }} />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-300 text-transparent bg-clip-text">
                                Ideas, guides, and product updates
                            </span>
                        </h1>
                        <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto">
                            Practical insights on building fast, reliable, and elegant software experiences.
                        </p>
                    </div>
                </div>
            </section>

            <section className="pb-6">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4">
                        <div className="inline-flex rounded-lg border border-white/10 bg-black/30 backdrop-blur p-1">
                            {CATEGORY_OPTIONS.map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => setCategory(opt)}
                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-colors ${category === opt ? 'bg-white text-black' : 'text-white/70 hover:text-white'
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
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {filtered.map((post, idx) => (
                            <a
                                href={post.link}
                                key={idx}
                                className="group border border-white/10 rounded-xl overflow-hidden bg-black/30 backdrop-blur-sm hover:border-cyan-400/20 hover:bg-cyan-950/5 transition-all duration-300"
                            >
                                <div className="h-28 bg-gradient-to-br from-cyan-950/30 via-black to-blue-950/20" />

                                <div className="p-6">
                                    <div className="flex items-center gap-3 text-xs text-white/50 mb-2">
                                        <span className="inline-flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <Tag className="w-3.5 h-3.5" />
                                            {post.category}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-medium text-white group-hover:text-cyan-100 mb-1">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-white/50">
                                        {post.description}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {post.tags.map((tag, i) => (
                                            <span key={i} className="inline-flex items-center rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/60">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-4 inline-flex items-center gap-1 text-xs text-white/60 group-hover:text-white">
                                        Read post
                                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default BlogPage;