import { Dispatch, SetStateAction } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { PET_CHARACTER, PET_SIZE } from '@/const/pet';
import { SERVICE_TYPE, TASK_PUBLIC } from '@/const/task';
import NoneIcon from '@/icons/close.svg';
import CheckIcon from '@/icons/done_outline.svg';
import LockerIcon from '@/icons/lock_open_right.svg';
import LockedIcon from '@/icons/locked.svg';
import { TaskDataResponse, taskRequestSchema } from '@/schemas/taskSchema';
import { parseCookies } from 'nookies';

import { dateTimeDuration, formatDate } from '@/lib/utils';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import Empty from '@/components/common/view/Empty';
import Rating from '@/components/common/view/Rating';

import ApplyOrderDialog from './ApplyOrderDialog';
import { TaskDescription } from './TaskDescription';
import TaskDialog from './TaskDialog';

interface MainSummaryProps {
  data?: TaskDataResponse;
  setReload: Dispatch<SetStateAction<boolean>>;
}
const MainSummary = ({ data, setReload }: MainSummaryProps) => {
  const { user_id } = parseCookies();
  const router = useRouter();
  if (!data) {
    return <Empty />;
  }

  return (
    <main className='container mb-10 flex flex-col justify-between bg-white md:flex-row'>
      <aside className='mb-5 rounded-md border-2 border-gray04 md:mb-0 md:w-[39%]'>
        <div className='overflow-hidden'>
          <Avatar className='aspect-video h-auto w-full rounded-b-none rounded-t-lg'>
            <AvatarImage src={data.cover ?? undefined} />
          </Avatar>
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

        <TaskDescription data={data} />

        <div className='flex gap-5'>
          {data.user_id === user_id ? (
            <TaskDialog
              key={data.id}
              disabled={false}
              taskId={data.id}
              petOptions={data.user.pet_list.map((item) => ({
                id: item.id,
                label: item.name,
              }))}
              triggerChildren={
                <Button className='w-full' variant='destructive'>
                  我要編輯
                </Button>
              }
              defaultValues={taskRequestSchema.parse(data)}
              setReload={setReload}
            />
          ) : (
            <>
              {data.accept_sitter_contact && (
                <Button className='w-full' variant='dark_outline'>
                  我要聊聊
                </Button>
              )}
              <ApplyOrderDialog
                disabled={data.user_id === user_id}
                targetTask={data}
                triggerChildren={<Button className='w-full'>我要接單</Button>}
              />
            </>
          )}
        </div>
      </article>
    </main>
  );
};

export default MainSummary;
