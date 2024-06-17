import { ZodSchema, z } from 'zod';

import { paginationSchema } from './pagination';
import {
  serviceTypeSchema,
  taskPublicSchema,
  taskResponseSchema,
  taskStatusSchema,
} from './taskSchema';
import { genderSchema } from './userProfileSchema';

export const orderRoleSchema = z.enum(['pet-owner', 'sitter']);

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

export const createOrderBodySchema = z.object({
  task_id: z.string(),
  note: z.string(),
});

export const ownerOrdersPaginationSchema = paginationSchema.extend({
  task_id: z.string().optional(),
  status: z.string(),
});

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

export const ordersResponseSchema = z.object({
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
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  task_id: z.string(),
  sitter_user: z.object({
    id: z.string(),
    email: z.string().optional(),
    real_name: z.string().optional(),
    phone: z.string().optional().nullable(),
    nickname: z.string().nullable().default(''),
    birthdate: z.date().nullable(),
    gender: genderSchema.nullable(),
    self_introduction: z.string().nullable().default(''),
    avatar: z.string().nullable(),
    is_sitter: z.boolean().default(false),
    is_deleted: z.boolean().optional(),
    average_rating: z.number().nullable(),
    total_reviews: z.number().default(0),
  }),
  task: z.object({
    id: z.string(),
    title: z.string(),
    public: taskPublicSchema,
    status: taskStatusSchema,
    cover: z.string(),
    service_type: serviceTypeSchema,
    city: z.string(),
    district: z.string(),
    unit_price: z.number(),
    total: z.number(),
    description: z.string(),
    accept_sitter_contact: z.boolean().default(false),
    start_at: z.string().datetime(),
    end_at: z.string().datetime(),
    created_at: z.string().datetime(),
    updated_at: z.string().datetime(),
    user_id: z.string(),
    pet_id: z.string(),
    order_id: z.string().nullable(),
    review_id: z.string(),
  }),
});

export function createResponsePaginationDataSchema<T>(dataSchema: ZodSchema<T>) {
  return z.object({
    data: z.array(dataSchema),
    total: z.number(),
    total_page: z.number(),
    status: z.boolean(),
  });
}
export const ownerOrderListsResponseSchema =
  createResponsePaginationDataSchema(ordersResponseSchema);

export const orderResponseListSchema = z.array(orderResponseSchema);

export type OrderRole = z.infer<typeof orderRoleSchema>;

export type OrderStatus = z.infer<typeof orderStatusSchema>;
export type OwnerOrderStatus = z.infer<typeof ownerOrderStatusSchema>;

export type OrderResponse = z.infer<typeof orderResponseSchema>;

export type CreateOrderRequest = z.infer<typeof createOrderBodySchema>;
