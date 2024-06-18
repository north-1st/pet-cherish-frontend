import { ZodObject, ZodRawShape, z } from 'zod';

import { paginationSchema } from './pagination';
import { taskResponseSchema } from './taskSchema';
import { userResponseSchema } from './userProfileSchema';

export const orderRoleSchema = z.enum(['pet-owner', 'sitter']);

export const orderStatusSchema = z.enum([
  'PENDING', // 待付款
  'VALID', // 訂單已成立
  'TRACKING', // 任務進行中
  'COMPLETED', // 任務已完成
  'CANCELED', // 訂單已取消
  'INVALID', // 訂單不成立
]);

export const paymentStatusSchema = z.enum([
  'SUCCESS', // 付款成功
  'FAILURE', // 付款失敗
]);

export const createOrderBodySchema = z.object({
  task_id: z.string(),
  note: z.string(),
});

export const ordersRequestSchema = paginationSchema.extend({
  task_id: z.string().optional(),
  status: z.string(),
});

export const orderResponseSchema = z.object({
  id: z.string(),
  sitter_user_id: z.string(),
  pet_owner_user_id: z.string(),
  status: orderStatusSchema,
  note: z.string(),
  third_party_id: z.string().nullable(),
  payment_at: z.string().nullable(),
  report_content: z.string(),
  report_image_list: z.array(z.string()),
  report_created_at: z
    .string()
    .nullable()
    .transform((value) => (value ? new Date(value) : null)),
  report_updated_at: z
    .string()
    .nullable()
    .transform((value) => (value ? new Date(value) : null)),
  created_at: z.string().transform((value) => new Date(value)),
  updated_at: z.string().transform((value) => new Date(value)),
  task_id: z.string(),
  sitter_user: userResponseSchema,
  task: taskResponseSchema,
});

export function createResponsePaginationDataSchema<T extends ZodRawShape>(
  dataSchema: ZodObject<T>
) {
  return z.object({
    data: z.array(dataSchema),
    total: z.number(),
    total_page: z.number(),
    status: z.boolean(),
  });
}
export const ordersPaginationResponseSchema =
  createResponsePaginationDataSchema(orderResponseSchema);

export const orderResponseListSchema = z.array(orderResponseSchema);

export type OrderRole = z.infer<typeof orderRoleSchema>;

export type OrderStatus = z.infer<typeof orderStatusSchema>;

export type OrderResponse = z.infer<typeof orderResponseSchema>;

export type CreateOrderRequest = z.infer<typeof createOrderBodySchema>;

export type OrdersRequest = z.infer<typeof ordersRequestSchema>;

export type OrderPaginationResponse = z.infer<typeof ordersPaginationResponseSchema>;

export type PaymentStatus = z.infer<typeof paymentStatusSchema>;
