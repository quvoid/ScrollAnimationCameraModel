"use client";

import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 240;

export default function CameraScroll() {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // Text Opacity Transforms - refined timing for 240 frames
    // 0-15%: Title visible
    const opacityTitle = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    // 20-40%: "Engineered for Focus" (lens starts expanding)
    const opacityText1 = useTransform(scrollYProgress, [0.18, 0.25, 0.42], [0, 1, 0]);

    // 45-65%: "Precision Glass Elements" (lens fully exploded, showing internal optics)
    const opacityText2 = useTransform(scrollYProgress, [0.43, 0.52, 0.68], [0, 1, 0]);

    // 75-100%: "See Every Detail" CTA (lens reassembling)
    const opacityCTA = useTransform(scrollYProgress, [0.72, 0.82, 1], [0, 1, 1]);

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages = [];

            // Load images in batches for better performance
            const batchSize = 20;
            for (let batch = 0; batch < Math.ceil(FRAME_COUNT / batchSize); batch++) {
                const batchPromises = [];
                const start = batch * batchSize + 1;
                const end = Math.min((batch + 1) * batchSize, FRAME_COUNT);

                for (let i = start; i <= end; i++) {
                    const img = new Image();
                    const src = `/sequence/ezgif-frame-${i.toString().padStart(3, "0")}.jpg`;
                    img.src = src;

                    const promise = new Promise((resolve) => {
                        img.onload = () => resolve(img);
                        img.onerror = () => {
                            console.error(`Failed to load image ${src}`);
                            resolve(null);
                        };
                    });

                    batchPromises.push(promise);
                }

                const batchResults = await Promise.all(batchPromises);
                loadedImages.push(...batchResults);
            }

            setImages(loadedImages.filter(img => img !== null));
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    const render = (index) => {
        if (!images.length || !canvasRef.current) return;

        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        const idx = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(index)));
        const img = images[idx];

        if (!img) return;

        const canvas = canvasRef.current;

        // Resize canvas to full screen for best resolution
        if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate aspect ratio to cover (for seamless blending)
        const imgRatio = img.width / img.height;
        const canvasRatio = canvas.width / canvas.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        // Use 'cover' instead of 'contain' for seamless background blending
        if (canvasRatio > imgRatio) {
            drawWidth = canvas.width;
            drawHeight = img.height * (canvas.width / img.width);
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawHeight = canvas.height;
            drawWidth = img.width * (canvas.height / img.height);
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    useMotionValueEvent(currentIndex, "change", (latest) => {
        render(latest);
    });

    // Initial render on load
    useEffect(() => {
        if (isLoaded) render(0);
    }, [isLoaded]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (isLoaded) render(currentIndex.get());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded]);

    return (
        <div ref={containerRef} className="h-[500vh] relative bg-[#2a2a2a]">
            {!isLoaded && (
                <div className="h-screen w-full flex flex-col items-center justify-center sticky top-0 bg-[#2a2a2a] text-white/50 z-50">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white/70 mb-6"></div>
                    <p className="text-sm tracking-wide font-light">Loading Zenith Optics...</p>
                </div>
            )}

            <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ top: 0, opacity: isLoaded ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }}>
                <canvas ref={canvasRef} className="block w-full h-full" />

                {/* Text Overlays */}
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-center items-center px-4">

                    {/* 0% - Hero Title */}
                    <motion.div
                        style={{ opacity: opacityTitle }}
                        className="absolute text-center z-10"
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white/95 mb-4">
                            Zenith Optics
                        </h1>
                        <p className="text-xl md:text-3xl text-white/70 tracking-tight font-light">
                            Cinematic Precision.
                        </p>
                    </motion.div>

                    {/* 25% - Left Aligned */}
                    <motion.div
                        style={{ opacity: opacityText1 }}
                        className="absolute left-8 md:left-20 lg:left-32 max-w-md z-10"
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white/95 mb-3">
                            Engineered<br />for Focus.
                        </h2>
                        <p className="text-base md:text-lg text-white/65 font-light leading-relaxed">
                            Unmatched clarity in every shot.<br />
                            Professional-grade optics.
                        </p>
                    </motion.div>

                    {/* 55% - Right Aligned */}
                    <motion.div
                        style={{ opacity: opacityText2 }}
                        className="absolute right-8 md:right-20 lg:right-32 max-w-md text-right z-10"
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white/95 mb-3">
                            Precision<br />Glass Elements.
                        </h2>
                        <p className="text-base md:text-lg text-white/65 font-light leading-relaxed">
                            Multi-coated optics.<br />
                            Crafted for the perfect image.
                        </p>
                    </motion.div>

                    {/* 85% - Center CTA */}
                    <motion.div
                        style={{ opacity: opacityCTA }}
                        className="absolute text-center z-10"
                    >
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white/95 mb-10">
                            See Every Detail.
                        </h2>
                        <button className="pointer-events-auto px-10 py-4 bg-white text-black rounded-full hover:bg-white/95 hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-2xl">
                            Pre-order Now
                        </button>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
