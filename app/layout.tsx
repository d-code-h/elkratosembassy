import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/ui/Navigation';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});
export const metadata: Metadata = {
  title: 'El Kratos Embassy - Where Spiritual Resilience Meets Life',
  description:
    'A transformative faith community empowering believers to lead fulfilling lives through spiritual wisdom and practical solutions.',
  icons: {
    icon: [
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        url: '/favicon-16x16.png',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
