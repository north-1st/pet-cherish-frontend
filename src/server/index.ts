import { API_BASE_URL } from '@/const/config';
import {
  OrderPaginationResponse,
  OrdersRequest,
  PaymentRequest,
  ordersPaginationResponseSchema,
} from '@/schemas/orderSchema';
import { ReviewListResponse, ownerReviewListResponseSchema } from '@/schemas/reviewSchema';
import { TaskDataResponse, taskByIdResponseDataSchema } from '@/schemas/taskSchema';
import { parseCookies } from 'nookies';

import ClientApiManager from '@/lib/clientApiManager';

import { toast } from '@/components/ui/use-toast';

export const getOwnerReviewsByUserId = async (id: string): Promise<ReviewListResponse> => {
  const { success, data } = await ClientApiManager.get(`/api/v1/pet-owners/${id}/reviews`);

  if (success == true) {
    return ownerReviewListResponseSchema.parse(data);
  }

  return ownerReviewListResponseSchema.parse({});
};

export const getTaskById = async (task_id: string): Promise<TaskDataResponse> => {
  const { success, data } = await ClientApiManager.get(`/api/v1/tasks/${task_id}`);

  if (success) {
    return taskByIdResponseDataSchema.parse(data);
  }

  return taskByIdResponseDataSchema.parse({});
};

export const getPetOwnerOrders = async (query: OrdersRequest): Promise<OrderPaginationResponse> => {
  try {
    const token = parseCookies().token;
    const response = await fetch(
      `${API_BASE_URL}/api/v1/orders/pet-owner?limit=${query.limit}&page=${query.page}&status=${query.status}&task_id=${query.task_id}`,
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
          ContentType: 'application/json',
        },
      }
    );
    const result = await response.json();
    if (response.ok) {
      return ordersPaginationResponseSchema.parse(result);
    }

    return ordersPaginationResponseSchema.parse({});
  } catch (error) {
    console.log('API/getPetOwnerOrders error: ', error);
    toast({
      title: '失敗',
      description: error instanceof Error ? error.message : '發生錯誤',
      variant: 'destructive',
    });
    return ordersPaginationResponseSchema.parse({});
  }
};

export const payForOder = async (request: PaymentRequest) => {
  try {
    const token = parseCookies().token;
    const response = await fetch(
      `${API_BASE_URL}/api/v1/orders/${request.metadata.order_id}/payment`,
      {
        method: 'PATCH',
        body: JSON.stringify(request),
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
          'Content-Type': 'application/json',
        },
      }
    );
    const result = await response.json();
    if (response.ok) {
      window.location.href = result.data.payment_url;
    } else {
      throw new Error('連結金流頁面失敗。');
    }
  } catch (error) {
    console.log('API/payForOder error: ', error);
    toast({
      title: '失敗',
      description: error instanceof Error ? error.message : '發生錯誤',
      variant: 'destructive',
    });
  }
};
