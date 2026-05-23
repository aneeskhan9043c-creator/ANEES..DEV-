"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { LiquidButton } from "./liquid-glass-button";

function FloatingPaths({ position }: { position: number }) {
    const [pathCount, setPathCount] = useState(36);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setPathCount(window.innerWidth < 768 ? 14 : 36);
        }
    }, []);

    const paths = Array.from({ length: pathCount }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-slate-950 dark:text-white"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "ABOUT ME",
}: {
    title?: string;
}) {
    const words = title.split(" ");

    return (
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0c0e] py-24 md:py-32 px-6">
            <div className="absolute inset-0 z-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto w-full text-center flex flex-col items-center justify-center space-y-10 md:space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6 md:space-y-8"
                >
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[0.2em] sm:tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/50 uppercase leading-none pb-2 flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-12">
                        {words.map((word, wordIndex) => (
                            <span key={wordIndex} className="inline-block">
                                {word}
                            </span>
                        ))}
                    </h1>
                    <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto rounded-full" />
                </motion.div>

                <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
                    <motion.h3 
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ delay: 0.2, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-relaxed tracking-wide text-center w-full"
                    >
                        I'm Anees — a freelance web developer building clean, conversion-focused websites for local businesses.
                    </motion.h3>

                    <motion.p 
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ delay: 0.4, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                        className="text-sm sm:text-base md:text-[17px] text-white/70 leading-relaxed md:leading-loose tracking-wide font-normal max-w-3xl mx-auto text-center w-full"
                    >
                        I specialize in service-based industries: clinics, consultants, travel agencies, and institutes. Every site I build is mobile-first, fast-loading, and designed to turn visitors into paying clients. I work directly with business owners — no agencies, no middlemen.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: 0.6, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block mt-16 md:mt-24 group"
                >
                    <a 
                        href="https://wa.me/923706980818?text=Hi%20Anees,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20work%20with%20you!" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block"
                    >
                        <LiquidButton
                            size="xxl"
                            className="text-white hover:text-white/90 font-extrabold uppercase tracking-widest text-base rounded-full bg-white/10 border border-white/20 hover:scale-105 hover:bg-white/15 transition-all duration-300 flex items-center justify-center px-12 h-16 min-w-[240px]"
                        >
                            <span className="text-center w-full">Work With Me</span>
                        </LiquidButton>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

export function DemoBackgroundPaths() {
    return <BackgroundPaths title="ABOUT ME" />
}
