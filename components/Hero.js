'use client';

import { motion } from 'framer-motion';
import { BRAND } from '@/lib/constants';
import {
    fadeInUpVariants,
    staggerContainerVariants,
    lineRevealVariants
} from '@/lib/motion';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream-100">
            {/* Soft Light Gradient */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(184, 160, 122, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 80%, rgba(184, 160, 122, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 20% 70%, rgba(184, 160, 122, 0.04) 0%, transparent 50%)
          `
                }}
            />

            {/* Subtle Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `linear-gradient(rgba(44, 44, 44, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(44, 44, 44, 0.5) 1px, transparent 1px)`,
                    backgroundSize: '100px 100px',
                }}
            />

            {/* Main Content */}
            <div className="container-luxury relative z-10 pt-24">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={staggerContainerVariants}
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Overline */}
                    <motion.div variants={fadeInUpVariants} className="mb-6">
                        <span className="label-luxury">
                            Fractional Ownership
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        variants={fadeInUpVariants}
                        className="heading-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 leading-tight"
                    >
                        {BRAND.tagline}
                    </motion.h1>

                    {/* Divider Line */}
                    <motion.div
                        variants={lineRevealVariants}
                        className="w-20 h-px mx-auto mb-8"
                        style={{
                            background: 'linear-gradient(90deg, transparent, var(--gold-muted), transparent)'
                        }}
                    />

                    {/* Description */}
                    <motion.p
                        variants={fadeInUpVariants}
                        className="body-refined text-lg md:text-xl max-w-2xl mx-auto mb-12"
                    >
                        {BRAND.description}
                        <br />
                        <span className="text-graphite-light">
                            Watches. Sneakers. Vehicles. — Shared ownership, exclusive access.
                        </span>
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeInUpVariants}
                        className="flex flex-col sm:flex-row gap-5 justify-center items-center"
                    >
                        <motion.a
                            href="#assets"
                            className="btn-primary"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Explore Assets
                        </motion.a>
                        <motion.a
                            href="#how-it-works"
                            className="btn-secondary"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            How It Works
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-px h-16 bg-gradient-to-b from-gold-muted to-transparent"
                    />
                </motion.div>
            </div>
        </section>
    );
}
