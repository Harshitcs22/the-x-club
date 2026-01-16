'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import AssetCard from '@/components/AssetCard';
import AssetModal from '@/components/AssetModal';
import TrustSection from '@/components/TrustSection';
import MembershipGate from '@/components/MembershipGate';
import { ASSETS, BRAND } from '@/lib/constants';
import {
    fadeInUpVariants,
    staggerContainerVariants,
    lineRevealVariants
} from '@/lib/motion';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAsset, setSelectedAsset] = useState(null);

    const handleViewDetails = (asset) => {
        setSelectedAsset(asset);
        setIsModalOpen(true);
    };

    return (
        <main className="relative min-h-screen bg-cream-100">
            <Navbar />

            {/* Hero Section */}
            <Hero />

            {/* How It Works Section */}
            <HowItWorks />

            {/* Available Assets Section */}
            <section id="assets" className="relative section-spacing bg-cream-100 overflow-hidden">
                {/* Subtle ambient */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(184, 160, 122, 0.04) 0%, transparent 50%)'
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
                            Available Now
                        </motion.span>
                        <motion.h2 variants={fadeInUpVariants} className="heading-display text-3xl md:text-4xl lg:text-5xl mb-6">
                            Featured Assets
                        </motion.h2>
                        <motion.div
                            variants={lineRevealVariants}
                            className="w-16 h-px mx-auto mb-8"
                            style={{ background: 'linear-gradient(90deg, transparent, var(--gold-muted), transparent)' }}
                        />
                        <motion.p variants={fadeInUpVariants} className="body-refined text-graphite-light max-w-2xl mx-auto">
                            Each asset is carefully selected, authenticated, and ready for fractional ownership.
                            Select your shares and begin your journey.
                        </motion.p>
                    </motion.div>

                    {/* Asset Cards Grid */}
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                        {ASSETS.map((asset, index) => (
                            <AssetCard
                                key={asset.id}
                                asset={asset}
                                index={index}
                                onViewDetails={handleViewDetails}
                            />
                        ))}
                    </div>

                    {/* More Assets Note */}
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUpVariants}
                        className="mt-16 text-center"
                    >
                        <p className="body-refined text-graphite-muted text-sm">
                            New assets are added monthly. Members receive priority notification.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Trust & Security Section */}
            <TrustSection />

            {/* Membership Gate Section */}
            <MembershipGate />

            {/* Footer */}
            <footer className="relative py-16 bg-cream-50 border-t border-cream-300">
                <div className="container-luxury">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Logo */}
                        <div className="heading-editorial text-graphite-light text-base tracking-[0.25em]">
                            {BRAND.name}
                        </div>

                        {/* Tagline */}
                        <p className="body-refined text-graphite-muted text-sm italic">
                            Own what you could never buy alone.
                        </p>

                        {/* Links */}
                        <div className="flex gap-8">
                            <a href="#" className="label-luxury text-xs text-graphite-muted hover:text-gold-primary transition-colors duration-300">
                                Privacy
                            </a>
                            <a href="#" className="label-luxury text-xs text-graphite-muted hover:text-gold-primary transition-colors duration-300">
                                Terms
                            </a>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-10 pt-8 border-t border-cream-300 text-center">
                        <p className="body-refined text-graphite-muted text-xs">
                            © {BRAND.year} {BRAND.name}. All rights reserved.
                            Fractional ownership does not constitute legal title.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Asset Detail Modal */}
            <AssetModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                asset={selectedAsset}
            />
        </main>
    );
}
