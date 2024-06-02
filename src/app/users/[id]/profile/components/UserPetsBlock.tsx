import { API_BASE_URL } from '@/const/const';
import { ApiResponse } from '@/schemas/apiResponse';
import { petListResponseSchema } from '@/schemas/petSchema';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import AddIcon from '@/components/common/Icon/Add';
import CheckIcon from '@/components/common/Icon/Check';

import PetDialog from './PetDialog';

const getData = async (id: string) => {
  const res = await fetch(API_BASE_URL + `/api/v1/users/${id}/pets`, {
    cache: 'no-store',
    next: { tags: ['user-pets'] },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: ApiResponse = await res.json();
  if (data.status == true) {
    return petListResponseSchema.parse(data.data);
  } else {
    throw new Error(data.message);
  }
};

const UserPetsBlock = async ({ id }: { id: string }) => {
  const pets = await getData(id);

  return (
    <section className='rounded-xl bg-gray04 px-8 py-6 xl:basis-3/4'>
      <PetDialog
        triggerChildren={
          <div className='mb-4 flex cursor-pointer items-center'>
            <h3 className='mr-2 text-xl font-bold'>寵物資料</h3>
            <AddIcon width={28} height={28} className='fill-brand01' />
          </div>
        }
      />
      <Carousel>
        <CarouselContent>
          {pets.map((pet, index) => (
            <CarouselItem key={index} className=''>
              <Card className='text-xs'>
                <CardContent className='flex w-full gap-x-4 px-0 py-0'>
                  <PetDialog
                    id={pet.id}
                    triggerChildren={
                      <Avatar className='h-[136px] w-[136px] rounded-l-lg rounded-r-none'>
                        <AvatarImage src={pet.avatar_list[0]} />
                      </Avatar>
                    }
                    defaultValues={pet}
                  />
                  <div className='w-full p-3'>
                    <p className='mb-2 text-base font-bold'>{pet.name}</p>
                    <div className='items-start md:flex'>
                      <div className='basis-1/2'>
                        <div className='grid gap-y-1'>
                          <div className='flex gap-x-4'>
                            <p className='text-gray03'>品種</p>
                            <p>{pet.breed}</p>
                          </div>
                          <div className='flex gap-x-4'>
                            <p className='text-gray03'>個性</p>
                            <p>{pet.character_list.join('、')}</p>
                          </div>
                        </div>
                      </div>
                      <div className='mt-1 grid basis-1/2 gap-y-1'>
                        {pet.has_microchipped && (
                          <div className='flex items-center gap-x-2'>
                            <CheckIcon width={16} height={16} />
                            <p className='text-lightGreen'>寵物晶片</p>
                          </div>
                        )}
                        {pet.is_neutered && (
                          <div className='flex items-center gap-x-2'>
                            <CheckIcon width={16} height={16} />
                            <p className='text-lightGreen'>結紮</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='hidden md:flex' />
        <CarouselNext className='hidden md:flex' />
      </Carousel>
    </section>
  );
};

export default UserPetsBlock;
