import React from 'react';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { Mail, Github, Linkedin, Twitter, ExternalLink, MapPin } from 'lucide-react';

const ContactPage = () => {
    const contactLinks = [
        {
            icon: Mail,
            label: 'Email',
            value: 'hello@aivora.com',
            href: 'mailto:hello@aivora.com',
            description: 'Drop us a message anytime',
        },
        {
            icon: Github,
            label: 'GitHub',
            value: '@aivora',
            href: 'https://github.com/aivora',
            description: 'Check out our open source work',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'Aivora',
            href: 'https://linkedin.com/company/aivora',
            description: 'Connect with us professionally',
        },
        {
            icon: Twitter,
            label: 'Twitter',
            value: '@aivora',
            href: 'https://twitter.com/aivora',
            description: 'Follow us for updates',
        },
    ];

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
                                Let's work together
                            </span>
                        </h1>
                        <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto">
                            Interested in collaborating? Reach out for new projects, partnerships, and experiments.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                            {contactLinks.map((link, idx) => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={link.href}
                                        target={link.href.startsWith('http') ? '_blank' : undefined}
                                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="group border border-white/10 rounded-xl p-8 bg-black/30 backdrop-blur-sm hover:border-cyan-400/20 hover:bg-cyan-950/5 transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-400/20 group-hover:bg-cyan-400/10 transition-colors">
                                                <Icon className="w-6 h-6 text-cyan-400" />
                                            </div>
                                            
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="text-lg font-medium text-white group-hover:text-cyan-100 transition-colors">
                                                        {link.label}
                                                    </h3>
                                                    {link.href.startsWith('http') && (
                                                        <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-cyan-400 transition-colors" />
                                                    )}
                                                </div>
                                                <p className="text-sm text-white/50 mb-2">
                                                    {link.description}
                                                </p>
                                                <p className="text-base text-cyan-400 font-medium truncate">
                                                    {link.value}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>

                        {/* Optional: Location Section */}
                        <div className="mt-12 border border-white/10 rounded-xl p-8 bg-black/30 backdrop-blur-sm">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-400/20">
                                    <MapPin className="w-6 h-6 text-cyan-400" />
                                </div>
                                
                                <div className="flex-1">
                                    <h3 className="text-lg font-medium text-white mb-2">
                                        Location
                                    </h3>
                                    <p className="text-white/60 leading-relaxed">
                                        Mumbai, Maharashtra<br />
                                        India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;