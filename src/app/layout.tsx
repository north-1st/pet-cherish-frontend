import React from 'react';

import type { Metadata } from 'next';
import { Noto_Sans_TC } from 'next/font/google';

import { Toaster } from '@/components/ui/toaster';

import Footer from './components/Footer';
import Header from './components/Header';

import '../styles/globals.css';

const notoSansTC = Noto_Sans_TC({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang='zh-TW'>
      <body className={notoSansTC.className}>
        <Header />
        <div className='flex-1'>{children}</div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
