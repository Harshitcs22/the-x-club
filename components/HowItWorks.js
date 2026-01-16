'use client';

import { motion } from 'framer-motion';
import { Search, LayoutGrid, Wallet, Calendar } from 'lucide-react';
import { HOW_IT_WORKS } from '@/lib/constants';
import {
    fadeInUpVariants,
    staggerContainerVariants,
    lineRevealVariants
} from '@/lib/motion';

const iconMap = {
    Search,
    LayoutGrid,
    Wallet,
    Calendar,
};

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative section-spacing bg-cream-50 overflow-hidden">
            {/* Subtle background gradient */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(184, 160, 122, 0.05) 0%, transparent 60%)'
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
                        The Model
                    </motion.span>
                    <motion.h2 variants={fadeInUpVariants} className="heading-display text-3xl md:text-4xl lg:text-5xl mb-6">
                        How Fractional Ownership Works
                    </motion.h2>
                    <motion.div
                        variants={lineRevealVariants}
                        className="w-16 h-px mx-auto"
                        style={{ background: 'linear-gradient(90deg, transparent, var(--gold-muted), transparent)' }}
                    />
                </motion.div>

                {/* Steps Grid */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={staggerContainerVariants}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
                >
                    {HOW_IT_WORKS.map((item, index) => {
                        const Icon = iconMap[item.icon];
                        return (
                            <motion.div
                                key={item.step}
                                variants={fadeInUpVariants}
                                className="relative group"
                            >
                                <div className="text-center">
                                    {/* Step Number */}
                                    <div className="mb-6">
                                        <span className="number-display text-6xl text-cream-400 group-hover:text-cream-500 transition-colors duration-500">
                                            {item.step.toString().padStart(2, '0')}
                                        </span>
                                    </div>

                                    {/* Icon */}
                                    <div className="mb-5 flex justify-center">
                                        <div className="w-12 h-12 rounded-full bg-cream-200 flex items-center justify-center group-hover:bg-cream-300 transition-colors duration-500">
                                            {Icon && <Icon size={22} strokeWidth={1.5} className="text-gold-primary" />}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="heading-editorial text-sm tracking-[0.15em] mb-4 text-charcoal">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="body-refined text-sm text-graphite-light leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Connector Line (except last) */}
                                {index < HOW_IT_WORKS.length - 1 && (
                                    <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-full">
                                        <div className="h-px bg-cream-300 w-full" />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom Note */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUpVariants}
                    className="mt-16 text-center"
                >
                    <p className="body-refined text-graphite-muted text-sm max-w-xl mx-auto">
                        The X Club retains legal ownership of all assets. Shareholders receive proportional usage rights
                        and benefit from professional management, insurance, and secure storage.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
