import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

import { genderSchema, userResponseSchema } from '@/schemas/userProfileSchema';

import ServerApiManager from '@/lib/serverApiManager';
import { formatDate } from '@/lib/utils';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

import BirthdateIcon from '@/components/common/Icon/Birthdate';
import FemaleIcon from '@/components/common/Icon/Female';
import MaleIcon from '@/components/common/Icon/Male';

import ProfileDialog from './ProfileDialog';

const getData = async (id: string) => {
  const { status, success, message, data } = await ServerApiManager.get(
    `/api/v1/users/${id}/profile`,
    {
      cache: 'no-store',
      next: { tags: ['user-profile'] },
    }
  );

  if (status == 404) {
    notFound();
  }

  if (success == true) {
    return userResponseSchema.parse(data);
  } else {
    throw new Error(message);
  }
};

const ProfileBlock = async ({ id }: { id: string }) => {
  const profile = await getData(id);
  const isSelf = id == cookies().get('user_id')?.value;

  return (
    <section className='mt-4 bg-white md:mt-20'>
      <div className='mb-2 flex items-center gap-x-2 md:mb-3 md:flex-col'>
        <Avatar className='h-20 w-20 md:h-[120px] md:w-[120px]'>
          <AvatarImage
            alt='Profile'
            src={profile.avatar ?? '/images/default_avatar.png'}
          ></AvatarImage>
          <AvatarFallback>{profile.nickname}</AvatarFallback>
        </Avatar>
        <div className='grid md:place-items-center'>
          <div className='flex items-center md:mb-2'>
            <h2 className='text-2xl font-bold'>{profile.nickname}</h2>
            {profile.gender == genderSchema.enum.MALE && <MaleIcon />}
            {profile.gender == genderSchema.enum.FEMALE && <FemaleIcon />}
          </div>
          {profile.birthdate == null ? (
            <p className='mb-4 text-sm text-gray03'>尚無資料</p>
          ) : (
            <div className='flex items-center gap-1 md:mb-4'>
              <BirthdateIcon width={20} height={20} />
              <p className='text-sm'>{formatDate(profile.birthdate)}</p>
            </div>
          )}
        </div>
        {isSelf && (
          <ProfileDialog
            defaultValues={profile}
            triggerChildren={
              <Button variant={'outline'} className='ml-auto md:w-full'>
                編輯
              </Button>
            }
          />
        )}
      </div>
      <p className='mb-8'>{profile.self_introduction}</p>
    </section>
  );
};

export default ProfileBlock;
