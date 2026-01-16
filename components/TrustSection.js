'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, BadgeCheck, FileText } from 'lucide-react';
import { TRUST_POINTS } from '@/lib/constants';
import {
    fadeInUpVariants,
    staggerContainerVariants,
    lineRevealVariants
} from '@/lib/motion';

const iconMap = {
    Shield,
    Lock,
    BadgeCheck,
    FileText,
};

export default function TrustSection() {
    return (
        <section id="trust" className="relative section-spacing bg-cream-100 overflow-hidden">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{
                    backgroundImage: `radial-gradient(rgba(44, 44, 44, 0.8) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="container-luxury relative z-10">
                {/* Section Header */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={staggerContainerVariants}
                    className="text-center mb-16"
                >
                    <motion.span variants={fadeInUpVariants} className="label-luxury block mb-4">
                        Trust & Security
                    </motion.span>
                    <motion.h2 variants={fadeInUpVariants} className="heading-display text-3xl md:text-4xl lg:text-5xl mb-6">
                        Your Assets, Protected
                    </motion.h2>
                    <motion.div
                        variants={lineRevealVariants}
                        className="w-16 h-px mx-auto mb-8"
                        style={{ background: 'linear-gradient(90deg, transparent, var(--gold-muted), transparent)' }}
                    />
                    <motion.p variants={fadeInUpVariants} className="body-refined text-graphite-light max-w-2xl mx-auto">
                        Every asset under The X Club is protected by institutional-grade security,
                        comprehensive insurance, and transparent legal frameworks.
                    </motion.p>
                </motion.div>

                {/* Trust Points Grid */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={staggerContainerVariants}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {TRUST_POINTS.map((point) => {
                        const Icon = iconMap[point.icon];
                        return (
                            <motion.div
                                key={point.id}
                                variants={fadeInUpVariants}
                                className="group"
                            >
                                <div className="bg-cream-50 border border-cream-300 p-8 h-full hover:border-cream-400 hover:shadow-warm-md transition-all duration-500">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className="w-14 h-14 rounded-full bg-cream-200 flex items-center justify-center group-hover:bg-cream-300 transition-colors duration-500">
                                            {Icon && <Icon size={24} strokeWidth={1.5} className="text-gold-deep" />}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="heading-editorial text-sm tracking-[0.12em] mb-4 text-charcoal">
                                        {point.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="body-refined text-sm text-graphite-light leading-relaxed">
                                        {point.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Additional Trust Note */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUpVariants}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-3 bg-cream-50 border border-cream-300 px-6 py-4">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gold-primary">
                            <path d="M10 0L12.245 7.255L20 7.639L14.045 12.245L16.18 20L10 15.45L3.82 20L5.955 12.245L0 7.639L7.755 7.255L10 0Z" fill="currentColor" />
                        </svg>
                        <span className="body-refined text-sm text-graphite">
                            All assets verified by certified experts • Full provenance documentation
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
