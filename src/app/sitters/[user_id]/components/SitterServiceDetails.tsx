'use client';

import React, { useRef } from 'react';

import { SERVICE_TYPE } from '@/const/task';
import { SitterResponse, sitterServiceRequestSchema } from '@/schemas/sitterSchema';
import { parseCookies } from 'nookies';

import { formatDate } from '@/lib/utils';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Tab from '@/components/ui/tab';

import Breadcrumbs from '@/components/common/breadcrumbs';
import TriggerDialog from '@/components/common/button/TriggerDialog';

import Details from '../../../../components/common/view/Details';
import QuestionAnswers from '../../../../components/common/view/QuestionAnswers';
import Reviews from '../../../../components/common/view/Reviews';
import SitterServiceContent from './SitterServiceContent';
import SitterServiceForm from './SitterServiceForm';
import SitterSideBar from './SitterSideBar';

enum TabGroup {
  DETAILS = '詳情資訊',
  Q_AND_A = 'Q&A討論',
  REVIEWS = '其他飼主評價',
}

export default function SitterServiceDetails({ sitter }: { sitter: SitterResponse }) {
  const closeDialogRef = useRef<HTMLButtonElement>(null);

  const qaList = [
    {
      question: { title: '可接受長期配合嗎？', name: '飼主綽號', dateTime: '2023-03-10 20:45' },
      answer: {
        title: '可以私訊聊聊。',
        name: 'Bob',
        dateTime: '2023-03-10 20:45',
      },
    },
  ];

  const reviewList = [
    {
      poster: {
        headIcon: '/images/people1.jpg',
        name: '飼主綽號',
        dateTime: '2023-03-10 20:45',
      },
      review: {
        rating: 4,
        content: '與保姆配合滿多次，前期討論比較花時間，但溝通都很愉快，推推！',
      },
      task: {
        serviceType: SERVICE_TYPE.WALKING,
      },
    },
  ];

  const tabs = [
    {
      label: TabGroup.DETAILS,
      content: <Details content={sitter.service_description} />,
    },
    { label: TabGroup.Q_AND_A, content: <QuestionAnswers qaList={qaList} /> },
    { label: TabGroup.REVIEWS, content: <Reviews reviewList={reviewList} /> },
  ];

  const navList = [
    { label: '保姆列表', href: '/search/sitters' },
    { label: `保姆編號：${sitter.user_id}`, href: `/sitters/${sitter.user_id}` },
  ];

  return (
    <main>
      {/* 麵包屑 */}
      <Breadcrumbs navList={navList} />

      {/* 任務資料 */}
      <main className='container mb-8 grid-cols-12 gap-x-10 space-y-10 md:grid md:space-y-0 xl:mb-20'>
        <SitterSideBar sitter={sitter} />
        <section className='lg:text-base col-span-7 space-y-4 text-sm'>
          <div className='flex items-center justify-between gap-y-2'>
            <Badge className='border-gray02 text-gray02' variant='outline'>
              保姆編號：{sitter.user_id}
            </Badge>
            <p className='flex text-right text-sm text-gray02 md:text-base'>
              <span className=''>更新時間：</span>
              <time>{formatDate(sitter.updated_at)}</time>
            </p>
          </div>
          <SitterServiceContent sitter={sitter} />

          <div className='flex'>
            {sitter.user_id == parseCookies().user_id ? (
              <TriggerDialog
                triggerChildren={<Button className='w-full'>我要編輯</Button>}
                contentChildren={
                  <SitterServiceForm
                    defaultValues={sitterServiceRequestSchema.partial().parse(sitter)}
                    closeDialogRef={closeDialogRef}
                  />
                }
                closeDialogRef={closeDialogRef}
              />
            ) : (
              // <Button className='w-full' variant='dark_outline'>
              //   編輯
              // </Button>
              <Button className='w-full'>我要聊聊</Button>
            )}
            {/* <Button className='w-full'>我要接單</Button> */}
          </div>
        </section>
      </main>

      {/* 頁籤區 */}
      <section className='min-h-base-60 bg-gray04 pb-10'>
        <article className='container'>
          <Tab list={tabs} />
        </article>
      </section>
    </main>
  );
}
