'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

import { SERVICE_TYPE } from '@/const/task';
import { CreateOrderRequest, OrderResponse } from '@/schemas/orderSchema';

import ServerApiManager from '@/lib/serverApiManager';

export const applyForOrder = async (fields: CreateOrderRequest) => {
  const response = await ServerApiManager.post('/api/v1/orders', fields);
  if (response.success) {
    revalidateTag('user-apply-order');
  }
  return response;
};

export const paidForOrder = async (order: OrderResponse) => {
  const response = await ServerApiManager.patch(`/api/v1/orders/${order.id}/payment`, {
    products: [
      {
        name: SERVICE_TYPE[order.task.service_type],
        price: order.task.unit_price,
        quantity: Math.round(order.task.total / order.task.unit_price),
      },
    ],
    metadata: {
      task_id: order.task.id,
      order_id: order.id,
    },
  });
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
