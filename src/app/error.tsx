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
    <div className='container grid'>
      <h2 className='mb-4 text-center'>Something went wrong!</h2>
      <Button variant={'outline'} className='mx-auto' onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
