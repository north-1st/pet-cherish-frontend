'use server';

import { revalidateTag } from 'next/cache';

import { PetRequest } from '@/schemas/petSchema';

import ServerApiManager from '@/lib/serverApiManager';

export const petAction = async (fields: PetRequest, id?: string) => {
  let res;
  if (id) {
    res = await ServerApiManager.patch(`/api/v1/pets/${id}`, fields);
  } else {
    res = await ServerApiManager.post(`/api/v1/pets`, fields);
  }

  if (res.success) {
    revalidateTag('user-pets');
  }
  return res;
};

export const petDeleteAction = async (id: string) => {
  const res = await ServerApiManager.delete(`/api/v1/pets/${id}`);
  if (res.success) {
    revalidateTag('user-pets');
  }
  return res;
};
