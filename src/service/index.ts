import { API_BASE_URL } from '@/const/config';
import {
  OrderPaginationResponse,
  OrdersRequest,
  PaymentRequest,
  UpdatePaymentStatusOrderRequest,
  completeResponseBodySchema,
  completeResponseSchema,
  orderDataResponseSchema,
  ordersPaginationResponseSchema,
  updatePaymentStatusOrderBodySchema,
} from '@/schemas/orderSchema';
import { ReviewListResponse, ownerReviewListResponseSchema } from '@/schemas/reviewSchema';
import { TaskDataResponse, taskByIdResponseDataSchema } from '@/schemas/taskSchema';
import { parseCookies } from 'nookies';

import ClientApiManager from '@/lib/clientApiManager';

import { toast } from '@/components/ui/use-toast';

type MethodOption = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'OPTIONS';
export const clientCongfig = (method: MethodOption, request?: any) => {
  const token = parseCookies().token;
  return {
    method,
    body: JSON.stringify(request),
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json',
    },
  };
};

// 查詢：飼主所有評價
export const getOwnerReviewsByUserId = async (id: string): Promise<ReviewListResponse> => {
  const { success, data } = await ClientApiManager.get(`/api/v1/pet-owners/${id}/reviews`);

  if (success == true) {
    return ownerReviewListResponseSchema.parse(data);
  }

  return ownerReviewListResponseSchema.parse({});
};

// 查詢：指定任務
export const getTaskById = async (task_id: string): Promise<TaskDataResponse> => {
  const { success, data } = await ClientApiManager.get(`/api/v1/tasks/${task_id}`);

  if (success) {
    return taskByIdResponseDataSchema.parse(data);
  }

  return taskByIdResponseDataSchema.parse({});
};

// 查詢：所有訂單<飼主視角>
export const getPetOwnerOrders = async (query: OrdersRequest): Promise<OrderPaginationResponse> => {
  try {
    const options = clientCongfig('GET');
    const response = await fetch(
      `${API_BASE_URL}/api/v1/orders/pet-owner?limit=${query.limit}&page=${query.page}&status=${query.status}&task_id=${query.task_id}`,
      options
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

// 導轉金流頁面
export const payForOder = async (request: PaymentRequest) => {
  try {
    const options = clientCongfig('PATCH', request);
    const response = await fetch(
      `${API_BASE_URL}/api/v1/orders/${request.metadata.order_id}/payment`,
      options
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

// 查詢：指定訂單
export const getOrderById = async (order_id: string) => {
  try {
    const options = clientCongfig('GET');
    const response = await fetch(`${API_BASE_URL}/api/v1/orders/${order_id}`, options);

    const result = await response.json();
    if (response.ok) {
      return orderDataResponseSchema.parse(result);
    }

    return orderDataResponseSchema.parse({});
  } catch (error) {
    console.log('API/getOrderById error: ', error);
    toast({
      title: '失敗',
      description: error instanceof Error ? error.message : '發生錯誤',
      variant: 'destructive',
    });
  }
};

// 訂單狀態更新：拒絕指定保母、接受指定保母、
export const updateOrderSteps = async (endpoint: string, task_id: string) => {
  try {
    const options = clientCongfig('PATCH', { task_id });
    const response = await fetch(endpoint, options);
    const result = await response.json();
    if (response.ok) {
      toast({
        title: '成功',
        description: result.message,
      });
      return result;
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    const targetStep = endpoint.split('/');
    console.log(`API/${targetStep[targetStep.length - 1]} error: `, error);
    toast({
      title: '失敗',
      description: error instanceof Error ? error.message : '發生錯誤',
      variant: 'destructive',
    });
  }
};

// 訂單狀態更新：飼主付款
export const updatePaymentStatusOrder = async (
  order_id: string,
  request: UpdatePaymentStatusOrderRequest
) => {
  try {
    const options = clientCongfig('PATCH', request);
    const response = await fetch(`${API_BASE_URL}/api/v1/orders/${order_id}/paid`, options);
    const result = await response.json();
    if (response.ok) {
      toast({
        title: '成功',
        description: result.message,
      });
      return result;
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.log(`API/payforOrder error: `, error);
    toast({
      title: '失敗',
      description: error instanceof Error ? error.message : '發生錯誤',
      variant: 'destructive',
    });
  }
};

// Stripe 訂單資訊
export const paymentComplete = async (session_id: string) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/payment/complete?session_id=${session_id}`
    );
    const result = await response.json();
    if (response.ok) {
      toast({
        title: '成功',
        description: result.message,
      });
      return completeResponseSchema.parse(result);
    }
    return completeResponseSchema.parse({});
  } catch (error) {
    console.log('API/paymentComplete error: ', error);
    toast({
      title: '失敗',
      description: error instanceof Error ? error.message : '發生錯誤',
      variant: 'destructive',
    });
  }
};
