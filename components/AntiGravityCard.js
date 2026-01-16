'use client';

import { motion } from 'framer-motion';
import { floatVariants, cardHoverVariants, fadeInUpVariants } from '@/lib/motion';

export default function AntiGravityCard({
    title,
    subtitle,
    description,
    features = [],
    accent = 'platinum',
    featured = false,
    index = 0,
    icon: Icon,
}) {
    const accentColors = {
        platinum: {
            border: 'border-platinum-700/30 hover:border-platinum-500/50',
            text: 'text-platinum-400',
            glow: 'hover:shadow-glow-platinum',
            badge: 'bg-platinum-800 text-platinum-300',
        },
        gold: {
            border: 'border-gold-700/30 hover:border-gold-500/50',
            text: 'text-gold-500',
            glow: 'hover:shadow-glow-gold',
            badge: 'bg-gold-900/50 text-gold-400',
        },
    };

    const colors = accentColors[accent];
    const floatDelay = index * 0.5;

    return (
        <motion.div
            initial="initial"
            animate="float"
            whileHover="hover"
            variants={{
                initial: floatVariants.initial,
                float: {
                    ...floatVariants.float,
                    transition: {
                        ...floatVariants.float.transition,
                        delay: floatDelay,
                    },
                },
                hover: cardHoverVariants.hover,
            }}
            className={`relative group ${featured ? 'md:-mt-8' : ''}`}
        >
            {/* Featured Badge */}
            {featured && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                >
                    <span className="label-luxury text-xs bg-gold-500 text-obsidian-950 px-4 py-1.5">
                        Most Popular
                    </span>
                </motion.div>
            )}

            {/* Card Container */}
            <div
                className={`relative bg-obsidian-900/80 backdrop-blur-sm border ${colors.border} ${colors.glow} transition-all duration-700 p-8 md:p-10 shadow-ground`}
            >
                {/* Ambient Glow (on hover) */}
                <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                    style={{
                        background: accent === 'gold'
                            ? 'radial-gradient(ellipse at center, rgba(207, 174, 71, 0.05) 0%, transparent 70%)'
                            : 'radial-gradient(ellipse at center, rgba(168, 168, 179, 0.03) 0%, transparent 70%)',
                    }}
                />

                {/* Icon */}
                {Icon && (
                    <div className={`mb-6 ${colors.text}`}>
                        <Icon size={32} strokeWidth={1} />
                    </div>
                )}

                {/* Header */}
                <div className="mb-6">
                    {subtitle && (
                        <span className={`label-luxury text-xs ${colors.text} block mb-2`}>
                            {subtitle}
                        </span>
                    )}
                    <h3 className="heading-display text-white text-3xl md:text-4xl">
                        {title}
                    </h3>
                </div>

                {/* Divider */}
                <div className={`w-12 h-px ${accent === 'gold' ? 'bg-gold-500/50' : 'bg-platinum-600/50'} mb-6`} />

                {/* Description */}
                <p className="body-refined text-platinum-500 mb-8 leading-relaxed">
                    {description}
                </p>

                {/* Features List */}
                {features.length > 0 && (
                    <ul className="space-y-3 mb-8">
                        {features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className={`${colors.text} mt-1.5`}>
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </span>
                                <span className="body-refined text-platinum-400 text-sm">
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* CTA */}
                <motion.button
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                    className={`label-luxury ${colors.text} flex items-center gap-2 group/btn`}
                >
                    Learn More
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    >
                        <path
                            d="M3 8H13M13 8L9 4M13 8L9 12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </motion.button>
            </div>

            {/* Ground Shadow */}
            <div
                className="absolute -bottom-4 left-4 right-4 h-8 opacity-60 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.4) 0%, transparent 70%)',
                    filter: 'blur(8px)',
                }}
            />
        </motion.div>
    );
}
