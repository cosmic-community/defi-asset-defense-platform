import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import CosmicBadge from '@/components/CosmicBadge';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DeFi Asset Defense Platform',
  description: 'Protect and optimize your DeFi portfolio with intelligent asset management and real-time market insights.',
  keywords: ['DeFi', 'Asset Defense', 'Portfolio Management', 'Crypto', 'Analytics'],
  authors: [{ name: 'DeFi Asset Defense Team' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0a0e13',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string;

  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <Navigation />
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  );
}