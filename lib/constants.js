/**
 * The X Club - Fractional Ownership Platform
 * 
 * Business Model:
 * - Users buy SHARES of luxury assets (not products)
 * - Limited usage rights per year based on shares owned
 * - The X Club retains legal ownership
 * - Manages storage, insurance, and rotation
 */

// Brand Identity
export const BRAND = {
    name: 'The X Club',
    tagline: 'Own What You Could Never Buy Alone',
    description: 'Fractional ownership of the world\'s most desired luxury assets.',
    year: 2024,
};

// Navigation Links
export const NAV_LINKS = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Assets', href: '#assets' },
    { label: 'Trust', href: '#trust' },
    { label: 'Access', href: '#access' },
];

// How It Works Steps
export const HOW_IT_WORKS = [
    {
        step: 1,
        title: 'We Acquire',
        description: 'The X Club sources and authenticates the world\'s most coveted luxury assets — watches, sneakers, vehicles.',
        icon: 'Search',
    },
    {
        step: 2,
        title: 'Asset is Split',
        description: 'Each asset is divided into a limited number of ownership shares. Ownership is transparent and documented.',
        icon: 'LayoutGrid',
    },
    {
        step: 3,
        title: 'You Own Shares',
        description: 'Purchase the number of shares that fits your investment. Each share grants proportional usage rights.',
        icon: 'Wallet',
    },
    {
        step: 4,
        title: 'Managed Access',
        description: 'Usage is rotated among shareholders. We handle storage, insurance, and logistics. You simply enjoy.',
        icon: 'Calendar',
    },
];

// Luxury Assets for Fractional Ownership (Values in INR)
export const ASSETS = [
    {
        id: 'rolex-daytona',
        name: 'Rolex Daytona',
        subtitle: 'Cosmograph · Platinum',
        category: 'Timepiece',
        image: '/visuals/rolex-daytona.png',
        totalValue: 7200000, // ₹72,00,000
        totalShares: 10,
        availableShares: 4,
        daysPerShare: 36,
        features: [
            'Platinum case with ice blue dial',
            'Calibre 4130 self-winding movement',
            'Original box and papers',
            'Full service history',
        ],
    },
    {
        id: 'dior-jordan-1',
        name: 'Dior x Air Jordan 1',
        subtitle: 'High OG · Grey',
        category: 'Footwear',
        image: '/visuals/dior-jordan.png',
        totalValue: 1000000, // ₹10,00,000
        totalShares: 5,
        availableShares: 2,
        daysPerShare: 73,
        features: [
            'Limited to 8,500 pairs worldwide',
            'Dior oblique Swoosh',
            'Wings logo with Air Dior',
            'Size US 10 · DS condition',
        ],
    },
    {
        id: 'patek-nautilus',
        name: 'Patek Philippe Nautilus',
        subtitle: '5711/1A · Blue Dial',
        category: 'Timepiece',
        image: '/visuals/patek-nautilus.png',
        totalValue: 15200000, // ₹1,52,00,000
        totalShares: 12,
        availableShares: 3,
        daysPerShare: 30,
        features: [
            'Iconic Gérald Genta design',
            'Caliber 26-330 S C movement',
            'Discontinued reference',
            'Investment-grade condition',
        ],
    },
    {
        id: 'porsche-911-gt3',
        name: 'Porsche 911 GT3 RS',
        subtitle: '992 · Weissach Package',
        category: 'Vehicle',
        image: '/visuals/porsche-gt3.png',
        totalValue: 27000000, // ₹2,70,00,000
        totalShares: 8,
        availableShares: 2,
        daysPerShare: 45,
        features: [
            '518 HP naturally aspirated flat-six',
            'Weissach Package with carbon fiber',
            'Under 500 miles',
            'Full maintenance included',
        ],
    },
];

// Trust & Security Points
export const TRUST_POINTS = [
    {
        id: 'insurance',
        title: 'Fully Insured',
        description: 'Every asset is insured for full replacement value by leading insurers.',
        icon: 'Shield',
    },
    {
        id: 'storage',
        title: 'Secure Vaults',
        description: 'Climate-controlled, 24/7 monitored storage facilities across major cities.',
        icon: 'Lock',
    },
    {
        id: 'verification',
        title: 'Authenticated',
        description: 'Every asset verified by certified experts before acquisition.',
        icon: 'BadgeCheck',
    },
    {
        id: 'legal',
        title: 'Legal Framework',
        description: 'Clear ownership structure. Assets held in trust for shareholders.',
        icon: 'FileText',
    },
];

// Share Selection Options
export const SHARE_OPTIONS = [1, 2, 3, 4, 5];

// Utility Functions

/**
 * Format currency in Indian Rupees with lakh/crore formatting
 * e.g., 720000 → ₹7,20,000
 */
export const formatCurrency = (amount) => {
    // Indian numbering system: XX,XX,XXX
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    return formatter.format(amount);
};

/**
 * Format large amounts in lakhs for display
 * e.g., 7200000 → "₹72 Lakh"
 */
export const formatInLakhs = (amount) => {
    const lakhs = amount / 100000;
    if (lakhs >= 100) {
        const crores = lakhs / 100;
        return `₹${crores.toFixed(crores % 1 === 0 ? 0 : 1)} Cr`;
    }
    return `₹${lakhs.toFixed(lakhs % 1 === 0 ? 0 : 1)} Lakh`;
};

export const calculatePricePerShare = (totalValue, totalShares) => {
    return Math.round(totalValue / totalShares);
};

export const calculateDaysAccess = (daysPerShare, numberOfShares) => {
    return daysPerShare * numberOfShares;
};

// Contact
export const CONTACT = {
    email: 'inquire@thexclub.com',
};
