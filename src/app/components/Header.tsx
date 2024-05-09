import Link from 'next/link';

import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className='bg-white'>
      <div className='container flex h-16 items-center justify-between'>
        <Link className='text-lg font-bold text-gray-900' href='/'>
          Logo
        </Link>
        <div className='flex items-center gap-4'>
          <Button variant='outline'>註冊</Button>
          <Button>登入</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
