import { cookies } from 'next/headers';

import { reviewListResponseSchema } from '@/schemas/reviewSchema';

import { formatDate, formatDateTime } from '@/lib/utils';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Rating from '@/components/common/view/Rating';

const getData = async (id: string) => {
  const data = [
    {
      id: '665ace0f28dba2608ccfd257',
      pet_owner_user_id: '6658a67f6676e47b02f23e8b',
      pet_owner_rating: 3,
      pet_owner_content: '修改飼主評價內容',
      pet_owner_created_at: '2024-06-01T07:30:23.475Z',
      sitter_user_id: '6659fb917bce00ca07bcdd14',
      sitter_rating: 4,
      sitter_content: '保姆評價內容1',
      sitter_user_created_at: '2024-06-01T07:52:02.712Z',
      task_id: '6658a7d754390e6a3ed4370d',
    },
    {
      id: '665ace0f28dba2608ccfd257',
      pet_owner_user_id: '6658a67f6676e47b02f23e8b',
      pet_owner_rating: 3,
      pet_owner_content: '修改飼主評價內容',
      pet_owner_created_at: '2024-06-01T07:30:23.475Z',
      sitter_user_id: '6659fb917bce00ca07bcdd14',
      sitter_rating: 3,
      sitter_content: '保姆評價內容2',
      sitter_user_created_at: '2024-06-01T07:52:02.712Z',
      task_id: '6658a7d754390e6a3ed4370d',
    },
  ];
  return reviewListResponseSchema.parse(data);
};

const UserReviewsBlock = async ({ id }: { id: string }) => {
  const reviews = await getData(id);

  return (
    <section className='rounded-xl bg-gray04 px-8 py-6 xl:col-span-3'>
      <h3 className='mb-4 mr-2 text-xl font-bold'>評價</h3>
      <div className='flex h-full flex-col gap-x-4 gap-y-3 md:flex-row'>
        <div className='flex justify-between rounded-xl bg-brand02 p-4 text-center md:w-32 md:flex-col md:justify-center'>
          <p className='text-4xl font-bold'>4.8</p>
          <div className='flex items-center gap-2 md:flex-col'>
            <Rating rating={4} />
            <p className=' text-xs text-gray02'>(5)</p>
          </div>
        </div>
        <Carousel className='w-full'>
          <CarouselContent>
            {reviews.map((review) => {
              return (
                <CarouselItem key={review.id} className='md:basis-1/2'>
                  <Card className='text-sm'>
                    <CardContent className='w-full gap-x-4 p-4'>
                      <div className='flex flex-col gap-2'>
                        <div className='mb-2 flex gap-x-2'>
                          <Avatar>
                            <AvatarImage src='/images/default_avatar.png' />
                            <AvatarFallback></AvatarFallback>
                          </Avatar>
                          <div className='flex flex-col gap-y-1'>
                            <p>{review.sitter_user_id}</p>
                            <Rating rating={review.sitter_rating} />
                          </div>
                        </div>
                        <p className='text-gray03'>
                          {formatDateTime(review.sitter_user_created_at)}
                        </p>
                        <p>{review.sitter_content}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className='hidden translate-x-6 md:flex' />
          <CarouselNext className='hidden -translate-x-2  md:flex' />
        </Carousel>
      </div>
    </section>
  );
};

export default UserReviewsBlock;
