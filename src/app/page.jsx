"use client";

import CameraScroll from "@/components/CameraScroll";
import SiliconeNavbar from "@/components/Navbar";
import FeatureCards from "@/components/FeatureCards";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#2a2a2a]">
            <SiliconeNavbar />
            <CameraScroll />
            <FeatureCards />

            {/* Minimal Footer */}
            <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white/95">
                        Ready to Create?
                    </h2>
                    <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/70 leading-relaxed font-light">
                        Join thousands of creators who trust Silicone Optics<br />
                        to bring their vision to life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                        <Button
                            size="lg"
                            radius="full"
                            className="px-12 py-7 bg-white text-black font-bold text-lg shadow-2xl hover:scale-105 transition-transform"
                        >
                            Pre-order Now
                        </Button>
                        <Button
                            size="lg"
                            radius="full"
                            variant="bordered"
                            className="px-12 py-7 border-2 border-white/30 text-white font-semibold text-lg hover:border-white/60 hover:scale-105 transition-all"
                        >
                            Learn More
                        </Button>
                    </div>
                </motion.div>

                {/* Footer Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-32 space-y-8"
                >
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
                        © 2024 Silicone Optics. All rights reserved.
                    </p>
                </motion.div>
            </section>
        </main>
    );
}
