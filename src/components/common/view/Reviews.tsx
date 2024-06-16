import StarFillIcon from '@/icons/star_fill.svg';
import VisibilityIcon from '@/icons/visibility.svg';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export interface ReviewsProps {
  poster: {
    headIcon: string;
    name: string;
    dateTime: string;
  };
  review: {
    rating: number;
    content: string;
  };
  task: {
    serviceType: string;
  };
}
export default function Reviews({ reviewList }: { reviewList: ReviewsProps[] }) {
  const handleRatingStar = (rating: number) => {
    const stars: number[] = [];
    if (rating > 0) {
      for (let i = 0; i < Math.floor(rating); i++) {
        stars.push(i);
      } // 小數點顯示待確認
    }
    return stars;
  };

  return (
    <>
      {reviewList.map((item) => (
        <>
          <section className='grid grid-cols-1 rounded-lg bg-white px-4 py-6 xl:grid-cols-10'>
            <div className='flex items-center gap-4 xl:col-span-2'>
              <Avatar className='h-20 w-20'>
                <AvatarImage alt={item.poster.name} src={item.poster.dateTime} />
              </Avatar>
              <p>
                <h6 className='mb-1'>{item.poster.name}</h6>
                <time className='text-gray03'>{item.poster.dateTime}</time>
              </p>
            </div>
            <main className='col-span-7 border-b-2 border-gray04 p-4 xl:border-b-0 xl:border-l-2 xl:border-r-2'>
              <ul className='mb-1 flex gap-1'>
                {handleRatingStar(item.review.rating).map((star) => (
                  <li key={star}>
                    <StarFillIcon />
                  </li>
                ))}
              </ul>
              {item.review.content}
            </main>
            <Button variant='link' className='col-span-1 m-auto p-4 text-gray01'>
              <VisibilityIcon />
              <span className='p-1'>{item.task.serviceType}</span>
            </Button>
          </section>
        </>
      ))}
    </>
  );
}
