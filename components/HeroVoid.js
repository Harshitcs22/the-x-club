'use client';

import { motion } from 'framer-motion';
import { BRAND, STATS } from '@/lib/constants';
import {
    fadeInUpVariants,
    staggerContainerVariants,
    subtleFloatVariants,
    lineRevealVariants
} from '@/lib/motion';
import AmbientGlow from './AmbientGlow';

export default function HeroVoid() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian-950">
            {/* Ambient Light Effects */}
            <AmbientGlow color="gold" size="xl" position="center" intensity="subtle" />
            <AmbientGlow color="platinum" size="lg" position="top-right" intensity="subtle" />
            <AmbientGlow color="warm" size="md" position="bottom-left" intensity="subtle" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 gradient-obsidian pointer-events-none" />

            {/* Grid Pattern (subtle) */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(rgba(168, 168, 179, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(168, 168, 179, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }}
            />

            {/* Main Content */}
            <div className="container-luxury relative z-10">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={staggerContainerVariants}
                    className="text-center max-w-5xl mx-auto"
                >
                    {/* Overline */}
                    <motion.div variants={fadeInUpVariants} className="mb-8">
                        <span className="label-luxury text-gold-500">
                            Invitation Only
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        variants={fadeInUpVariants}
                        className="heading-display text-white text-5xl md:text-7xl lg:text-8xl mb-8"
                    >
                        {BRAND.name}
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        variants={fadeInUpVariants}
                        className="heading-display text-platinum-400 text-2xl md:text-3xl lg:text-4xl italic mb-12"
                    >
                        {BRAND.tagline}
                    </motion.p>

                    {/* Divider Line */}
                    <motion.div
                        variants={lineRevealVariants}
                        className="w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-12"
                    />

                    {/* Description */}
                    <motion.p
                        variants={fadeInUpVariants}
                        className="body-refined text-platinum-500 text-lg md:text-xl max-w-2xl mx-auto mb-16"
                    >
                        An ultra-exclusive collective designed for the discerning few.
                        Access the inaccessible. Experience the extraordinary.
                        Welcome to a world without limits.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeInUpVariants}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <motion.a
                            href="#inquire"
                            className="label-luxury bg-white text-obsidian-950 px-10 py-4 hover:bg-gold-500 transition-all duration-500"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Begin Your Journey
                        </motion.a>
                        <motion.a
                            href="#experience"
                            className="label-luxury text-platinum-400 border border-platinum-700 px-10 py-4 hover:border-gold-500 hover:text-gold-500 transition-all duration-500"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Explore Privileges
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Floating Stats */}
                <motion.div
                    initial="initial"
                    animate="float"
                    variants={subtleFloatVariants}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-4xl"
                >
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainerVariants}
                        className="grid grid-cols-3 gap-8 px-8"
                    >
                        {STATS.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                variants={fadeInUpVariants}
                                className="text-center"
                            >
                                <div className="heading-display text-white text-3xl md:text-4xl mb-2">
                                    {stat.value}
                                </div>
                                <div className="label-luxury text-platinum-600 text-xs">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-px h-12 bg-gradient-to-b from-platinum-600 to-transparent"
                    />
                </motion.div>
            </div>
        </section>
    );
}
