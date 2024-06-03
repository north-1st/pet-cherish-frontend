'use client';

import { useCallback } from 'react';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { destroyCookie } from 'nookies';

import { User } from '@/types/types';

import useUserStore from '@/hooks/useUserStore';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const UserDropdownMenu = ({ user, logout }: { user: User | null; logout: () => void }) => {
  const router = useRouter();
  const handleLogout = useCallback(() => {
    logout();
    localStorage.removeItem('user-storage');
    destroyCookie(null, 'token');
    router.push('/');
  }, [logout, router]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>{user?.real_name}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>我的帳號</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href='/reset-password'>更改密碼</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>使用者資料</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>保姆資料</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>飼主訂單</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>保姆訂單</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span className='cursor-pointer' onClick={handleLogout}>
            登出
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Header = () => {
  const { user, token, logout } = useUserStore();

  const pathname = usePathname();
  const showLayout = pathname !== '/login' && pathname !== '/register';

  if (!showLayout) return null;

  return (
    <header className='bg-white'>
      <div className='container flex h-16 items-center justify-between'>
        <Link className='text-lg font-bold text-gray-900' href='/'>
          Logo
        </Link>
        {token ? (
          <UserDropdownMenu user={user} logout={logout} />
        ) : (
          <div className='flex items-center gap-4'>
            <Link className='text-lg font-bold text-gray-900' href='/register'>
              <Button variant='outline'>註冊</Button>
            </Link>
            <Link className='text-lg font-bold text-gray-900' href='/login'>
              <Button>登入</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
