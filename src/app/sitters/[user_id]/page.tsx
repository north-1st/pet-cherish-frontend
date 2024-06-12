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
  REVIEWS = '其他飼主評價',
}

export default function Page({ params }: { params: { user_id: string } }) {
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
      content: (
        <Details
          content={`
            自我介紹:
            大家好,我是Emily,一位熱愛狗狗的專業遛狗保姆。自小與多種犬類共同成長,我對於狗狗的行為、需求有深刻的理解。憑藉著我對這些忠實夥伴的愛,我決定將我的熱情轉化為專業,幫助那些需要關愛的狗狗們。

            服務經驗:
            我在遛狗服務行業擁有超過5年的經驗,期間照顧過從小型犬到大型犬的各種品種,包括拉布拉多、黃金獵犬、比熊等。

            專業證照:
            我擁有專業的寵物護理師證照,並且定期參加各種寵物護理和行為訓練的進修課程,以確保我的技能和知識能夠符合最新的標準。

            服務內容:
            日常遛狗服務,包括散步、跑步和遊戲,以滿足狗狗的身體活動需求。
            行為訓練諮詢,幫助解決如牽引繩拉扯、對其他狗狗或人的反應等常見問題。
            客製化服務計劃,根據狗狗的年齡、品種和健康狀況制定適合的活動方案。

            承諾:
            作為您的遛狗保姆,我的首要任務是確保您的狗狗在我們一起度過的每一刻都感到快樂、安全。我承諾提供最貼心、最專業的服務,讓您可以安心將寶貝交給我照顧。

            服務範圍:
            新北市三重區、新北市板橋區。

            聯絡方式:
            請通過平台的 Q & A 討論或來聊聊功能與我聯繫,我期待著與您的狗狗見面,開啟我們的快樂散步時光!
          `}
        />
      ),
    },
    { label: TabGroup.Q_AND_A, content: <QuestionAnswers qaList={qaList} /> },
    { label: TabGroup.REVIEWS, content: <Reviews reviewList={reviewList} /> },
  ];

  const navList = [
    { label: '保姆列表', href: '/search/sitters' },
    { label: `保姆編號：${params.user_id}`, href: `/sitters/${params.user_id}` },
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
            <h3 className='text-lg font-bold'>David 保姆資歷</h3>
            <section className='flex flex-col text-sm sm:flex-row'>
              <div className='flex-1'>
                <p>
                  <CheckIcon className='m-2 ml-0 inline-block text-gray03' width={20} height={20} />
                  <span>良民證</span>
                </p>
                <p>
                  <CheckIcon className='m-2 ml-0 inline-block text-gray03' width={20} height={20} />
                  <span>平台認證</span> :{' '}
                  <span className='m-2 ml-0 inline-block text-gray02'>平台服務次數達100次</span>
                </p>
                <p>
                  <CheckIcon className='m-2 ml-0 inline-block text-gray03' width={20} height={20} />
                  <span className='m-2 ml-0 inline-block text-gray02'>是否開放到府接送</span>
                </p>
              </div>
            </section>
          </aside>
        </aside>

        <article className='flex flex-col justify-between gap-2 text-sm sm:text-base md:w-[59%]'>
          <header className='flex items-center justify-between'>
            <Badge className='border-gray02 text-gray02' variant='outline'>
              保姆編號：{params.user_id}
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

          {/* <h2 className='text-2xl font-bold sm:text-3xl'>急需遛狗 十萬火急 狗已經快把家拆了~</h2> */}
          {/* <div className='flex justify-between rounded-md bg-gray04 p-3'>
            <p className='flex items-center gap-2'>
              <Avatar>
                <AvatarImage alt='保姆頭貼' src='/images/people2.jpg' />
              </Avatar>
              <strong>Bob</strong>
              評價 (<Link href={'#'}>20</Link>)
            </p>
           <Button className='bg-white text-gray01'>查看飼主</Button>
          </div> */}

          <ul>
            <li className='m-4 ml-0 flex flex-wrap gap-2'>
              <ul>
                <h3 className='text-gray02'>服務內容</h3>
                <li>到府安親服務：800 /30分鐘</li>
                <li>遛狗服務：800 /30分鐘</li>
                <li>攝影服務：800 /30分鐘</li>
              </ul>
            </li>
            <li className='m-4 ml-0 flex flex-wrap gap-2'>
              <ul>
                <h3 className='text-gray02'>服務地區</h3>
                <li>新北市三重區</li>
                <li>新北市板橋區</li>
              </ul>
            </li>
            <li className='m-4 ml-0 flex flex-wrap gap-2'>
              <ul>
                <h3 className='text-gray02'>服務犬型</h3>
                <li>大型犬</li>
                <li>中型犬</li>
              </ul>
            </li>
          </ul>

          {/* <div className='flex items-center gap-5'>
            <strong className='text-bold text-2xl text-brand01'>2000 元</strong>
            <span className='priceNote'>(1000 元/30分鐘)</span>
          </div> */}

          <div className='flex gap-5'>
            <Button className='w-full' variant='dark_outline'>
              我要聊聊
            </Button>
            {/* <Button className='w-full'>我要接單</Button> */}
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
