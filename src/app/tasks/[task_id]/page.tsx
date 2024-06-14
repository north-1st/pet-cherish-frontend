'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { API_BASE_URL } from '@/const/config';
import { PET_CHARACTER, PET_SIZE } from '@/const/pet';
import { SERVICE_TYPE, TASK_PUBLIC } from '@/const/task';
import NoneIcon from '@/icons/close.svg';
import CheckIcon from '@/icons/done_outline.svg';
import LockerIcon from '@/icons/lock_open_right.svg';
import LockedIcon from '@/icons/locked.svg';
import { ApiResponse } from '@/schemas/apiResponse';
import { TaskDataResponse, taskByIdResponseDataSchema } from '@/schemas/taskSchema';

import { dateTimeDuration, formatDate } from '@/lib/utils';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Tab from '@/components/ui/tab';

import Breadcrumbs from '@/components/common/breadcrumbs';
import Empty from '@/components/common/view/Empty';

import Details from '../../../components/common/view/Details';
import QuestionAnswers from '../../../components/common/view/QuestionAnswers';
import Reviews from '../../../components/common/view/Reviews';

enum TabGroup {
  DETAILS = '詳情資訊',
  Q_AND_A = 'Q&A討論',
  REVIEWS = '其他保姆評價',
}

export default function Page({ params }: { params: { task_id: string } }) {
  const [data, setData] = useState<TaskDataResponse>();
  console.log('🚀 ~ Page ~ data:', data);

  const getData = async (task_id: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/tasks/${task_id}`, {
        cache: 'no-store',
        next: { tags: ['user-tasks'] },
      });

      const jsonData: ApiResponse = await res.json();
      console.log('🚀 ~ getData ~ data:', data);
      if (jsonData.status) {
        const result = taskByIdResponseDataSchema.parse(jsonData.data);
        setData(result);
      }
    } catch (error) {
      console.log('API/ error: ', error);
      throw new Error('Failed to fetch data');
    }
  };
  useEffect(() => {
    if (params.task_id) {
      getData(params.task_id);
    }
  }, [params.task_id]);

  const qaList = [
    {
      question: { title: '可接受多犬一起遛狗嗎？', name: '保姆綽號', dateTime: '2023-03-10 20:45' },
      answer: {
        title: '不行噢，Lucky力氣很大，不適合。',
        name: 'Joanna',
        dateTime: '2023-03-10 20:45',
      },
    },
  ];

  const reviewList = [
    {
      poster: {
        headIcon: '/images/people1.jpg',
        name: '保姆綽號',
        dateTime: '2023-03-10 20:45',
      },
      review: {
        rating: 4,
        content:
          '與飼主配合滿多次，前期討論比較花時間，但溝通都很愉快。Lucky也很聰明，教幾次指令就聽的懂，推推！',
      },
      task: {
        serviceType: SERVICE_TYPE.HEALTH_CARE,
      },
    },
  ];

  const tabs = [
    {
      label: TabGroup.DETAILS,
      content: <Details content={data?.description || <Empty />} />,
    },
    { label: TabGroup.Q_AND_A, content: <QuestionAnswers qaList={qaList} /> },
    { label: TabGroup.REVIEWS, content: <Reviews reviewList={reviewList} /> },
  ];

  const navList = [
    { label: '任務列表', href: '/search/tasks' },
    { label: `任務編號：${params.task_id}`, href: `/tasks/${params.task_id}` },
  ];

  if (!data) {
    return <Empty />;
  }

  return (
    <>
      {/* 麵包屑 */}
      <Breadcrumbs navList={navList} />

      {/* 任務資料 */}
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
                  <span>
                    {data.pet.character_list.map((char) => PET_CHARACTER[char]).join('、')}
                  </span>
                </p>
              </div>
              <div className='flex-1'>
                <p>
                  {data.pet.has_microchipped ? (
                    <CheckIcon
                      className='m-2 ml-0 inline-block text-gray03'
                      width={20}
                      height={20}
                    />
                  ) : (
                    <NoneIcon
                      className='m-2 ml-0 inline-block text-gray03'
                      width={20}
                      height={20}
                    />
                  )}
                  <span>寵物晶片</span>
                </p>
                <p>
                  {data.pet.is_neutered ? (
                    <CheckIcon
                      className='m-2 ml-0 inline-block text-gray03'
                      width={20}
                      height={20}
                    />
                  ) : (
                    <NoneIcon
                      className='m-2 ml-0 inline-block text-gray03'
                      width={20}
                      height={20}
                    />
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
              任務編號：{params.task_id}
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
                <AvatarImage
                  alt='飼主頭貼'
                  src={data.user.avator || '/images/default_avatar.png'}
                />
              </Avatar>
              <strong>{data.user.nickname || data.user.real_name}</strong>
              評價 (<Link href={'#'}>{data.user.total_reviews}</Link>)
            </p>
            <Button className='bg-white text-gray01'>查看飼主</Button>
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

      {/* 頁籤區 */}
      <section className='min-h-base-60 bg-gray04 pb-10'>
        <article className='container'>
          <Tab list={tabs} />
        </article>
      </section>
    </>
  );
}
