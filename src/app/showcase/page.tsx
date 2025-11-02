import React from 'react';
import { Pump } from 'basehub/react-pump';
import { draftMode } from 'next/headers';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import ShowcaseGrid from './ShowcaseGrid';

const ShowcasePage = async () => {
    const { isEnabled } = await draftMode();

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
                                Projects Showcase
                            </span>
                        </h1>
                        <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto">
                            A collection of projects, experiments, and creative work.
                        </p>
                    </div>
                </div>
            </section>

            <Pump
                next={{ revalidate: 30 }}
                draft={isEnabled}
                queries={[
                    {
                        projects: {
                            items: {
                                _id: true,
                                _title: true,
                                _slug: true,
                                description: true,
                                links: true,
                                tags: {
                                    plainText: true,
                                },
                                _sys: {
                                    createdAt: true,
                                },
                            },
                        },
                    },
                ]}
            >
                {async ([data]) => {
                    'use server';
                    return <ShowcaseGrid projects={data.projects.items} />;
                }}
            </Pump>
            <Footer />
        </div>
    );
};

export default ShowcasePage;