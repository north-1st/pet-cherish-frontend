'use server';

import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { CreateOrderRequest } from '@/schemas/orderSchema';

import ServerApiManager from '@/lib/serverApiManager';

export const applyForOrder = async (fields: CreateOrderRequest) => {
  const response = await ServerApiManager.post('/api/v1/orders', fields);
  if (response.success) {
    revalidateTag('user-apply-order');
  }
  return response;
};

export const paidForOrder = async (orderId: string, task_id: string) => {
  const response = await ServerApiManager.patch(`/api/v1/orders/${orderId}/paid`, { task_id });
  if (response.success) {
    redirect('stripe');
  }
  return response;
};

export const cancelOrder = async (orderId: string, task_id: string) => {
  const response = await ServerApiManager.patch(`/api/v1/orders/${orderId}/cancel`, { task_id });
  if (response.success) {
    revalidatePath('/orders/[role]');
  }
  return response;
};

export const completeOrder = async (orderId: string, task_id: string) => {
  const response = await ServerApiManager.patch(`/api/v1/orders/${orderId}/complete`, { task_id });
  if (response.success) {
    revalidatePath('/orders/[role]');
  }
  return response;
};
