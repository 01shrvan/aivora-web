import React from 'react';
import { Rocket, Code, Lightbulb, Zap, ArrowRight } from 'lucide-react';
import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header';

const AboutPage = () => {
    const principles = [
        {
            icon: <Code className="w-7 h-7" />,
            title: "Built with craft",
            description: "Every line of code, every interface element — carefully designed and purposefully placed."
        },
        {
            icon: <Lightbulb className="w-7 h-7" />,
            title: "Solve real problems",
            description: "We don't build features. We solve actual pain points that keep businesses up at night."
        },
        {
            icon: <Zap className="w-7 h-7" />,
            title: "Move fast, stay stable",
            description: "Ship quickly without breaking things. Innovation at speed, reliability at scale."
        }
    ];

    const journey = [
        {
            year: "2023",
            title: "The beginning",
            desc: "Started with a simple idea: make AI actually useful for everyday businesses."
        },
        {
            year: "2024",
            title: "First customers",
            desc: "Launched our automation suite. Early adopters loved the simplicity."
        },
        {
            year: "2025",
            title: "Scaling up",
            desc: "Now powering workflows for startups and enterprises across multiple industries."
        }
    ];

    return (
        <div className="text-white min-h-screen">
            <Header />
            <section className="relative pt-16 pb-20 md:pt-20 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,174,239,0.15),transparent_50%)]"></div>

                <div className="absolute top-20 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute top-40 left-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 border border-cyan-400/30 rounded-full px-4 py-2 mb-8 bg-cyan-500/5 backdrop-blur-sm">
                            <Rocket className="w-4 h-4 text-cyan-300" />
                            <span className="text-sm text-cyan-200/80">Building in public since 2024</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-tight">
                            <span className="bg-gradient-to-b from-white via-cyan-100 to-cyan-300 text-transparent bg-clip-text">
                                We're building AI tools that don't feel like AI tools.
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-3xl">
                            Just smart, simple software that gets out of your way and lets you focus on what matters — growing your business.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">
                                    Why we exist
                                </h2>
                                <div className="space-y-4 text-lg text-white/70 leading-relaxed">
                                    <p>
                                        Most AI products are either too complex or too simple. They promise magic but deliver friction.
                                    </p>
                                    <p>
                                        We're different. We obsess over the details that matter: speed, reliability, and interfaces that feel natural from day one.
                                    </p>
                                    <p>
                                        Our mission? Build tools powerful enough for enterprises but simple enough for anyone to use on their first try.
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="border border-white/15 rounded-2xl p-8 bg-gradient-to-br from-cyan-950/20 to-blue-950/20 backdrop-blur-sm relative overflow-hidden">
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
                                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

                                    <div className="relative space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                                            <div>
                                                <div className="font-medium text-cyan-100 mb-1">Fast by default</div>
                                                <div className="text-sm text-white/60">Sub-second response times, always.</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                                            <div>
                                                <div className="font-medium text-cyan-100 mb-1">Zero learning curve</div>
                                                <div className="text-sm text-white/60">Intuitive from the first click.</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                                            <div>
                                                <div className="font-medium text-cyan-100 mb-1">Built to scale</div>
                                                <div className="text-sm text-white/60">From startup to enterprise, seamlessly.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,174,239,0.08),transparent_70%)]"></div>

                <div className="container mx-auto px-4 relative">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-16 text-center">
                            How we work
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {principles.map((principle, index) => (
                                <div
                                    key={index}
                                    className="group relative"
                                >
                                    <div className="border border-white/10 rounded-2xl p-8 bg-black/40 backdrop-blur-sm hover:border-cyan-400/30 hover:bg-cyan-950/10 transition-all duration-500 h-full">
                                        <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-400/20 inline-flex items-center justify-center mb-6 text-cyan-300 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/40 transition-all duration-500">
                                            {principle.icon}
                                        </div>
                                        <h3 className="text-xl font-medium mb-3 text-white group-hover:text-cyan-100 transition-colors">
                                            {principle.title}
                                        </h3>
                                        <p className="text-white/60 leading-relaxed group-hover:text-white/70 transition-colors">
                                            {principle.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-16 text-center">
                            The journey so far
                        </h2>

                        <div className="space-y-12">
                            {journey.map((milestone, index) => (
                                <div key={index} className="relative pl-8 md:pl-12 border-l-2 border-cyan-400/20">
                                    <div className="absolute left-0 top-0 w-4 h-4 bg-cyan-400 rounded-full -translate-x-[9px] ring-4 ring-black"></div>
                                    <div className="text-sm text-cyan-300 font-medium mb-2">{milestone.year}</div>
                                    <h3 className="text-2xl font-medium text-white mb-2">{milestone.title}</h3>
                                    <p className="text-white/60 leading-relaxed">{milestone.desc}</p>
                                </div>
                            ))}
                            <div className="relative pl-8 md:pl-12 border-l-2 border-cyan-400/20 border-dashed">
                                <div className="absolute left-0 top-0 w-4 h-4 bg-cyan-400/50 rounded-full -translate-x-[9px] ring-4 ring-black animate-pulse"></div>
                                <div className="text-sm text-cyan-300/70 font-medium mb-2">Future</div>
                                <h3 className="text-2xl font-medium text-white/80 mb-2">What's next</h3>
                                <p className="text-white/50 leading-relaxed">We're just getting started. More tools, more integrations, more magic.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto border border-white/15 rounded-2xl p-12 md:p-20 relative overflow-hidden bg-gradient-to-br from-cyan-950/30 via-black to-blue-950/20">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,174,239,0.15),transparent_50%)]"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

                        <div className="relative text-center">
                            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6">
                                Let's build something great
                            </h2>
                            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
                                Join the teams already automating smarter and scaling faster with Aivora.
                            </p>
                            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-cyan-100 transition-all duration-300 shadow-[0_0_30px_rgba(0,174,239,0.3)] hover:shadow-[0_0_40px_rgba(0,174,239,0.5)] hover:scale-105">
                                Start for free
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;