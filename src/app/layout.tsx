import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Klasha Demo Dashboard',
  description: 'Powered by Eng. Omo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-[20%]">
            <Sidebar />
          </div>
          <div className="w-[80%]">
            <div className="w-full">
              <Navbar />
            </div>
            <div className="px-8 pt-11 my-auto w-full">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
