import React from 'react';
import { Pump } from 'basehub/react-pump';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { Calendar, Clock } from 'lucide-react';

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
    const { isEnabled } = await draftMode();
    const { slug } = params;

    return (
        <div className="text-white min-h-screen bg-black">
            <Header />
            
            <Pump
                next={{ revalidate: 30 }}
                draft={isEnabled}
                queries={[
                    {
                        blog: {
                            __args: {
                                filter: {
                                    _slug: {
                                        eq: slug,
                                    },
                                },
                            },
                            items: {
                                _id: true,
                                _title: true,
                                _slug: true,
                                status: true,
                                thumbnail: {
                                    on_BlockImage: {
                                        url: true,
                                        alt: true,
                                        width: true,
                                        height: true,
                                    },
                                },
                                content: {
                                    html: true,
                                    plainText: true,
                                    readingTime: true,
                                },
                                _sys: {
                                    createdAt: true,
                                    lastModifiedAt: true,
                                },
                            },
                        },
                    },
                ]}
            >
                {async ([data]) => {
                    'use server';
                    
                    const post = data.blog.items[0];
                    
                    if (!post || post.status !== 'published') {
                        notFound();
                    }

                    return (
                        <>
                            <article className="relative pt-24 pb-16 md:pt-32 md:pb-20">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,174,239,0.08),transparent_60%)]" />
                                
                                <div className="container mx-auto px-4 relative z-10">
                                    <div className="max-w-4xl mx-auto">
                                        {/* Header */}
                                        <div className="mb-8 md:mb-12">
                                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                                                <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-300 text-transparent bg-clip-text">
                                                    {post._title}
                                                </span>
                                            </h1>
                                            
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
                                                <span className="inline-flex items-center gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    {new Date(post._sys.createdAt).toLocaleDateString(undefined, {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                    })}
                                                </span>
                                                {post.content?.readingTime && (
                                                    <span className="inline-flex items-center gap-2">
                                                        <Clock className="w-4 h-4" />
                                                        {post.content.readingTime} min read
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Featured Image */}
                                        {post.thumbnail?.url && (
                                            <div className="mb-12 rounded-2xl overflow-hidden border border-white/10">
                                                <img
                                                    src={post.thumbnail.url}
                                                    alt={post.thumbnail.alt || post._title}
                                                    className="w-full h-auto"
                                                    width={post.thumbnail.width}
                                                    height={post.thumbnail.height}
                                                />
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div 
                                            className="prose prose-invert prose-lg max-w-none
                                                prose-headings:font-bold prose-headings:tracking-tight
                                                prose-h1:text-4xl prose-h1:mb-6 prose-h1:bg-gradient-to-r prose-h1:from-white prose-h1:to-cyan-100 prose-h1:text-transparent prose-h1:bg-clip-text
                                                prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-12 prose-h2:text-cyan-100
                                                prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-white
                                                prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-6
                                                prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300 hover:prose-a:underline
                                                prose-strong:text-white prose-strong:font-semibold
                                                prose-code:text-cyan-300 prose-code:bg-cyan-950/30 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                                                prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl
                                                prose-ul:text-white/80 prose-ul:mb-6
                                                prose-ol:text-white/80 prose-ol:mb-6
                                                prose-li:mb-2
                                                prose-blockquote:border-l-4 prose-blockquote:border-cyan-400 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-white/70
                                                prose-img:rounded-xl prose-img:border prose-img:border-white/10"
                                            dangerouslySetInnerHTML={{ __html: post.content.html }}
                                        />
                                    </div>
                                </div>
                            </article>
                            <Footer />
                        </>
                    );
                }}
            </Pump>
        </div>
    );
};

export default BlogPostPage;