import React from 'react';
import { ArrowRight, Code2, Sparkles, Zap, Globe, Database, Palette, Bot, Workflow, BarChart } from "lucide-react";
import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header';

const Services = () => {
    const services = [
        {
            icon: Bot,
            title: "AI Integration",
            description: "Harness the power of artificial intelligence to automate processes and unlock insights that drive smarter decisions.",
        },
        {
            icon: Workflow,
            title: "Workflow Automation",
            description: "Streamline repetitive tasks and optimize operations with intelligent automation that saves time and reduces errors.",
        },
        {
            icon: BarChart,
            title: "Data Analytics",
            description: "Transform raw data into actionable intelligence with powerful analytics tools and custom dashboards.",
        },
        {
            icon: Code2,
            title: "Custom Development",
            description: "Build tailored solutions that perfectly fit your business needs with modern, scalable architecture.",
        },
        {
            icon: Globe,
            title: "Cloud Infrastructure",
            description: "Deploy and scale with confidence using robust cloud infrastructure designed for reliability and performance.",
        },
        {
            icon: Sparkles,
            title: "Innovation Consulting",
            description: "Stay ahead of the curve with strategic guidance on emerging technologies and digital transformation.",
        },
    ];

    return (
        <div className="bg-black text-white min-h-screen">
            <Header />

            <section className="pt-20 pb-16 md:pt-28 md:pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(0,174,239,.15)_15%,transparent_78%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_25%_25%,rgba(0,174,239,0.1),transparent)]"></div>

                <div className="absolute top-20 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6
                bg-gradient-to-b from-cyan-100 via-cyan-200 to-cyan-400 text-transparent bg-clip-text
                drop-shadow-[0_0_30px_rgba(0,174,239,0.6)]">
                                Our Services
                            </h1>
                            <div className="absolute inset-0 text-5xl md:text-7xl font-bold tracking-tighter
                bg-gradient-to-b from-blue-300 via-cyan-400 to-blue-600 text-transparent bg-clip-text
                blur-sm opacity-20 -z-10">
                                Our Services
                            </div>
                        </div>

                        <p className="text-lg md:text-xl text-cyan-100/70 leading-relaxed max-w-3xl">
                            Comprehensive solutions designed to <span className="text-cyan-300 font-semibold">elevate your business</span> through cutting-edge technology and intelligent automation.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group relative p-8 rounded-2xl border border-cyan-400/30 bg-black/20 backdrop-blur-sm
                      hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.03]
                      shadow-[0_0_25px_rgba(0,174,239,0.2)] hover:shadow-[0_0_40px_rgba(0,174,239,0.4)]
                      overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className="relative space-y-5">
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 
                        flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 
                        transition-all duration-500 border border-cyan-400/40 
                        shadow-[0_0_20px_rgba(0,174,239,0.3)] group-hover:shadow-[0_0_30px_rgba(0,174,239,0.5)]">
                                                <Icon className="w-7 h-7 text-cyan-300 group-hover:text-cyan-200 transition-colors" />
                                            </div>

                                            <h3 className="text-2xl font-semibold tracking-tight text-cyan-50 group-hover:text-cyan-100 transition-colors">
                                                {service.title}
                                            </h3>

                                            <p className="text-sm text-cyan-100/60 leading-relaxed group-hover:text-cyan-100/80 transition-colors">
                                                {service.description}
                                            </p>

                                            <div className="pt-3 flex items-center gap-2 text-sm font-medium text-cyan-300 
                        opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 
                        transition-all duration-300">
                                                Explore solution
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Services;