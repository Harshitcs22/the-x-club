/**
 * Motion Presets for Anti-Gravity Luxury Assets
 * 
 * Design Philosophy:
 * - Heavy objects calmly suspended (not flying)
 * - Engineered feel, not playful
 * - Strong shadows imply controlled weight
 * - Slow, deliberate motion (8-12s cycles)
 */

// Base Easing Functions
export const easings = {
    // Ultra-smooth luxury transitions
    luxury: [0.23, 1, 0.32, 1],
    // Calm deceleration for floating
    calm: [0.45, 0.05, 0.55, 0.95],
    // Premium enter/exit
    enter: [0.0, 0.0, 0.2, 1],
    exit: [0.4, 0.0, 1, 1],
    // Heavy object movement
    heavy: [0.6, 0, 0.4, 1],
};

// Duration Presets (in seconds) - Slower for luxury feel
export const durations = {
    instant: 0.2,
    quick: 0.4,
    normal: 0.6,
    slow: 1.0,
    luxury: 1.4,
    float: 10,      // 8-12 seconds for anti-gravity
    floatSlow: 12,
};

// Anti-Gravity Float Animation (Heavy but Suspended)
export const floatVariants = {
    initial: {
        y: 0,
        rotate: 0,
    },
    float: {
        y: [-2, 2, -2],
        rotate: [-0.3, 0.3, -0.3],
        transition: {
            duration: durations.float,
            ease: easings.calm,
            repeat: Infinity,
            repeatType: 'loop',
        },
    },
};

// Subtle Float (for larger/heavier items)
export const subtleFloatVariants = {
    initial: {
        y: 0,
        rotate: 0,
    },
    float: {
        y: [-1.5, 1.5, -1.5],
        rotate: [-0.2, 0.2, -0.2],
        transition: {
            duration: durations.floatSlow,
            ease: easings.calm,
            repeat: Infinity,
            repeatType: 'loop',
        },
    },
};

// Asset Card Float (±4px max, very slow)
export const assetFloatVariants = {
    initial: {
        y: 0,
        rotate: 0,
    },
    float: {
        y: [-3, 3, -3],
        rotate: [-0.4, 0.4, -0.4],
        transition: {
            duration: 10,
            ease: easings.calm,
            repeat: Infinity,
            repeatType: 'loop',
        },
    },
};

// Card Hover Effect (subtle lift, no scale)
export const cardHoverVariants = {
    initial: {
        y: 0,
        boxShadow: '0 20px 50px rgba(60, 50, 40, 0.15)',
    },
    hover: {
        y: -6,
        boxShadow: '0 30px 60px rgba(60, 50, 40, 0.22)',
        transition: {
            duration: durations.slow,
            ease: easings.luxury,
        },
    },
};

// Fade In Up Animation
export const fadeInUpVariants = {
    initial: {
        opacity: 0,
        y: 24,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: durations.luxury,
            ease: easings.luxury,
        },
    },
};

// Fade In Animation
export const fadeInVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: durations.luxury,
            ease: easings.enter,
        },
    },
};

// Scale In Animation
export const scaleInVariants = {
    initial: {
        opacity: 0,
        scale: 0.96,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: durations.slow,
            ease: easings.luxury,
        },
    },
};

// Stagger Container
export const staggerContainerVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

// Modal Animation
export const modalBackdropVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: durations.normal,
            ease: easings.enter,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: durations.quick,
            ease: easings.exit,
        },
    },
};

export const modalContentVariants = {
    initial: {
        opacity: 0,
        y: 30,
        scale: 0.98,
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: durations.slow,
            ease: easings.luxury,
        },
    },
    exit: {
        opacity: 0,
        y: 16,
        scale: 0.98,
        transition: {
            duration: durations.quick,
            ease: easings.exit,
        },
    },
};

// Navigation Item Animation
export const navItemVariants = {
    initial: {
        opacity: 0,
        y: -8,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: durations.normal,
            ease: easings.luxury,
        },
    },
};

// Line Reveal Animation
export const lineRevealVariants = {
    initial: {
        scaleX: 0,
        originX: 0.5,
    },
    animate: {
        scaleX: 1,
        transition: {
            duration: durations.luxury,
            ease: easings.luxury,
        },
    },
};

// Utility: Create custom float with offset
export const createFloatVariant = (yOffset = 3, rotateOffset = 0.4, duration = 10) => ({
    initial: {
        y: 0,
        rotate: 0,
    },
    float: {
        y: [-yOffset, yOffset, -yOffset],
        rotate: [-rotateOffset, rotateOffset, -rotateOffset],
        transition: {
            duration,
            ease: easings.calm,
            repeat: Infinity,
            repeatType: 'loop',
        },
    },
});

// Utility: Create stagger delay
export const createStaggerDelay = (index, baseDelay = 0.1) => ({
    transition: {
        delay: index * baseDelay,
    },
});
