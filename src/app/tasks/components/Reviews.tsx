import StarFillIcon from '@/icons/star_fill.svg';
import VisibilityIcon from '@/icons/visibility.svg';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export default function Reviews() {
  return (
    <section className='grid grid-cols-1 rounded-lg bg-white px-4 py-6 xl:grid-cols-10'>
      <div className='flex items-center gap-4 xl:col-span-2'>
        <Avatar className='h-20 w-20'>
          <AvatarImage alt='保姆頭貼' src='/images/people1.jpg' />
        </Avatar>
        <p>
          <h6>保姆綽號</h6>
          <time className='text-gray03'>2023-03-10 20:45</time>
        </p>
      </div>
      <main className='col-span-7 border-b-2 border-gray04 p-4 xl:border-b-0 xl:border-l-2 xl:border-r-2'>
        <StarFillIcon />
        與飼主配合滿多次，前期討論比較花時間，但溝通都很愉快。Lucky
        也很聰明，教幾次指令就聽的懂，推推！
      </main>
      <Button variant='link' className='col-span-1 m-auto p-4 text-gray01'>
        <VisibilityIcon />
        <span className='p-1'>到府安親</span>
      </Button>
    </section>
  );
}
