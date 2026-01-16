/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
    ],
    theme: {
        extend: {
            colors: {
                // Cream / Ivory Base (Old Money Luxury)
                cream: {
                    50: '#FDFCFA',
                    100: '#FAF8F5',
                    200: '#F5F1EB',
                    300: '#EDE7DC',
                    400: '#E0D6C8',
                    500: '#D4C7B5',
                },
                // Champagne Gold (Muted, Never Yellow)
                gold: {
                    muted: '#B8A07A',
                    primary: '#A69070',
                    deep: '#8C7860',
                },
                // Charcoal / Graphite Text
                charcoal: '#2C2C2C',
                graphite: {
                    DEFAULT: '#4A4A4A',
                    light: '#6B6B6B',
                    muted: '#8A8A8A',
                },
            },
            fontFamily: {
                display: ['var(--font-display)', 'Georgia', 'serif'],
                body: ['var(--font-body)', 'system-ui', 'sans-serif'],
            },
            animation: {
                'float-slow': 'float-slow 10s ease-in-out infinite',
                'float-slower': 'float-slower 12s ease-in-out infinite',
            },
            keyframes: {
                'float-slow': {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-4px) rotate(0.5deg)' },
                },
                'float-slower': {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-3px) rotate(-0.3deg)' },
                },
            },
            boxShadow: {
                'warm-sm': '0 4px 20px rgba(60, 50, 40, 0.1)',
                'warm-md': '0 8px 30px rgba(60, 50, 40, 0.12)',
                'warm-lg': '0 20px 50px rgba(60, 50, 40, 0.15)',
                'warm-xl': '0 30px 60px rgba(60, 50, 40, 0.18)',
                'float': '0 25px 50px rgba(60, 50, 40, 0.2), 0 10px 20px rgba(60, 50, 40, 0.1)',
            },
        },
    },
    plugins: [],
};
