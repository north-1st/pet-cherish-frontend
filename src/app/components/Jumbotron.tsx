import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const Jumbotron = () => {
  return (
    <section className="bg-gray04 bg-[url('/images/bg.png')] bg-cover bg-center py-24">
      <div className='group container flex items-center gap-10'>
        <Image
          alt='Hero Image'
          className='bg-center object-cover group-hover:scale-100'
          height='416'
          width='416'
          src='/images/bg-dog1.png'
        />
        <div className='space-y-6'>
          <h1 className='text-5xl font-bold leading-[48px] text-gray01'>
            寵愛無界 - 為愛犬生活加點色彩
          </h1>
          <p className='text-lg font-normal text-gray02'>「專業服務,讓每一刻成為他們的快樂時光」</p>
          <div className='flex gap-4'>
            <Link href='/search/sitters'>
              <Button className='h-12  w-[196px] bg-brand01 px-6 py-3 font-normal text-gray01 hover:bg-brand01'>
                找保姆
              </Button>
            </Link>
            <Link href='/search/tasks'>
              <Button className='h-12  w-[196px] bg-gray01 px-6 py-3 font-normal text-white hover:bg-gray01'>
                找任務
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
