'use client';

import { motion } from 'framer-motion';
import { glowPulseVariants } from '@/lib/motion';

export default function AmbientGlow({
    color = 'gold',
    size = 'lg',
    position = 'center',
    intensity = 'normal',
    className = ''
}) {
    const sizeClasses = {
        sm: 'w-[300px] h-[300px]',
        md: 'w-[500px] h-[500px]',
        lg: 'w-[800px] h-[800px]',
        xl: 'w-[1200px] h-[1200px]',
    };

    const colorClasses = {
        gold: 'bg-gold-500/10',
        platinum: 'bg-platinum-400/8',
        warm: 'bg-orange-500/8',
        cool: 'bg-blue-500/5',
    };

    const positionClasses = {
        center: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
        'top-left': 'left-0 top-0 -translate-x-1/2 -translate-y-1/2',
        'top-right': 'right-0 top-0 translate-x-1/2 -translate-y-1/2',
        'bottom-left': 'left-0 bottom-0 -translate-x-1/2 translate-y-1/2',
        'bottom-right': 'right-0 bottom-0 translate-x-1/2 translate-y-1/2',
    };

    const intensityStyles = {
        subtle: { filter: 'blur(100px)' },
        normal: { filter: 'blur(120px)' },
        intense: { filter: 'blur(80px)' },
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={glowPulseVariants}
            className={`absolute pointer-events-none ${sizeClasses[size]} ${colorClasses[color]} ${positionClasses[position]} rounded-full ${className}`}
            style={intensityStyles[intensity]}
            aria-hidden="true"
        />
    );
}
