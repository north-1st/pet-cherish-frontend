'use server';

import { revalidateTag } from 'next/cache';

import { ApplySitterRequest } from '@/schemas/sitterSchema';

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
