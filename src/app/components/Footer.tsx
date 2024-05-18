'use client';

import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const pathsWithoutHeaderAndFooter = ['/signup', '/login'];
  const shouldHideHeaderAndFooter = pathsWithoutHeaderAndFooter.includes(pathname);

  if (shouldHideHeaderAndFooter) return null;

  return (
    <footer className='text-gray-600'>
      <div className='container flex h-20 flex-col items-center justify-center'>
        <div className='font-bold'>寵樂</div>
        <div>© 2024 寵樂. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
