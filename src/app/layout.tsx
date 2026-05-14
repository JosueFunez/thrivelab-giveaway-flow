import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: 'Thrivelab Giveaway',
  description:
    'Win a stem cell treatment giveaway',
    icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${cormorant.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
