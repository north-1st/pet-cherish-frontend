'use server';

import { revalidateTag } from 'next/cache';

import { CreateOrderRequest, OwnerOrdersRequest } from '@/schemas/orderSchema';

import ServerApiManager from '@/lib/serverApiManager';

export const applyForOrder = async (fields: CreateOrderRequest) => {
  const response = await ServerApiManager.post('/api/v1/orders', fields);
  if (response.success) {
    revalidateTag('user-apply-order');
  }
  return response;
};

// export const getPetOwnerOrders = async (query: OwnerOrdersRequest) => {
//   const response = await ServerApiManager.get(
//     `/api/v1/orders/pet-owner?limit=${query.limit}&page=${query.page}&status=${query.status}`
//   );
//   if (response.success) {
//     revalidateTag('owner-orders');
//   }
//   return response;
// };
