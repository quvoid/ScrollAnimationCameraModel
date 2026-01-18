"use client";

import { useState } from "react";

export default function SiliconeNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-white font-bold text-lg tracking-tight">
                            SILICONE <span className="font-light text-white/80">OPTICS</span>
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#features"
                            className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
                        >
                            Features
                        </a>
                        <a
                            href="#gallery"
                            className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
                        >
                            Gallery
                        </a>
                        <a
                            href="#specs"
                            className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
                        >
                            Specs
                        </a>
                        <a
                            href="#contact"
                            className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
                        >
                            Contact
                        </a>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button className="px-6 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-all duration-200">
                            Pre-order
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white/70 hover:text-white p-2"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5">
                    <div className="px-6 py-4 space-y-3">
                        <a
                            href="#features"
                            className="block text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Features
                        </a>
                        <a
                            href="#gallery"
                            className="block text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Gallery
                        </a>
                        <a
                            href="#specs"
                            className="block text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Specs
                        </a>
                        <a
                            href="#contact"
                            className="block text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </a>
                        <button className="w-full mt-4 px-6 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-all duration-200">
                            Pre-order
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
