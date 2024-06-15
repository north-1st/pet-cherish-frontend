import { SERVICE_TYPE } from '@/const/task';
import VisibilityIcon from '@/icons/visibility.svg';
import { ServiceType } from '@/schemas/taskSchema';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

import Rating from './Rating';

export interface ReviewsProps {
  poster: {
    headIcon: string | null | undefined;
    name: string;
    dateTime: string;
  };
  review: {
    rating: number;
    content: string;
  };
  task: {
    serviceType: ServiceType;
  };
}
export default function Reviews({ reviewList }: { reviewList: ReviewsProps[] }) {
  return (
    <>
      {reviewList.map((item) => (
        <>
          <section className='grid grid-cols-1 rounded-lg bg-white px-4 py-6 xl:grid-cols-10'>
            <div className='flex items-center gap-4 xl:col-span-2'>
              <Avatar className='h-20 w-20'>
                <AvatarImage
                  alt={item.poster.name}
                  src={`${item.poster?.headIcon || '/images/default_avatar.png'}`}
                />
              </Avatar>
              <p>
                <h6 className='mb-1'>{item.poster.name}</h6>
                <time className='text-gray03'>{item.poster.dateTime}</time>
              </p>
            </div>
            <main className='col-span-7 border-b-2 border-gray04 p-4 xl:border-b-0 xl:border-l-2 xl:border-r-2'>
              <Rating rating={item.review.rating} />
              {item.review.content}
            </main>
            <Button variant='link' className='col-span-1 m-auto p-4 text-gray01'>
              <VisibilityIcon />
              <span className='p-1'>{SERVICE_TYPE[item.task.serviceType]}</span>
            </Button>
          </section>
        </>
      ))}
    </>
  );
}
