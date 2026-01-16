import './globals.css';

export const metadata = {
    title: 'The X Club | Ultra-Exclusive Membership',
    description: 'Where the extraordinary becomes ordinary. An invitation-only collective for the discerning few.',
    keywords: ['luxury', 'exclusive', 'membership', 'elite', 'private club'],
    authors: [{ name: 'The X Club' }],
    openGraph: {
        title: 'The X Club | Ultra-Exclusive Membership',
        description: 'Where the extraordinary becomes ordinary.',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
