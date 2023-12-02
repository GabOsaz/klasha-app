'use client';

import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';
import MobileNavbar from '@/components/navbar/MobileNavbar';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Klasha Demo Dashboard',
//   description: 'Powered by Eng. Omo',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col md:flex-row w-full">
          <div className={` ${isSidebarCollapsed ? 'w-[8%]' : 'w-[20%]'} transition-all duration-200 ease-in-out hidden lg:block`}>
            <Sidebar
              isSidebarCollapsed={isSidebarCollapsed}
              setIsSidebarCollapsed={setIsSidebarCollapsed}
            />
          </div>
          <div className="lg:hidden fixed top-3 left-o z-20 w-full md:w-72">
            <MobileNavbar />
          </div>
          <div className={`w-full ${isSidebarCollapsed ? 'lg:w-[100%]' : 'lg:w-[80%]'} transition-all duration-200 ease-in-out lg:relative`}>
            <div className="w-full bg-white sticky top-0 left-o">
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
