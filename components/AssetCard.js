'use client';

import { motion } from 'framer-motion';
import { assetFloatVariants, cardHoverVariants, fadeInUpVariants } from '@/lib/motion';
import { formatCurrency, calculatePricePerShare } from '@/lib/constants';

export default function AssetCard({
    asset,
    index = 0,
    onViewDetails,
}) {
    const pricePerShare = calculatePricePerShare(asset.totalValue, asset.totalShares);
    const floatDelay = index * 0.8;

    return (
        <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUpVariants}
            className="relative"
        >
            <motion.div
                initial="initial"
                animate="float"
                whileHover="hover"
                variants={{
                    initial: assetFloatVariants.initial,
                    float: {
                        ...assetFloatVariants.float,
                        transition: {
                            ...assetFloatVariants.float.transition,
                            delay: floatDelay,
                        },
                    },
                    hover: cardHoverVariants.hover,
                }}
                className="relative card-luxury p-6 md:p-8 cursor-pointer group"
                onClick={() => onViewDetails(asset)}
            >
                {/* Category Badge */}
                <div className="mb-6">
                    <span className="label-luxury text-xs">
                        {asset.category}
                    </span>
                </div>

                {/* Product Image Area */}
                <div className="relative aspect-square mb-8 flex items-center justify-center bg-cream-100 rounded">
                    {/* Placeholder for product image */}
                    <div className="text-center p-8">
                        <div className="heading-display text-6xl text-cream-400 opacity-50">
                            {asset.name.charAt(0)}
                        </div>
                        <p className="label-luxury text-xs text-graphite-muted mt-4">
                            Image Coming Soon
                        </p>
                    </div>

                    {/* Ambient glow on hover */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded"
                        style={{
                            background: 'radial-gradient(ellipse at center, rgba(184, 160, 122, 0.08) 0%, transparent 70%)',
                        }}
                    />
                </div>

                {/* Asset Info */}
                <div className="space-y-4">
                    {/* Name */}
                    <div>
                        <h3 className="heading-display text-xl md:text-2xl text-charcoal">
                            {asset.name}
                        </h3>
                        <p className="body-refined text-sm text-graphite-light mt-1">
                            {asset.subtitle}
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-cream-300" />

                    {/* Pricing Info */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="label-luxury text-xs text-graphite-muted mb-1">
                                Total Value
                            </p>
                            <p className="number-display text-lg text-charcoal">
                                {formatCurrency(asset.totalValue)}
                            </p>
                        </div>
                        <div>
                            <p className="label-luxury text-xs text-graphite-muted mb-1">
                                Per Share
                            </p>
                            <p className="number-display text-lg text-gold-primary">
                                {formatCurrency(pricePerShare)}
                            </p>
                        </div>
                    </div>

                    {/* Shares Info */}
                    <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2">
                            <span className="body-refined text-sm text-graphite">
                                {asset.availableShares} of {asset.totalShares} shares available
                            </span>
                        </div>

                        {/* Availability Indicator */}
                        <div className="flex gap-1">
                            {Array.from({ length: asset.totalShares }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full ${i < asset.availableShares
                                            ? 'bg-gold-primary'
                                            : 'bg-cream-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    className="mt-6 pt-6 border-t border-cream-300"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                >
                    <span className="label-luxury text-charcoal flex items-center gap-2 group-hover:text-gold-primary transition-colors duration-300">
                        View Ownership Options
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                            <path
                                d="M3 8H13M13 8L9 4M13 8L9 12"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </motion.div>
            </motion.div>

            {/* Ground Shadow */}
            <div
                className="absolute -bottom-3 left-6 right-6 h-6 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(60, 50, 40, 0.12) 0%, transparent 70%)',
                    filter: 'blur(6px)',
                }}
            />
        </motion.div>
    );
}
