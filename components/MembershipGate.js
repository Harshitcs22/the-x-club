'use client';

import { motion } from 'framer-motion';
import { Send, Shield, Users, KeyRound } from 'lucide-react';
import { BRAND, CONTACT } from '@/lib/constants';
import {
    fadeInUpVariants,
    staggerContainerVariants,
    lineRevealVariants,
    easings
} from '@/lib/motion';

// Floating card animation with perceptual 3D
const floatingCardVariants = {
    initial: {
        y: 0,
        rotateX: 0,
        rotateY: 0,
    },
    float: {
        y: [-3, 3, -3],
        rotateX: [-1.5, 1.5, -1.5],
        rotateY: [-2, 2, -2],
        transition: {
            duration: 12,
            ease: easings.calm,
            repeat: Infinity,
            repeatType: 'loop',
        },
    },
};

export default function MembershipGate() {
    return (
        <section id="access" className="relative section-spacing overflow-hidden" style={{ background: 'var(--cream-100)' }}>
            {/* Layered Background - Depth Effect */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Base gradient */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `
              radial-gradient(ellipse 100% 80% at 50% 100%, rgba(184, 160, 122, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 20% 20%, rgba(184, 160, 122, 0.04) 0%, transparent 50%),
              radial-gradient(ellipse 50% 30% at 80% 30%, rgba(184, 160, 122, 0.03) 0%, transparent 50%)
            `
                    }}
                />

                {/* Subtle vignette for depth */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(237, 231, 220, 0.5) 100%)'
                    }}
                />
            </div>

            <div className="container-luxury relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                    {/* Left: Floating Access Card */}
                    <motion.div
                        initial="initial"
                        whileInView="float"
                        viewport={{ once: true }}
                        className="relative order-2 lg:order-1"
                        style={{ perspective: '1200px' }}
                    >
                        <motion.div
                            variants={floatingCardVariants}
                            className="relative"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* The Floating Card */}
                            <div
                                className="relative bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200 border border-cream-300 p-10 md:p-12"
                                style={{
                                    boxShadow: `
                    0 30px 60px rgba(60, 50, 40, 0.15),
                    0 15px 30px rgba(60, 50, 40, 0.1),
                    0 5px 15px rgba(60, 50, 40, 0.08)
                  `,
                                }}
                            >
                                {/* Card Header */}
                                <div className="flex items-start justify-between mb-10">
                                    <div>
                                        <span className="label-luxury text-xs block mb-2">Private Access</span>
                                        <div className="heading-editorial text-xl tracking-[0.2em] text-charcoal">
                                            {BRAND.name}
                                        </div>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-cream-200 flex items-center justify-center">
                                        <KeyRound size={20} strokeWidth={1.5} className="text-gold-deep" />
                                    </div>
                                </div>

                                {/* Divider with gold accent */}
                                <div className="h-px bg-gradient-to-r from-gold-muted via-cream-400 to-transparent mb-10" />

                                {/* Access Tiers Preview */}
                                <div className="space-y-6 mb-10">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="body-refined text-sm text-charcoal font-medium">Collector Tier</p>
                                            <p className="body-refined text-xs text-graphite-muted">Entry into ownership pools</p>
                                        </div>
                                        <span className="number-display text-lg text-charcoal">₹2,50,000</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="body-refined text-sm text-charcoal font-medium">Connoisseur Tier</p>
                                            <p className="body-refined text-xs text-graphite-muted">Priority asset access</p>
                                        </div>
                                        <span className="number-display text-lg text-charcoal">₹10,00,000</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="body-refined text-sm text-charcoal font-medium">Patron Tier</p>
                                            <p className="body-refined text-xs text-graphite-muted">Unlimited pool participation</p>
                                        </div>
                                        <span className="number-display text-lg text-gold-primary">By Invitation</span>
                                    </div>
                                </div>

                                {/* Card Footer */}
                                <div className="flex items-center justify-between pt-6 border-t border-cream-300">
                                    <div className="flex items-center gap-2">
                                        <Shield size={14} strokeWidth={1.5} className="text-gold-muted" />
                                        <span className="body-refined text-xs text-graphite-muted">Vetted Members Only</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users size={14} strokeWidth={1.5} className="text-gold-muted" />
                                        <span className="body-refined text-xs text-graphite-muted">Limited Seats</span>
                                    </div>
                                </div>

                                {/* Subtle inner glow */}
                                <div
                                    className="absolute inset-0 pointer-events-none opacity-30"
                                    style={{
                                        background: 'radial-gradient(ellipse at 30% 0%, rgba(184, 160, 122, 0.15) 0%, transparent 50%)'
                                    }}
                                />
                            </div>

                            {/* Ground Shadow (separate for depth) */}
                            <div
                                className="absolute -bottom-6 left-8 right-8 h-12 pointer-events-none"
                                style={{
                                    background: 'radial-gradient(ellipse at center, rgba(60, 50, 40, 0.2) 0%, transparent 70%)',
                                    filter: 'blur(12px)',
                                    transform: 'translateZ(-20px)',
                                }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right: Content & Form */}
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerContainerVariants}
                        className="order-1 lg:order-2"
                    >
                        {/* Header */}
                        <motion.span variants={fadeInUpVariants} className="label-luxury block mb-4">
                            Membership
                        </motion.span>
                        <motion.h2 variants={fadeInUpVariants} className="heading-display text-3xl md:text-4xl lg:text-5xl mb-6">
                            Request Private Access
                        </motion.h2>
                        <motion.div
                            variants={lineRevealVariants}
                            className="w-16 h-px mb-8"
                            style={{ background: 'linear-gradient(90deg, var(--gold-muted), transparent)' }}
                        />
                        <motion.p variants={fadeInUpVariants} className="body-refined text-graphite mb-10 leading-relaxed">
                            The X Club operates as a private syndicate. Membership is not purchased —
                            it is granted after careful evaluation. We seek individuals who understand
                            the value of ownership, not just consumption.
                        </motion.p>

                        {/* What Access Provides */}
                        <motion.div variants={fadeInUpVariants} className="mb-10">
                            <h4 className="label-luxury text-xs text-graphite-muted mb-4">Membership Provides</h4>
                            <ul className="space-y-3">
                                {[
                                    'Eligibility to participate in ownership pools',
                                    'Priority allocation on new asset listings',
                                    'Access to private viewings and events',
                                    'Concierge management of your portfolio',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="text-gold-primary mt-1">
                                            <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                                                <circle cx="3" cy="3" r="2" />
                                            </svg>
                                        </span>
                                        <span className="body-refined text-sm text-graphite">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Compact Application Form */}
                        <motion.form
                            variants={fadeInUpVariants}
                            className="space-y-4"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full"
                                    required
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Phone (Optional)"
                                className="w-full"
                            />
                            <motion.button
                                type="submit"
                                className="w-full btn-primary py-4 flex items-center justify-center gap-3"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                            >
                                Apply for Membership
                                <Send size={14} />
                            </motion.button>
                        </motion.form>

                        {/* Note */}
                        <motion.p
                            variants={fadeInUpVariants}
                            className="mt-6 body-refined text-xs text-graphite-muted"
                        >
                            Applications are reviewed within 72 hours. We do not accept all requests.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
