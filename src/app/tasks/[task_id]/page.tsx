'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { SERVICE_TYPE } from '@/const/task';
import CheckIcon from '@/icons/done_outline.svg';
import LockerIcon from '@/icons/lock_open_right.svg';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Tab from '@/components/ui/tab';

import Breadcrumbs from '@/components/common/breadcrumbs';

import Details from '../../../components/common/view/Details';
import QuestionAnswers from '../../../components/common/view/QuestionAnswers';
import Reviews from '../../../components/common/view/Reviews';

enum TabGroup {
  DETAILS = '詳情資訊',
  Q_AND_A = 'Q&A討論',
  REVIEWS = '其他保姆評價',
}

export default function Page({ params }: { params: { task_id: string } }) {
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
      content: (
        <Details
          content={`
            寵物習性: Lucky來我們家有一年了，現在非常活潑好動，時常拆家，需要至少30分鐘的活動時間，。
            Lucky非常友好,喜愛與人和其他狗狗互動，目前觀察下來對外人也不太會有攻擊性，但離開家人身邊會有點緊張。
            Lucky一但玩瘋，叫名字也不會回來，要特別留意。 對食物非常感興趣,易受食物誘惑，我會提供 Lucky
            平常的零食給您。 注意事項:
            Lucky喜歡追逐鳥，遛狗時請務必使用牽引繩，避免Lucky追逐小動物或遠離視線範圍。
            Lucky有輕微的分離焦慮,初次見面時可能會有一些緊張。希望在遛狗前能先見面討論，花些時間與Lucky互動,建立信任。
            請注意不要讓Lucky接觸到巧克力或其他對狗狗有毒的食物，只能提供我準備的零食給 Lucky 吃。 Lucky
            左前腳剛動完手術，請幫忙留意一下活動狀況。 其他說明:
            Lucky已經完成所有必要的疫苗接種,並定期進行體內外寄生蟲的預防。
            我們家附近有一個狗狗公園,如果可能的話,希望Lucky能在那裡玩耍一會兒。 遛狗地區:
            新北市三重區,具體地址將在確認保姆後提供。 聯絡方式: 請通過平台的 Q & A
            討論或來聊聊功能與我聯繫,以獲取更多細節和討論遛狗的具體時間。
          `}
        />
      ),
    },
    { label: TabGroup.Q_AND_A, content: <QuestionAnswers qaList={qaList} /> },
    { label: TabGroup.REVIEWS, content: <Reviews reviewList={reviewList} /> },
  ];

  const navList = [
    { label: '任務列表', href: '/search/tasks' },
    { label: `任務編號：${params.task_id}`, href: `/tasks/${params.task_id}` },
  ];

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
            <h3 className='text-lg font-bold'>張小庭</h3>
            <section className='flex flex-col text-sm sm:flex-row'>
              <div className='flex-1'>
                <p>
                  <span className='m-2 ml-0 inline-block text-gray03'>品種</span>
                  <span>拉布拉多．大型</span>
                </p>
                <p>
                  <span className='m-2 ml-0 inline-block text-gray03'>個性</span>
                  <span>暴躁、可愛、聰明</span>
                </p>
              </div>
              <div className='flex-1'>
                <p>
                  <CheckIcon className='m-2 ml-0 inline-block text-gray03' width={20} height={20} />
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

        <article className='flex flex-col justify-between gap-2 text-sm sm:text-base md:w-[59%]'>
          <header className='flex items-center justify-between'>
            <Badge className='border-gray02 text-gray02' variant='outline'>
              任務編號：{params.task_id}
            </Badge>
            <aside className='flex gap-2 text-right'>
              <div className='flex min-w-20 items-center justify-end text-lightGreen'>
                <LockerIcon width={16} height={16} />
                <span className='ml-1'>公開</span>
              </div>
              <p className='text-gray02'>
                刊登時間：
                <time>2023-03-01</time>
              </p>
            </aside>
          </header>

          <h2 className='text-2xl font-bold sm:text-3xl'>急需遛狗 十萬火急 狗已經快把家拆了~</h2>
          <div className='flex justify-between rounded-md bg-gray04 p-3'>
            <p className='flex items-center gap-2'>
              <Avatar>
                <AvatarImage alt='飼主頭貼' src='/images/people2.jpg' />
              </Avatar>
              <strong>Joanna</strong>
              評價 (<Link href={'#'}>23</Link>)
            </p>
            <Button className='bg-white text-gray01'>查看飼主</Button>
          </div>

          <ul>
            <li className='m-4 ml-0 flex flex-wrap gap-2'>
              <h3 className='text-gray02'>任務需求</h3>
              <strong>陪伴散步</strong>
            </li>
            <li className='m-4 ml-0 flex flex-wrap gap-2'>
              <h3 className='text-gray02'>任務時間</h3>
              <strong>2024-03-01 17:00 ~ 2024-03-01 19:00</strong>
            </li>
            <li className='m-4 ml-0 flex flex-wrap gap-2'>
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
