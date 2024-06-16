import React from 'react';

import { Avatar, AvatarImage } from '@/components/ui/avatar';

import Rating from './Rating';

export interface PosterCardProps {
  poster: {
    headIcon: string | null | undefined;
    name: string;
    rating: number;
  };
  main: {
    content: string;
    dateTime: string;
  };
  actions: React.ReactNode;
}
export default function PosterCard(props: PosterCardProps) {
  const { poster, main, actions } = props;
  return (
    <section className={'flex flex-col rounded-lg bg-white px-4 py-6 xl:flex-row'}>
      <div className='flex items-center gap-4 xl:w-[20%]'>
        <Avatar className='h-20 w-20'>
          <AvatarImage
            alt={poster.name}
            src={`${poster?.headIcon || '/images/default_avatar.png'}`}
          />
        </Avatar>
        <p>
          <h6 className='mb-1'>{poster.name}</h6>
          <Rating rating={poster.rating} />
        </p>
      </div>
      <main className='border-b-2 border-gray04 p-4 xl:w-[70%] xl:border-b-0 xl:border-l-2 xl:border-r-2'>
        <time className='text-gray03'>{main.dateTime}</time>
        <p>{main.content}</p>
      </main>
      <aside className={`flex items-center justify-center pt-5 xl:pt-0`}>{actions}</aside>
    </section>
  );
}
