'use client';

import { useCallback } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { orderRoleSchema, orderStatusSchema, ownerOrderStatusSchema } from '@/schemas/orderSchema';
import { destroyCookie } from 'nookies';

import { User } from '@/types/types';

import useUserStore from '@/hooks/useUserStore';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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

import Face from '@/components/common/Icon/Face';
import FeaturedPlay from '@/components/common/Icon/FeaturedPlay';
import List from '@/components/common/Icon/List';
import Person from '@/components/common/Icon/Person';
import Setting from '@/components/common/Icon/Setting';

const UserDropdownMenu = ({ user, logout }: { user: User | null; logout: () => void }) => {
  const router = useRouter();

  const handleLogout = useCallback(() => {
    logout();
    destroyCookie(null, 'user_id', { path: '/' });
    destroyCookie(null, 'token', { path: '/' });
    router.refresh();
  }, [logout, router]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='flex cursor-pointer items-center gap-3'>
          <Avatar>
            <AvatarImage src={user?.avatar || 'https://github.com/shadcn.png'} alt='user-avatar' />
            <AvatarFallback>{user?.id}</AvatarFallback>
          </Avatar>
          <span>{user?.real_name}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>我的帳號</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className='cursor-pointer'
            onClick={() => router.push('/reset-password')}
          >
            <Setting width={20} height={20} className='mr-2' />
            <span>更改密碼</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className='cursor-pointer'
            onClick={() => router.push(`/users/${user?.id}/profile`)}
          >
            <Person width={20} height={20} className='mr-2' />
            <span>使用者資料</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className='cursor-pointer'
            onClick={() => router.push(`/sitters/${user?.id}`)}
          >
            <Face width={20} height={20} className='mr-2' />
            <span>保姆資料</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className='cursor-pointer'
            onClick={() =>
              router.push(
                `/orders/${orderRoleSchema.enum['pet-owner']}?status=` +
                  ownerOrderStatusSchema.enum.PENDING
              )
            }
          >
            <FeaturedPlay width={20} height={20} className='mr-2' />
            <span>飼主訂單</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className='cursor-pointer'
            onClick={() =>
              router.push(
                `/orders/${orderRoleSchema.enum.sitter}?status=` + orderStatusSchema.enum.PENDING
              )
            }
          >
            <List width={20} height={20} className='mr-2' />
            <span>保姆訂單</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='cursor-pointer' onClick={handleLogout}>
          <span>登出</span>
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
        <Link href='/' className='group'>
          <Image
            alt='Logo'
            height='44'
            width='142'
            src='/images/logo1.png'
            className='transition-transform group-hover:scale-100 group-hover:brightness-95'
          />
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
