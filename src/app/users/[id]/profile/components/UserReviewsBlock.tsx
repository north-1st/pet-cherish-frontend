import Link from 'next/link';

import { ownerReviewListResponseSchema } from '@/schemas/reviewSchema';

import ServerApiManager from '@/lib/serverApiManager';
import { formatDateTime } from '@/lib/utils';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Empty from '@/components/common/view/Empty';
import Rating from '@/components/common/view/Rating';

const getData = async (id: string) => {
  const { success, message, data } = await ServerApiManager.get(
    `/api/v1/pet-owners/${id}/reviews`,
    {
      cache: 'no-store',
      next: { tags: ['pet-owner-reviews'] },
    }
  );

  if (success == true) {
    return ownerReviewListResponseSchema.parse(data);
  } else {
    throw new Error(message);
  }
};

const UserReviewsBlock = async ({ id }: { id: string }) => {
  const { total_reviews, average_rating, reviews } = await getData(id);

  return (
    <section className='rounded-xl bg-gray04 px-8 py-6 xl:col-span-3'>
      <h3 className='mb-4 mr-2 text-xl font-bold'>評價</h3>
      {total_reviews == 0 || average_rating == null ? (
        <Empty />
      ) : (
        <div className='flex h-full flex-col gap-x-4 gap-y-3 md:flex-row'>
          <div className='flex  justify-between rounded-xl bg-brand02 p-4 text-center md:w-32 md:flex-col md:justify-center'>
            <p className='text-4xl font-bold'>{average_rating}</p>
            <div className='flex items-center gap-2 md:flex-col'>
              <Rating rating={average_rating!} />
              <p className=' text-xs text-gray02'>({total_reviews})</p>
            </div>
          </div>
          <Carousel className='w-full'>
            <CarouselContent>
              {reviews.map((review) => {
                return (
                  <CarouselItem key={review.id} className='md:basis-1/2'>
                    <Card className='text-sm'>
                      <CardContent className='w-full gap-x-4 p-4'>
                        <Link href={`/sitter/${review.sitter.id}`} className='flex flex-col gap-2'>
                          <div className='mb-2 flex gap-x-2'>
                            <Avatar>
                              <AvatarImage
                                src={review.sitter.avatar ?? '/images/default_avatar.png'}
                              />
                              <AvatarFallback></AvatarFallback>
                            </Avatar>
                            <div className='flex flex-col gap-y-1'>
                              <p>{review.sitter.nickname}</p>
                              <Rating rating={review.sitter_rating} />
                            </div>
                          </div>
                          <p className='text-gray03'>
                            {formatDateTime(review.sitter_user_updated_at)}
                          </p>
                          <p>{review.sitter_content}</p>
                        </Link>
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
      )}
    </section>
  );
};

export default UserReviewsBlock;
