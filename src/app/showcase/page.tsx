'use client';

import React, { useState } from 'react';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { Rocket, Grid3X3, Boxes, FolderGit2, ArrowUpRight, BadgeCheck, Sparkles } from 'lucide-react';

const ShowcasePage = () => {
    const [view, setView] = useState<'projects' | 'products'>('projects');

    const projects = [
        {
            title: 'Workflow Automation Suite',
            description:
                'End-to-end automation across ops and support with AI-assisted triggers and human-in-the-loop.',
            tags: ['Automation', 'AI', 'Next.js'],
            link: '#',
        },
        {
            title: 'Docs Intelligence',
            description:
                'Semantic search and summarization for enterprise documentation with role-aware access.',
            tags: ['RAG', 'Search', 'Vector DB'],
            link: '#',
        },
        {
            title: 'Service Desk Copilot',
            description:
                'Smart triage and suggested replies for customer tickets that cut resolution time in half.',
            tags: ['Support', 'Copilot', 'LLM'],
            link: '#',
        },
        {
            title: 'Analytics Narratives',
            description:
                'Generate actionable insights and narratives from dashboards to accelerate decision-making.',
            tags: ['Analytics', 'Insights', 'Gen AI'],
            link: '#',
        },
    ];

    const products = [
        {
            title: 'Aivora Automate',
            description:
                'A powerful orchestration engine to coordinate tools, people, and AI reliably.',
            tags: ['Orchestration', 'Queues', 'Workers'],
            link: '#',
        },
        {
            title: 'Aivora Studio',
            description:
                'Build and preview flows, prompts, and integrations with a delightful visual editor.',
            tags: ['Editor', 'Prompts', 'Integrations'],
            link: '#',
        },
        {
            title: 'Aivora Connect',
            description:
                'Native connectors to CRMs, helpdesks, data warehouses, and messaging platforms.',
            tags: ['Connectors', 'APIs', 'Sync'],
            link: '#',
        },
        {
            title: 'Aivora Guard',
            description:
                'Observability and guardrails for AI features: evals, metrics, and safety.',
            tags: ['Evals', 'Metrics', 'Safety'],
            link: '#',
        },
    ];

    const items = view === 'projects' ? projects : products;

    return (
        <div className="text-white min-h-screen bg-black">
            <Header />
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,174,239,0.08),transparent_60%)]" />
                <div className="absolute top-24 right-1/4 w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse" />
                <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-cyan-300/60 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }} />
                <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '2.2s' }} />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-300 text-transparent bg-clip-text">
                                Projects and products we're proud of
                            </span>
                        </h1>
                        <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto">
                            A curated set of work that highlights our approach: fast, practical, and beautifully simple.
                        </p>
                    </div>
                </div>
            </section>

            <section className="pb-6">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="inline-flex rounded-lg border border-white/10 bg-black/30 backdrop-blur p-1">
                            <button
                                onClick={() => setView('projects')}
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-colors ${view === 'projects' ? 'bg-white text-black' : 'text-white/70 hover:text-white'
                                    }`}
                                aria-pressed={view === 'projects'}
                            >
                                <FolderGit2 className="w-4 h-4" />
                                Projects
                            </button>
                            <button
                                onClick={() => setView('products')}
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-colors ${view === 'products' ? 'bg-white text-black' : 'text-white/70 hover:text-white'
                                    }`}
                                aria-pressed={view === 'products'}
                            >
                                <Boxes className="w-4 h-4" />
                                Products
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {items.map((item, idx) => (
                            <a
                                href={item.link}
                                key={idx}
                                className="group border border-white/10 rounded-xl p-6 bg-black/30 backdrop-blur-sm hover:border-cyan-400/20 hover:bg-cyan-950/5 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-400/10 inline-flex items-center justify-center text-cyan-300">
                                        {view === 'projects' ? <Grid3X3 className="w-5 h-5" /> : <BadgeCheck className="w-5 h-5" />}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-medium text-white group-hover:text-cyan-100">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-white/50 mt-1">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex items-center rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/60"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4 inline-flex items-center gap-1 text-xs text-white/60 group-hover:text-white">
                                    Visit
                                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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

export default ShowcasePage;