'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { modalBackdropVariants, modalContentVariants } from '@/lib/motion';

export default function LuxuryModal({
    isOpen,
    onClose,
    title,
    subtitle,
    children,
}) {
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

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={modalBackdropVariants}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/90 backdrop-blur-sm"
                    aria-modal="true"
                    role="dialog"
                >
                    {/* Ambient Glow */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: 'radial-gradient(ellipse at center, rgba(207, 174, 71, 0.05) 0%, transparent 50%)',
                        }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        variants={modalContentVariants}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-2xl bg-obsidian-900 border border-platinum-800/30 shadow-luxury-lg"
                    >
                        {/* Close Button */}
                        <motion.button
                            onClick={onClose}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-6 right-6 text-platinum-500 hover:text-white transition-colors duration-300 z-10"
                            aria-label="Close modal"
                        >
                            <X size={24} strokeWidth={1.5} />
                        </motion.button>

                        {/* Header */}
                        <div className="p-8 md:p-12 pb-0">
                            {subtitle && (
                                <span className="label-luxury text-gold-500 block mb-3">
                                    {subtitle}
                                </span>
                            )}
                            {title && (
                                <h2 className="heading-display text-white text-3xl md:text-4xl">
                                    {title}
                                </h2>
                            )}
                        </div>

                        {/* Divider */}
                        <div className="mx-8 md:mx-12 my-6 h-px bg-gradient-to-r from-platinum-800/50 via-platinum-700/30 to-transparent" />

                        {/* Content */}
                        <div className="p-8 md:p-12 pt-0 max-h-[60vh] overflow-y-auto">
                            {children}
                        </div>

                        {/* Bottom Gradient */}
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-obsidian-900 to-transparent pointer-events-none" />

                        {/* Ground Shadow */}
                        <div
                            className="absolute -bottom-6 left-8 right-8 h-12 pointer-events-none"
                            style={{
                                background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.5) 0%, transparent 70%)',
                                filter: 'blur(12px)',
                            }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
