'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import * as Tabs from '@radix-ui/react-tabs';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import CheckIcon from '@/components/common/Icon/Check';

enum TabGroup {
  DETAILS = '詳情資訊',
  Q_AND_A = 'Q&A討論',
  PREVIEWS = '其他保姆評價',
}

export default function Page({ params }: { params: { task_id: string } }) {
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

      {/* 主要 */}
      <main className='container mb-10 flex justify-between bg-white'>
        <aside className='w-[39%] rounded-md border-2 border-gray04'>
          <div className='imgSlider'>
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

        <article className='flex w-[59%] flex-col justify-between'>
          <header className='flex items-center justify-between'>
            <Badge className='border-gray02 text-gray02' variant='outline'>
              任務編號：{params.task_id}
            </Badge>
            <aside className='flex'>
              <div className='mr-3 flex items-center text-lightGreen'>
                <img src='/icons/lock_open_right.svg' height={16} width={16} alt='status' />
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
      <section className='min-h-base-60 bg-gray04'>
        <article className='container'>
          <Tabs.Root defaultValue='account'>
            <Tabs.List color='indigo'>
              <Tabs.Trigger value={TabGroup.DETAILS}>詳情資訊</Tabs.Trigger>
              <Tabs.Trigger value={TabGroup.Q_AND_A}>Q&A 討論 (10)</Tabs.Trigger>
              <Tabs.Trigger value={TabGroup.PREVIEWS}>其他保姆評價 (20)</Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value={TabGroup.DETAILS}>
              <div>
                寵物習性:
                Lucky來我們家有一年了，現在非常活潑好動，時常拆家，需要至少30分鐘的活動時間，。
                Lucky非常友好,喜愛與人和其他狗狗互動，目前觀察下來對外人也不太會有攻擊性，但離開家人身邊會有點緊張。
                Lucky一但玩瘋，叫名字也不會回來，要特別留意。
                對食物非常感興趣,易受食物誘惑，我會提供 Lucky 平常的零食給您。 注意事項:
                Lucky喜歡追逐鳥，遛狗時請務必使用牽引繩，避免Lucky追逐小動物或遠離視線範圍。
                Lucky有輕微的分離焦慮,初次見面時可能會有一些緊張。希望在遛狗前能先見面討論，花些時間與Lucky互動,建立信任。
                請注意不要讓Lucky接觸到巧克力或其他對狗狗有毒的食物，只能提供我準備的零食給 Lucky
                吃。 Lucky 左前腳剛動完手術，請幫忙留意一下活動狀況。 其他說明:
                Lucky已經完成所有必要的疫苗接種,並定期進行體內外寄生蟲的預防。
                我們家附近有一個狗狗公園,如果可能的話,希望Lucky能在那裡玩耍一會兒。 遛狗地區:
                新北市三重區,具體地址將在確認保姆後提供。 聯絡方式: 請通過平台的 Q & A
                討論或來聊聊功能與我聯繫,以獲取更多細節和討論遛狗的具體時間。
              </div>
            </Tabs.Content>

            <Tabs.Content value={TabGroup.Q_AND_A}>
              <div>
                Q: 可接受多犬一起遛狗？ 保姆綽號 / 2023-03-10 20:45 A: 不行噢，Lucky
                力氣很大，不適合。 Joanna / 2023-03-10 20:45
              </div>
            </Tabs.Content>

            <Tabs.Content value={TabGroup.PREVIEWS}>
              <div>
                保姆頭貼 保姆綽號 / 2023-03-10 20:45
                與飼主配合滿多次，前期討論比較花時間，但溝通都很愉快。Lucky
                也很聰明，教幾次指令就聽的懂，推推！ 交易項目 到府安親
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </article>
      </section>
    </>
  );
}
