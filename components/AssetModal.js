'use client';

import { useEffect, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus } from 'lucide-react';
import { modalBackdropVariants, modalContentVariants } from '@/lib/motion';
import {
    formatCurrency,
    calculatePricePerShare,
    calculateDaysAccess,
    SHARE_OPTIONS
} from '@/lib/constants';

export default function AssetModal({
    isOpen,
    onClose,
    asset,
}) {
    const [selectedShares, setSelectedShares] = useState(1);

    const pricePerShare = asset ? calculatePricePerShare(asset.totalValue, asset.totalShares) : 0;
    const totalPrice = pricePerShare * selectedShares;
    const daysAccess = asset ? calculateDaysAccess(asset.daysPerShare, selectedShares) : 0;
    const maxShares = asset ? Math.min(asset.availableShares, 5) : 1;

    // Reset selected shares when modal opens with new asset
    useEffect(() => {
        if (isOpen) {
            setSelectedShares(1);
        }
    }, [isOpen, asset?.id]);

    // Handle escape key
    const handleEscape = useCallback((e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    // Handle body scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, handleEscape]);

    const incrementShares = () => {
        if (selectedShares < maxShares) {
            setSelectedShares(prev => prev + 1);
        }
    };

    const decrementShares = () => {
        if (selectedShares > 1) {
            setSelectedShares(prev => prev - 1);
        }
    };

    if (!asset) return null;

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={modalBackdropVariants}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/40 backdrop-blur-sm"
                    aria-modal="true"
                    role="dialog"
                >
                    {/* Modal Content */}
                    <motion.div
                        variants={modalContentVariants}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-2xl bg-cream-50 border border-cream-300 shadow-warm-xl max-h-[90vh] overflow-y-auto"
                    >
                        {/* Close Button */}
                        <motion.button
                            onClick={onClose}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-6 right-6 text-graphite-muted hover:text-charcoal transition-colors duration-300 z-10"
                            aria-label="Close modal"
                        >
                            <X size={24} strokeWidth={1.5} />
                        </motion.button>

                        {/* Header */}
                        <div className="p-8 md:p-10 pb-0">
                            <span className="label-luxury block mb-3">
                                {asset.category}
                            </span>
                            <h2 className="heading-display text-3xl md:text-4xl text-charcoal">
                                {asset.name}
                            </h2>
                            <p className="body-refined text-graphite-light mt-2">
                                {asset.subtitle}
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="mx-8 md:mx-10 my-6 h-px bg-cream-300" />

                        {/* Content */}
                        <div className="px-8 md:px-10 pb-8 md:pb-10 space-y-8">

                            {/* Features */}
                            <div>
                                <h4 className="label-luxury text-xs text-graphite-muted mb-4">
                                    Asset Details
                                </h4>
                                <ul className="space-y-2">
                                    {asset.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-gold-primary mt-1.5">
                                                <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                                                    <circle cx="3" cy="3" r="2" />
                                                </svg>
                                            </span>
                                            <span className="body-refined text-sm text-graphite">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Share Selection */}
                            <div className="bg-cream-100 p-6 border border-cream-300">
                                <h4 className="label-luxury text-xs text-graphite-muted mb-6">
                                    Select Your Shares
                                </h4>

                                {/* Share Counter */}
                                <div className="flex items-center justify-center gap-6 mb-8">
                                    <motion.button
                                        onClick={decrementShares}
                                        disabled={selectedShares <= 1}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${selectedShares <= 1
                                                ? 'border-cream-300 text-cream-400 cursor-not-allowed'
                                                : 'border-cream-400 text-charcoal hover:border-gold-primary hover:text-gold-primary'
                                            }`}
                                    >
                                        <Minus size={18} />
                                    </motion.button>

                                    <div className="text-center min-w-[80px]">
                                        <span className="number-display text-5xl text-charcoal">
                                            {selectedShares}
                                        </span>
                                        <p className="label-luxury text-xs text-graphite-muted mt-1">
                                            {selectedShares === 1 ? 'Share' : 'Shares'}
                                        </p>
                                    </div>

                                    <motion.button
                                        onClick={incrementShares}
                                        disabled={selectedShares >= maxShares}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${selectedShares >= maxShares
                                                ? 'border-cream-300 text-cream-400 cursor-not-allowed'
                                                : 'border-cream-400 text-charcoal hover:border-gold-primary hover:text-gold-primary'
                                            }`}
                                    >
                                        <Plus size={18} />
                                    </motion.button>
                                </div>

                                {/* Calculations */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-cream-300">
                                        <span className="body-refined text-sm text-graphite">Price per share</span>
                                        <span className="number-display text-lg text-charcoal">{formatCurrency(pricePerShare)}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-cream-300">
                                        <span className="body-refined text-sm text-graphite">Days of access per year</span>
                                        <span className="number-display text-lg text-gold-primary">{daysAccess} days</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="body-refined text-sm font-medium text-charcoal">Total investment</span>
                                        <span className="number-display text-2xl text-charcoal">{formatCurrency(totalPrice)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Legal Note */}
                            <p className="body-refined text-xs text-graphite-muted leading-relaxed">
                                Ownership shares represent proportional usage rights. Legal ownership of the asset
                                remains with The X Club. Shares are non-transferable without prior approval.
                                All assets are fully insured and professionally maintained.
                            </p>

                            {/* CTA */}
                            <motion.button
                                className="w-full btn-primary py-5"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                            >
                                Reserve {selectedShares} {selectedShares === 1 ? 'Share' : 'Shares'} — {formatCurrency(totalPrice)}
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
