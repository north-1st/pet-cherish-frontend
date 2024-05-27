'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';

const Header = () => {
  const pathname = usePathname();
  const pathsWithoutHeaderAndFooter = ['/register', '/login'];
  const shouldHideHeaderAndFooter = pathsWithoutHeaderAndFooter.includes(pathname);

  if (shouldHideHeaderAndFooter) return null;

  return (
    <header className='bg-white'>
      <div className='container flex h-16 items-center justify-between'>
        <Link className='text-lg font-bold text-gray-900' href='/'>
          Logo
        </Link>
        <div className='flex items-center gap-4'>
          <Link className='text-lg font-bold text-gray-900' href='/register'>
            <Button variant='outline'>註冊</Button>
          </Link>
          <Link className='text-lg font-bold text-gray-900' href='/login'>
            <Button>登入</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
