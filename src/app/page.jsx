"use client";

import CameraScroll from "@/components/CameraScroll";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedSection({ children, className = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function Home() {
    return (
        <main className="min-h-screen bg-[#2a2a2a]">
            <CameraScroll />

            {/* Features Section */}
            <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 bg-gradient-to-b from-[#2a2a2a] to-[#1f1f1f]">
                <AnimatedSection>
                    <h2 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white/95 mb-16">
                        Unmatched<br />Performance.
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    <AnimatedSection>
                        <div className="space-y-4">
                            <div className="text-6xl font-black text-white/30">01</div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white/95 tracking-tight">
                                Ultra-Fast Autofocus
                            </h3>
                            <p className="text-lg text-white/60 leading-relaxed font-light">
                                Lock onto your subject in 0.03 seconds with our advanced phase-detection system.
                                Never miss a moment.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="space-y-4">
                            <div className="text-6xl font-black text-white/30">02</div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white/95 tracking-tight">
                                16-Layer Coating
                            </h3>
                            <p className="text-lg text-white/60 leading-relaxed font-light">
                                Multi-coated precision glass elements eliminate flare and ghosting.
                                Pure, cinematic clarity.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="space-y-4">
                            <div className="text-6xl font-black text-white/30">03</div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white/95 tracking-tight">
                                Weather Sealed
                            </h3>
                            <p className="text-lg text-white/60 leading-relaxed font-light">
                                Shoot in any condition. Dust and moisture resistant construction
                                built for professionals.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Technical Specs Section */}
            <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 bg-gradient-to-b from-[#1f1f1f] to-[#1a1a1a]">
                <AnimatedSection>
                    <h2 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white/95 mb-20">
                        Technical<br />Specifications.
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
                    <AnimatedSection>
                        <div className="border-b border-white/10 pb-6">
                            <div className="text-sm text-white/40 uppercase tracking-wider mb-2">Focal Length</div>
                            <div className="text-3xl font-bold text-white/95">24-70mm</div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="border-b border-white/10 pb-6">
                            <div className="text-sm text-white/40 uppercase tracking-wider mb-2">Maximum Aperture</div>
                            <div className="text-3xl font-bold text-white/95">f/2.8</div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="border-b border-white/10 pb-6">
                            <div className="text-sm text-white/40 uppercase tracking-wider mb-2">Minimum Focus Distance</div>
                            <div className="text-3xl font-bold text-white/95">0.38m</div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="border-b border-white/10 pb-6">
                            <div className="text-sm text-white/40 uppercase tracking-wider mb-2">Filter Diameter</div>
                            <div className="text-3xl font-bold text-white/95">82mm</div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="border-b border-white/10 pb-6">
                            <div className="text-sm text-white/40 uppercase tracking-wider mb-2">Optical Elements</div>
                            <div className="text-3xl font-bold text-white/95">16 Elements / 12 Groups</div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="border-b border-white/10 pb-6">
                            <div className="text-sm text-white/40 uppercase tracking-wider mb-2">Weight</div>
                            <div className="text-3xl font-bold text-white/95">805g</div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 bg-gradient-to-b from-[#1a1a1a] to-[#151515]">
                <AnimatedSection>
                    <h2 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white/95 mb-16">
                        Built For<br />Creators.
                    </h2>
                </AnimatedSection>

                <div className="space-y-12 max-w-4xl">
                    <AnimatedSection>
                        <div className="space-y-3">
                            <h3 className="text-4xl md:text-5xl font-bold text-white/95 tracking-tight">
                                Cinematic Storytelling
                            </h3>
                            <p className="text-xl text-white/60 leading-relaxed font-light">
                                Capture breathtaking footage with smooth bokeh and edge-to-edge sharpness.
                                The Zenith Optics lens delivers Hollywood-grade image quality for filmmakers
                                who demand perfection.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="space-y-3">
                            <h3 className="text-4xl md:text-5xl font-bold text-white/95 tracking-tight">
                                Professional Photography
                            </h3>
                            <p className="text-xl text-white/60 leading-relaxed font-light">
                                From weddings to commercial shoots, this versatile zoom lens adapts to any scenario.
                                Lightning-fast autofocus and exceptional low-light performance ensure you never miss the shot.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="space-y-3">
                            <h3 className="text-4xl md:text-5xl font-bold text-white/95 tracking-tight">
                                Documentary & Travel
                            </h3>
                            <p className="text-xl text-white/60 leading-relaxed font-light">
                                Weather-sealed construction and lightweight design make it the perfect companion
                                for adventures. Shoot confidently in rain, dust, or extreme conditions.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[#151515] to-[#0a0a0a]">
                <AnimatedSection className="space-y-12">
                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white/95">
                        Experience Zenith.
                    </h2>
                    <p className="max-w-3xl mx-auto text-xl md:text-2xl text-white/70 leading-relaxed font-light">
                        The next generation of cinematic optics is here.
                        Designed for visionaries. Built for perfection.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                        <button className="px-12 py-5 bg-white text-black rounded-full hover:bg-white/95 hover:scale-105 transition-all duration-300 font-bold text-lg shadow-2xl">
                            Pre-order Now
                        </button>
                        <button className="px-12 py-5 border-2 border-white/30 text-white rounded-full hover:border-white/60 hover:scale-105 transition-all duration-300 font-semibold text-lg">
                            View Gallery
                        </button>
                    </div>
                </AnimatedSection>

                {/* Footer Links */}
                <AnimatedSection className="mt-32 space-y-8">
                    <div className="flex gap-8 justify-center">
                        <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 underline underline-offset-4 text-lg">
                            Instagram
                        </a>
                        <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 underline underline-offset-4 text-lg">
                            Twitter
                        </a>
                        <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 underline underline-offset-4 text-lg">
                            Contact
                        </a>
                    </div>
                    <p className="text-sm text-white/40 font-light">
                        © 2024 Zenith Optics. All rights reserved.
                    </p>
                </AnimatedSection>
            </section>
        </main>
    );
}
