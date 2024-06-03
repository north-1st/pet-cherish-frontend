'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

import { UserProfileRequest } from '@/schemas/userProfileSchema';

import ServerApiManager from '@/lib/serverApiManager';

const profileAction = async (fields: UserProfileRequest) => {
  const id = cookies().get('user_id')?.value;
  const res = await ServerApiManager.patch(`/api/v1/users/${id}/profile`, fields);

  if (res.success) {
    revalidateTag('user-profile');
  }
  return res;
};

export default profileAction;
