import { notFound } from 'next/navigation';

import { baseURL } from '@/const/const';
import { ApiResponse } from '@/schemas/apiResponse';
import { genderSchema, userResponseSchema } from '@/schemas/userProfileSchema';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

import BirthdateIcon from '@/components/common/Icon/Birthdate';
import FemaleIcon from '@/components/common/Icon/Female';
import MaleIcon from '@/components/common/Icon/Male';

const getData = async (id: string) => {
  const res = await fetch(baseURL + `/api/v1/users/${id}/profile`, { cache: 'no-store' });

  if (!res.ok) {
    notFound();
  }

  const data: ApiResponse = await res.json();
  if (data.status == true) {
    return userResponseSchema.parse(data.data);
  } else {
    throw new Error(data.message);
  }
};

const ProfileBlock = async ({ id }: { id: string }) => {
  const profile = await getData(id);

  return (
    <section className='mt-4  basis-full bg-white md:mt-20 xl:basis-1/4'>
      <div className='mb-2 flex items-center gap-x-2 md:mb-3 md:flex-col'>
        <Avatar className='h-20 w-20 md:h-[120px] md:w-[120px]'>
          <AvatarImage alt='Profile' src={profile.avatar ?? ''}></AvatarImage>
          <AvatarFallback>{profile.nickname}</AvatarFallback>
        </Avatar>
        <div className='grid md:place-items-center'>
          <div className='flex items-center md:mb-2'>
            <h2 className='text-2xl font-bold'>{profile.nickname}</h2>
            {profile.gender == genderSchema.enum.MALE && <MaleIcon />}
            {profile.gender == genderSchema.enum.FEMALE && <FemaleIcon />}
          </div>
          <div className='flex items-center gap-1 md:mb-4'>
            <BirthdateIcon width={20} height={20} />
            <p className='text-sm'>{profile.birthdate?.toString()}</p>
          </div>
        </div>
        <Button variant='outline' className='ml-auto border-black md:w-full'>
          編輯
        </Button>
      </div>
      <p className='mb-8'>{profile.self_introduction}</p>
    </section>
  );
};

export default ProfileBlock;
