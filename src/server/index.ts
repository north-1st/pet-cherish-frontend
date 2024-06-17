import { ownerOrderListsResponseSchema } from '@/schemas/orderSchema';
import { ReviewListResponse, ownerReviewListResponseSchema } from '@/schemas/reviewSchema';
import { TaskDataResponse, taskByIdResponseDataSchema } from '@/schemas/taskSchema';

import ClientApiManager from '@/lib/clientApiManager';

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

// export const getPetOwnerOrders = async (
//   query: OwnerOrdersRequest
// ): Promise<OwnerOrderPaginationResponse> => {
//   const { success, data } = await ClientApiManager.get(
//     `/api/v1/orders/pet-owner?limit=${query.limit}&page=${query.page}&status=${query.status}&task_id=${query.task_id}`
//   );

//   if (success) {
//     return ownerOrderListsResponseSchema.parse(data);
//   }

//   return ownerOrderListsResponseSchema.parse({});
// };
