'use server';

import { revalidatePath, revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

import { ApplySitterRequest, SitterServiceRequest } from '@/schemas/sitterSchema';

import ServerApiManager from '@/lib/serverApiManager';

export const applySitterAction = async (fields: ApplySitterRequest, isUpdate: boolean) => {
  let res;
  if (isUpdate) {
    res = await ServerApiManager.patch(`/api/v1/apply-sitter`, fields);
  } else {
    res = await ServerApiManager.post(`/api/v1/apply-sitter`, fields);
  }

  if (res.success) {
    revalidateTag('user-sitter');
  }
  return res;
};

export const sitterServiceAction = async (fields: SitterServiceRequest) => {
  const res = await ServerApiManager.patch('/api/v1/sitters', fields);

  if (res.success) {
    revalidateTag('user-sitter');
    revalidatePath(`/sitters/${cookies().get('user_id')?.value}`);
  }
  return res;
};
