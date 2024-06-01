import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <section className='flex min-h-screen items-center justify-center bg-[#F5F5F5]'>
      <div className='flex'>
        <Card className='w-[350px] rounded-none rounded-l-lg border-none bg-gradient-to-br from-[#89f7fe] to-[#66a6ff] shadow-none'>
          <CardContent className='flex h-[100%] flex-col items-center justify-center p-10'>
            <h2 className='mb-2 text-3xl font-bold'>Glad to see You!</h2>
            <Link href='/'>
              <Image
                alt='Logo'
                className='text-white'
                height='44'
                width='142'
                src='/images/logo1.png'
              />
            </Link>
          </CardContent>
        </Card>
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
