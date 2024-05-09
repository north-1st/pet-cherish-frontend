import Image from 'next/image';

import { Button } from '@/components/ui/button';

const Jumbotron = () => {
  return (
    <section className='bg-gray-200 py-24'>
      <div className='container flex items-center justify-between'>
        <Image
          alt='Hero Image'
          className='aspect-video overflow-hidden rounded-xl object-cover'
          height='480'
          width='640'
          src='/images/dog1.jpg'
        />
        <div className='space-y-6'>
          <h1 className='text-5xl font-medium tracking-tighter'>寵愛無界 - 為愛犬生活加點色彩</h1>
          <p className='text-xl/relaxed text-gray-500'>「專業服務,讓每一刻成為他們的快樂時光」</p>
          <div className='flex gap-4'>
            <Button className='bg-orange-500 hover:bg-orange-600' variant='default'>
              找保姆
            </Button>
            <Button className='bg-gray-900 text-white hover:bg-gray-800' variant='secondary'>
              找任務
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
