'use server';

import { revalidateTag } from 'next/cache';

import { TaskRequest } from '@/schemas/taskSchema';

import ServerApiManager from '@/lib/serverApiManager';

export const taskAction = async (fields: TaskRequest, id?: string) => {
  let res;
  if (id) {
    res = await ServerApiManager.patch(`/api/v1/tasks/${id}`, fields);
  } else {
    res = await ServerApiManager.post(`/api/v1/tasks`, fields);
  }

  if (res.success) {
    revalidateTag('user-tasks');
  }
  return res;
};

export const taskDeleteAction = async (id: string) => {
  const res = await ServerApiManager.delete(`/api/v1/tasks/${id}`);
  if (res.success) {
    revalidateTag('user-tasks');
  }
  return res;
};
