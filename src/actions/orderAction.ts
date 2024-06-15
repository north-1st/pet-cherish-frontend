'use server';

import { revalidateTag } from 'next/cache';

import { CreateOrderRequest } from '@/schemas/orderSchema';

import ServerApiManager from '@/lib/serverApiManager';

export const applyForOrder = async (fields: CreateOrderRequest) => {
  const response = await ServerApiManager.post('/api/v1/orders', fields);
  if (response.success) {
    revalidateTag('user-apply-order');
  }
  return response;
};
