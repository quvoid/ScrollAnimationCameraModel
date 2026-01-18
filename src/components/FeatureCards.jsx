"use client";

import { motion } from "framer-motion";

const features = [
    {
        title: "108MP Sensor",
        description: "Capture every detail with our revolutionary ultra-high resolution sensor technology.",
        icon: "📸",
    },
    {
        title: "AI-Powered Focus",
        description: "Lightning-fast autofocus powered by advanced machine learning algorithms.",
        icon: "🎯",
    },
    {
        title: "8K Video",
        description: "Record cinematic 8K video at 60fps with professional-grade color science.",
        icon: "🎬",
    },
    {
        title: "Weather Sealed",
        description: "Built to withstand the elements with premium weather-resistant construction.",
        icon: "🌧️",
    },
];

export default function FeatureCards() {
    return (
        <section id="features" className="min-h-screen flex flex-col items-center justify-center px-6 py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
            >
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white/95 mb-6">
                    Cutting-Edge Features
                </h2>
                <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
                    Experience the perfect blend of innovation and craftsmanship
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group"
                    >
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full cursor-pointer">
                            <div className="text-5xl mb-6">{feature.icon}</div>
                            <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-white/60 leading-relaxed font-light">
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
