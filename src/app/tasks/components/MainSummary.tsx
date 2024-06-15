import Image from 'next/image';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';

import { API_BASE_URL } from '@/const/config';
import { PET_CHARACTER, PET_SIZE } from '@/const/pet';
import { SERVICE_TYPE, TASK_PUBLIC } from '@/const/task';
import NoneIcon from '@/icons/close.svg';
import CheckIcon from '@/icons/done_outline.svg';
import LockerIcon from '@/icons/lock_open_right.svg';
import LockedIcon from '@/icons/locked.svg';
import { TaskDataResponse } from '@/schemas/taskSchema';

import { dateTimeDuration, formatDate } from '@/lib/utils';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import Empty from '@/components/common/view/Empty';
import Rating from '@/components/common/view/Rating';

const MainSummary = ({ data }: { data?: TaskDataResponse }) => {
  const router = useRouter();
  if (!data) {
    return <Empty />;
  }

  return (
    <main className='container mb-10 flex flex-col justify-between bg-white md:flex-row'>
      <aside className='mb-5 rounded-md border-2 border-gray04 md:mb-0 md:w-[39%]'>
        <div className='overflow-hidden'>
          <Image src='https://picsum.photos/530/300' width={530} height={300} alt='pet' />
        </div>
        <aside className='p-6'>
          <h3 className='text-lg font-bold'>{data.pet.name}</h3>
          <section className='flex flex-col text-sm sm:flex-row'>
            <div className='flex-1'>
              <p>
                <span className='m-2 ml-0 inline-block text-gray03'>品種</span>
                <span>
                  {data.pet.breed}．{PET_SIZE[data.pet.size]}型犬
                </span>
              </p>
              <p>
                <span className='m-2 ml-0 inline-block text-gray03'>個性</span>
                <span>{data.pet.character_list.map((char) => PET_CHARACTER[char]).join('、')}</span>
              </p>
            </div>
            <div className='flex-1'>
              <p>
                {data.pet.has_microchipped ? (
                  <CheckIcon className='m-2 ml-0 inline-block text-gray03' width={20} height={20} />
                ) : (
                  <NoneIcon className='m-2 ml-0 inline-block text-gray03' width={20} height={20} />
                )}
                <span>寵物晶片</span>
              </p>
              <p>
                {data.pet.is_neutered ? (
                  <CheckIcon className='m-2 ml-0 inline-block text-gray03' width={20} height={20} />
                ) : (
                  <NoneIcon className='m-2 ml-0 inline-block text-gray03' width={20} height={20} />
                )}
                <span>結紮</span>
              </p>
            </div>
          </section>
        </aside>
      </aside>

      <article className='flex flex-col justify-between gap-2 text-sm sm:text-base md:w-[59%]'>
        <header className='flex items-center justify-between'>
          <Badge className='border-gray02 text-gray02' variant='outline'>
            任務編號：{data.id}
          </Badge>
          <aside className='flex gap-2 text-right'>
            <div
              className={`flex min-w-20 items-center justify-end ${data.public === 'OPEN' ? 'text-lightGreen' : 'text-red-600'}`}
            >
              {data.public === 'OPEN' ? (
                <LockerIcon width={16} height={16} />
              ) : (
                <LockedIcon width={16} height={16} />
              )}
              <span className='ml-1'>{TASK_PUBLIC[data.public]}</span>
            </div>
            <p className='text-gray02'>
              刊登時間：
              <time>{formatDate(data.updated_at)}</time>
            </p>
          </aside>
        </header>

        <h2 className='text-2xl font-bold sm:text-3xl'>{data.title}</h2>
        <div className='flex justify-between rounded-md bg-gray04 p-3'>
          <p className='flex items-center gap-2'>
            <Avatar>
              <AvatarImage alt='飼主頭貼' src={data.user.avator || '/images/default_avatar.png'} />
            </Avatar>
            <strong>{data.user.nickname || data.user.real_name}</strong>
            <Rating rating={data.user.average_rating} /> (
            <Link href={'#'}>{data.user.total_reviews}</Link>)
          </p>
          <Button
            className='bg-white text-gray01'
            onClick={() => router.push(`/users/${data.user_id}/profile`)}
          >
            查看飼主
          </Button>
        </div>

        <ul>
          <li className='m-4 ml-0 flex flex-wrap gap-2'>
            <h3 className='text-gray02'>任務需求</h3>
            <strong>{SERVICE_TYPE[data.service_type]}</strong>
          </li>
          <li className='m-4 ml-0 flex flex-wrap gap-2'>
            <h3 className='text-gray02'>任務時間</h3>
            <strong>{dateTimeDuration(data.start_at, data.end_at)}</strong>
          </li>
          <li className='m-4 ml-0 flex flex-wrap gap-2'>
            <h3 className='text-gray02'>任務地區</h3>
            <strong>
              {data.city} {data.district}
            </strong>
          </li>
        </ul>

        <div className='flex items-center gap-5'>
          <strong className='text-bold text-2xl text-brand01'>{data.total} 元</strong>
          <span className='priceNote'>({data.unit_price} 元 / 30分鐘)</span>
        </div>

        <div className='flex gap-5'>
          <Button className='w-full' variant='dark_outline'>
            我要聊聊
          </Button>
          <Button className='w-full'>我要接單</Button>
        </div>
      </article>
    </main>
  );
};

export default MainSummary;
