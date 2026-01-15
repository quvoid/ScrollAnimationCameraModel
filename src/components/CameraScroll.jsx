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

    // 10 Storytelling Moments - Each with opacity, Y position, and scale
    const story1Opacity = useTransform(scrollYProgress, [0, 0.06, 0.12, 0.15], [0, 1, 1, 0]);
    const story1Y = useTransform(scrollYProgress, [0, 0.06, 0.12, 0.15], [30, 0, 0, -30]);
    const story1Scale = useTransform(scrollYProgress, [0, 0.06], [0.95, 1]);

    const story2Opacity = useTransform(scrollYProgress, [0.12, 0.17, 0.22, 0.25], [0, 1, 1, 0]);
    const story2Y = useTransform(scrollYProgress, [0.12, 0.17, 0.22, 0.25], [30, 0, 0, -30]);
    const story2Scale = useTransform(scrollYProgress, [0.12, 0.17], [0.95, 1]);

    const story3Opacity = useTransform(scrollYProgress, [0.22, 0.27, 0.32, 0.35], [0, 1, 1, 0]);
    const story3Y = useTransform(scrollYProgress, [0.22, 0.27, 0.32, 0.35], [30, 0, 0, -30]);
    const story3Scale = useTransform(scrollYProgress, [0.22, 0.27], [0.95, 1]);

    const story4Opacity = useTransform(scrollYProgress, [0.32, 0.37, 0.42, 0.45], [0, 1, 1, 0]);
    const story4Y = useTransform(scrollYProgress, [0.32, 0.37, 0.42, 0.45], [30, 0, 0, -30]);
    const story4Scale = useTransform(scrollYProgress, [0.32, 0.37], [0.95, 1]);

    const story5Opacity = useTransform(scrollYProgress, [0.42, 0.47, 0.52, 0.55], [0, 1, 1, 0]);
    const story5Y = useTransform(scrollYProgress, [0.42, 0.47, 0.52, 0.55], [30, 0, 0, -30]);
    const story5Scale = useTransform(scrollYProgress, [0.42, 0.47], [0.95, 1]);

    const story6Opacity = useTransform(scrollYProgress, [0.52, 0.57, 0.62, 0.65], [0, 1, 1, 0]);
    const story6Y = useTransform(scrollYProgress, [0.52, 0.57, 0.62, 0.65], [30, 0, 0, -30]);
    const story6Scale = useTransform(scrollYProgress, [0.52, 0.57], [0.95, 1]);

    const story7Opacity = useTransform(scrollYProgress, [0.62, 0.67, 0.72, 0.75], [0, 1, 1, 0]);
    const story7Y = useTransform(scrollYProgress, [0.62, 0.67, 0.72, 0.75], [30, 0, 0, -30]);
    const story7Scale = useTransform(scrollYProgress, [0.62, 0.67], [0.95, 1]);

    const story8Opacity = useTransform(scrollYProgress, [0.72, 0.77, 0.82, 0.85], [0, 1, 1, 0]);
    const story8Y = useTransform(scrollYProgress, [0.72, 0.77, 0.82, 0.85], [30, 0, 0, -30]);
    const story8Scale = useTransform(scrollYProgress, [0.72, 0.77], [0.95, 1]);

    const story9Opacity = useTransform(scrollYProgress, [0.82, 0.87, 0.92, 0.95], [0, 1, 1, 0]);
    const story9Y = useTransform(scrollYProgress, [0.82, 0.87, 0.92, 0.95], [30, 0, 0, -30]);
    const story9Scale = useTransform(scrollYProgress, [0.82, 0.87], [0.95, 1]);

    const story10Opacity = useTransform(scrollYProgress, [0.92, 0.96, 1], [0, 1, 1]);
    const story10Y = useTransform(scrollYProgress, [0.92, 0.96, 1], [30, 0, 0]);
    const story10Scale = useTransform(scrollYProgress, [0.92, 0.96], [0.95, 1]);

    const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages = [];
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

        if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const imgRatio = img.width / img.height;
        const canvasRatio = canvas.width / canvas.height;

        let drawWidth, drawHeight, offsetX, offsetY;

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

    useEffect(() => {
        if (isLoaded) render(0);
    }, [isLoaded]);

    useEffect(() => {
        const handleResize = () => {
            if (isLoaded) render(currentIndex.get());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded]);

    const textContainerStyle = {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 24px',
        zIndex: 10
    };

    const headingStyle = {
        fontSize: 'clamp(48px, 8vw, 128px)',
        fontWeight: 900,
        letterSpacing: '-0.05em',
        color: 'white',
        marginBottom: '24px',
        textShadow: '0 25px 50px rgba(0,0,0,0.5)',
        lineHeight: 1.1,
        textAlign: 'center'
    };

    const subtitleStyle = {
        fontSize: 'clamp(20px, 2.5vw, 32px)',
        color: 'rgba(255,255,255,0.8)',
        fontWeight: 300,
        lineHeight: 1.6,
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: '16px 32px',
        borderRadius: '16px',
        textAlign: 'center',
        maxWidth: '800px'
    };

    const momentStyle = {
        position: 'absolute',
        textAlign: 'center',
        maxWidth: '90%'
    };

    return (
        <div ref={containerRef} style={{ height: '500vh', position: 'relative', backgroundColor: '#2a2a2a' }}>
            {!isLoaded && (
                <div style={{
                    height: '100vh',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'sticky',
                    top: 0,
                    backgroundColor: '#2a2a2a',
                    color: 'rgba(255,255,255,0.5)',
                    zIndex: 50
                }}>
                    <div style={{
                        animation: 'spin 1s linear infinite',
                        borderRadius: '50%',
                        height: '64px',
                        width: '64px',
                        borderTop: '2px solid rgba(255,255,255,0.7)',
                        borderBottom: '2px solid rgba(255,255,255,0.7)',
                        marginBottom: '24px'
                    }}></div>
                    <p style={{ fontSize: '14px', letterSpacing: '0.05em', fontWeight: 300 }}>Loading Zenith Optics...</p>
                </div>
            )}

            <div style={{
                position: 'sticky',
                top: 0,
                height: '100vh',
                width: '100%',
                overflow: 'hidden',
                opacity: isLoaded ? 1 : 0,
                transition: 'opacity 0.8s ease-in-out'
            }}>
                <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />

                {/* Progress Bar */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    zIndex: 50
                }}>
                    <motion.div
                        style={{
                            height: '100%',
                            backgroundColor: 'rgba(255,255,255,0.6)',
                            width: progressWidth
                        }}
                    />
                </div>

                {/* Text Overlays */}
                <div style={textContainerStyle}>
                    <motion.div style={{ ...momentStyle, opacity: story1Opacity, y: story1Y, scale: story1Scale }}>
                        <h2 style={headingStyle}>Every Frame<br />Tells a Story</h2>
                        <p style={subtitleStyle}>Welcome to the world of Zenith Optics</p>
                    </motion.div>

                    <motion.div style={{ ...momentStyle, opacity: story2Opacity, y: story2Y, scale: story2Scale }}>
                        <h2 style={headingStyle}>Engineered for<br />Perfection</h2>
                        <p style={subtitleStyle}>Precision craftsmanship meets cutting-edge technology</p>
                    </motion.div>

                    <motion.div style={{ ...momentStyle, opacity: story3Opacity, y: story3Y, scale: story3Scale }}>
                        <h2 style={headingStyle}>See Beyond<br />the Ordinary</h2>
                        <p style={subtitleStyle}>Capture what others can only imagine</p>
                    </motion.div>

                    <motion.div style={{ ...momentStyle, opacity: story4Opacity, y: story4Y, scale: story4Scale }}>
                        <h2 style={headingStyle}>16 Elements<br />Infinite Possibilities</h2>
                        <p style={subtitleStyle}>Each glass element meticulously designed and coated</p>
                    </motion.div>

                    <motion.div style={{ ...momentStyle, opacity: story5Opacity, y: story5Y, scale: story5Scale }}>
                        <h2 style={headingStyle}>Precision at<br />Every Layer</h2>
                        <p style={subtitleStyle}>Multi-coated optics eliminate flare and ghosting</p>
                    </motion.div>

                    <motion.div style={{ ...momentStyle, opacity: story6Opacity, y: story6Y, scale: story6Scale }}>
                        <h2 style={headingStyle}>Capturing<br />the Invisible</h2>
                        <p style={subtitleStyle}>Light bends to your creative will</p>
                    </motion.div>

                    <motion.div style={{ ...momentStyle, opacity: story7Opacity, y: story7Y, scale: story7Scale }}>
                        <h2 style={headingStyle}>Where Art<br />Meets Science</h2>
                        <p style={subtitleStyle}>Ultra-fast autofocus locks in 0.03 seconds</p>
                    </motion.div>

                    <motion.div style={{ ...momentStyle, opacity: story8Opacity, y: story8Y, scale: story8Scale }}>
                        <h2 style={headingStyle}>Never Miss<br />a Shot</h2>
                        <p style={subtitleStyle}>Weather-sealed for any adventure</p>
                    </motion.div>

                    <motion.div style={{ ...momentStyle, opacity: story9Opacity, y: story9Y, scale: story9Scale }}>
                        <h2 style={headingStyle}>Built for<br />Visionaries</h2>
                        <p style={subtitleStyle}>Join the creators who demand excellence</p>
                    </motion.div>

                    <motion.div style={{ ...momentStyle, opacity: story10Opacity, y: story10Y, scale: story10Scale }}>
                        <h2 style={headingStyle}>Your Story<br />Awaits</h2>
                        <button style={{
                            padding: '20px 48px',
                            backgroundColor: 'white',
                            color: 'black',
                            borderRadius: '9999px',
                            fontWeight: 700,
                            fontSize: 'clamp(18px, 2vw, 24px)',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                            cursor: 'pointer',
                            border: 'none',
                            transition: 'transform 0.3s ease',
                            pointerEvents: 'auto',
                            marginTop: '16px'
                        }}
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        >
                            Pre-order Zenith Optics
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
