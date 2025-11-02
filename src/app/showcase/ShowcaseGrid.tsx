'use client';

import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Tag, Calendar } from 'lucide-react';

type Project = {
    _id: string;
    _title: string;
    _slug: string;
    description: string;
    links: string;
    tags?: {
        plainText: string;
    };
    _sys: {
        createdAt: string;
    };
};

const ShowcaseGrid = ({ projects }: { projects: Project[] }) => {
    const [query, setQuery] = useState('');

    const filtered = useMemo(() => {
        return projects.filter((project) => {
            const q = query.trim().toLowerCase();
            const matchesQuery =
                q.length === 0 ||
                project._title.toLowerCase().includes(q) ||
                project.description?.toLowerCase().includes(q) ||
                project.tags?.plainText.toLowerCase().includes(q);
            return matchesQuery;
        });
    }, [projects, query]);

    const parseTags = (tagsText?: string) => {
        if (!tagsText) return [];
        return tagsText.split(',').map(tag => tag.trim()).filter(Boolean);
    };

    return (
        <>
            <section className="pb-6">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="group relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search projects..."
                                className="w-full rounded-lg border border-white/10 bg-black/30 backdrop-blur pl-10 pr-3 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400/40"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-16">
                <div className="container mx-auto px-4">
                    {filtered.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-white/50">No projects found matching your criteria.</p>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {filtered.map((project) => {
                                const tags = parseTags(project.tags?.plainText);
                                
                                return (
                                    <div
                                        key={project._id}
                                        className="group border border-white/10 rounded-xl overflow-hidden bg-black/30 backdrop-blur-sm hover:border-cyan-400/20 hover:bg-cyan-950/5 transition-all duration-300"
                                    >
                                        <div className="h-28 bg-gradient-to-br from-cyan-950/30 via-black to-blue-950/20 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        <div className="p-6">
                                            <div className="flex items-center gap-3 text-xs text-white/50 mb-2">
                                                <span className="inline-flex items-center gap-1">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {new Date(project._sys.createdAt).toLocaleDateString(undefined, {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric',
                                                    })}
                                                </span>
                                            </div>

                                            <h3 className="text-lg font-medium text-white group-hover:text-cyan-100 mb-2">
                                                {project._title}
                                            </h3>
                                            
                                            {project.description && (
                                                <p className="text-sm text-white/50 mb-4 line-clamp-3">
                                                    {project.description}
                                                </p>
                                            )}

                                            {tags.length > 0 && (
                                                <div className="mb-4 flex flex-wrap gap-2">
                                                    {tags.map((tag, i) => (
                                                        <span
                                                            key={i}
                                                            className="inline-flex items-center rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/60"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {project.links && (
                                                <a
                                                    href={project.links}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                                                >
                                                    View Project
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default ShowcaseGrid;