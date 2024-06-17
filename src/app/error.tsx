'use client';

import { useEffect } from 'react';

import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className='container mx-auto flex min-h-screen-minus-144px flex-col items-center justify-center'>
      <div className='mx-auto w-full max-w-md rounded-lg bg-white py-6 shadow-lg'>
        <div className='mb-6 flex flex-col items-center justify-center'>
          <h3 className='mb-4 text-6xl font-bold text-red-500'>{error.name}</h3>
          <h4 className='text-2xl font-semibold text-gray-800'>發生錯誤</h4>
        </div>
        <p className='mb-8 text-center text-gray-600'>{error.message}</p>
        <div className='flex justify-center gap-4'>
          <Button variant={'outline'} onClick={() => (window.location.href = '/')}>
            回首頁
          </Button>
          <Button onClick={() => reset()}>重試</Button>
        </div>
      </div>
    </main>
  );
}
