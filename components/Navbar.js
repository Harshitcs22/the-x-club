'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, BRAND } from '@/lib/constants';
import { fadeInVariants, navItemVariants, staggerContainerVariants } from '@/lib/motion';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial="initial"
            animate="animate"
            variants={fadeInVariants}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
                    ? 'glass-cream py-4 shadow-warm-sm'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="container-luxury">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="relative z-10"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="heading-editorial text-lg tracking-[0.25em] text-charcoal">
                            {BRAND.name}
                        </span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <motion.ul
                        variants={staggerContainerVariants}
                        className="hidden md:flex items-center gap-10"
                    >
                        {NAV_LINKS.map((link) => (
                            <motion.li key={link.label} variants={navItemVariants}>
                                <a
                                    href={link.href}
                                    className="label-luxury text-graphite-light hover:text-gold-primary transition-colors duration-300 relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-primary transition-all duration-500 group-hover:w-full" />
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* CTA Button */}
                    <motion.a
                        href="#access"
                        variants={navItemVariants}
                        className="hidden md:block btn-primary"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Request Access
                    </motion.a>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden relative z-10 p-2 text-charcoal"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isMobileMenuOpen ? 'auto' : 0,
                        opacity: isMobileMenuOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="md:hidden overflow-hidden"
                >
                    <ul className="py-8 flex flex-col gap-6">
                        {NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="label-luxury text-graphite-light hover:text-gold-primary transition-colors duration-300"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li className="pt-4">
                            <a
                                href="#access"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="btn-primary inline-block"
                            >
                                Request Access
                            </a>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </motion.header>
    );
}
