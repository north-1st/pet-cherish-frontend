'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import CheckIcon from '@/icons/done_outline.svg';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Tab from '@/components/ui/tab';

import LockerIcon from '../../../../public/icons/lock_open_right.svg';
import Details from '../components/Details';
import QuestionAnswers from '../components/QuestionAnswers';
import Reviews from '../components/Reviews';

enum TabGroup {
  DETAILS = '詳情資訊',
  Q_AND_A = 'Q&A討論',
  REVIEWS = '其他保姆評價',
}

export default function Page({ params }: { params: { task_id: string } }) {
  const tabs = [
    { label: TabGroup.DETAILS, content: <Details /> },
    { label: TabGroup.Q_AND_A, content: <QuestionAnswers /> },
    { label: TabGroup.REVIEWS, content: <Reviews /> },
  ];

  return (
    <>
      {/* 麵包屑 */}
      <nav className='container p-3'>
        <ul className='flex gap-5'>
          <li className='breadcrumbItem'>
            <Link href='/'>首頁</Link>
          </li>
          <li className='breadcrumbItem'>
            <Link href='/search/tasks'>任務列表</Link>
          </li>
          <li className='breadcrumbItem'>
            <Link href={`/tasks/${params.task_id}`}>任務編號：{params.task_id}</Link>
          </li>
        </ul>
      </nav>

      {/* 任務資料 */}
      <main className='container mb-10 flex justify-between bg-white'>
        <aside className='w-[39%] rounded-md border-2 border-gray04'>
          <div className='overflow-hidden'>
            <Image src='https://picsum.photos/530/300' width={530} height={300} alt='pet' />
          </div>
          <aside className='p-6'>
            <h3 className='text-lg font-bold'>張小庭</h3>
            <section className='flex text-sm'>
              <div className='flex-1'>
                <p>
                  <h5 className='m-2 ml-0 inline-block text-gray03'>品種</h5>
                  <span>拉布拉多．大型</span>
                </p>
                <p>
                  <h5 className='m-2 ml-0 inline-block text-gray03'>個性</h5>
                  <span>暴躁、可愛、聰明</span>
                </p>
              </div>
              <div className='flex-1'>
                <p>
                  <CheckIcon className='m-2 ml-0 inline-block text-gray03' width={40} height={40} />
                  <span>寵物晶片</span>
                </p>
                <p>
                  <CheckIcon className='m-2 ml-0 inline-block text-gray03' width={20} height={20} />
                  <span>結紮</span>
                </p>
              </div>
            </section>
          </aside>
        </aside>

        <article className='flex w-[59%] flex-col justify-between'>
          <header className='flex items-center justify-between'>
            <Badge className='border-gray02 text-gray02' variant='outline'>
              任務編號：{params.task_id}
            </Badge>
            <aside className='flex'>
              <div className='mr-3 flex items-center text-lightGreen'>
                <LockerIcon width={16} height={16} />
                <span className='ml-1'>公開</span>
              </div>
              <time className='text-gray02'>刊登時間：2023-03-01</time>
            </aside>
          </header>

          <h2 className='text-3xl font-bold'>急需遛狗 十萬火急 狗已經快把家拆了~</h2>
          <div className='flex justify-between rounded-md bg-gray04 p-3'>
            <p className='flex items-center gap-2'>
              <Avatar>
                <AvatarImage alt='飼主頭貼' src='/images/people2.jpg' />
              </Avatar>
              <h4>Joanna</h4>
              評價 (<Link href={'#'}>23</Link>)
            </p>
            <Button className='bg-white text-gray01'>查看飼主</Button>
          </div>

          <ul>
            <li className='m-4 ml-0 flex gap-2'>
              <h3 className='text-gray02'>任務需求</h3>
              <strong>陪伴散步</strong>
            </li>
            <li className='m-4 ml-0 flex gap-2'>
              <h3 className='text-gray02'>任務時間</h3>
              <strong>2024-03-01 17:00 ~ 2024-03-01 19:00</strong>
            </li>
            <li className='m-4 ml-0 flex gap-2'>
              <h3 className='text-gray02'>任務地區</h3>
              <strong>新北市三重區</strong>
            </li>
          </ul>

          <div className='flex items-center gap-5'>
            <strong className='text-bold text-2xl text-brand01'>2000 元</strong>
            <span className='priceNote'>(1000 元/30分鐘)</span>
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
