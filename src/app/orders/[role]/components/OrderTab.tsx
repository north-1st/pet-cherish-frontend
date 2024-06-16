'use client';

import { useCallback } from 'react';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { cn } from '@/lib/utils';

export default function OrderTab({ status, text }: { status: string; text: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isActive = status == searchParams.get('status');

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <>
      <Link href={pathname + '?' + createQueryString('status', status)}>
        <div
          className={cn(
            'w-20 py-3 text-center xl:w-[200px]',
            isActive ? 'border border-transparent border-b-brand01 font-bold text-brand01 ' : ''
          )}
        >
          {text}
        </div>
      </Link>
    </>
  );
}
