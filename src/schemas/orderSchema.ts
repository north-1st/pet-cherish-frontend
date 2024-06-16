import { z } from 'zod';

import { taskResponseSchema, taskStatusSchema } from './taskSchema';

export const orderStatusSchema = z.enum([
  'PENDING', // 待付款
  'VALID', // 訂單已成立
  'TRACKING', // 任務進行中
  'COMPLETED', // 任務已完成
  'CANCELED', // 訂單已取消
  'INVALID', // 訂單不成立
]);

export const ownerOrderStatusSchema = z.enum([
  ...taskStatusSchema.options,
  orderStatusSchema.enum.CANCELED,
  orderStatusSchema.enum.INVALID,
]);

const orderResponseSchema = z.object({
  id: z.string(),
  sitter_user_id: z.string(),
  pet_owner_user_id: z.string(),
  status: orderStatusSchema,
  note: z.string(),
  third_party_id: z.string().nullable(),
  payment_at: z.string().nullable(),
  report_content: z.string(),
  report_image_list: z.array(z.string()),
  report_created_at: z.string().nullable(),
  report_updated_at: z.string().nullable(),
  created_at: z.string().transform((value) => new Date(value)),
  updated_at: z.string().transform((value) => new Date(value)),
  task: taskResponseSchema,
});

export const orderResponseListSchema = z.array(orderResponseSchema);

export type OrderStatus = z.infer<typeof orderStatusSchema>;
export type OwnerOrderStatus = z.infer<typeof ownerOrderStatusSchema>;

export type OrderResponse = z.infer<typeof orderResponseSchema>;
