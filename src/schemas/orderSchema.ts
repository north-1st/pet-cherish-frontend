import { ZodSchema, z } from 'zod';

import { paginationSchema } from './pagination';
import { taskStatusSchema } from './taskSchema';

enum TaskStatus {
  NULL, // 未有保母下單
  PENDING, // 有保母下單
  UN_PAID, // 飼主已接受保母接單 但尚未付款
  TRACKING, // 任務進行中
  COMPLETED, // 任務完成
}

export enum OrderStatus {
  PENDING = 'PENDING', // 待處理
  VALID = 'VALID', // 已成立
  TRACKING = 'TRACKING', // 任務進行中
  COMPLETED = 'COMPLETED', // 任務完成
  CANCELED = 'CANCELED', // 訂單已取消
  INVALID = 'INVALID', // 訂單不成立
}

export enum TaskPublic {
  OPEN, // 開放下單
  CLOSED, // 下架
  IN_TRANSACTION, // 交易中
  DELETED, // 已刪除
  COMPLETED, // 已完成
}

export enum ServiceType {
  PHOTOGRAPHY, // 專業攝影
  HEALTH_CARE, // 寵物保健
  BATH, // 到府洗澡
  WALKING, // 陪伴散步
}

export enum Gender {
  MALE, // 男
  FEMALE, // 女
  OTHER, // 其他
}

export const createOrderBodySchema = z.object({
  task_id: z.string(),
  note: z.string(),
});

export const ownerOrdersPaginationSchema = paginationSchema.extend({
  task_id: z.string().optional(),
  status: z.string(),
});

export const ordersResponseSchema = z.object({
  id: z.string(),
  sitter_user_id: z.string(),
  pet_owner_user_id: z.string(),
  status: z.nativeEnum(OrderStatus),
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
    gender: z.nativeEnum(Gender).nullable(),
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
    public: z.nativeEnum(TaskPublic),
    status: z.nativeEnum(TaskStatus),
    cover: z.string(),
    service_type: z.nativeEnum(ServiceType),
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

export type CreateOrderRequest = z.infer<typeof createOrderBodySchema>;
export type OwnerOrdersRequest = z.infer<typeof ownerOrdersPaginationSchema>;
export type OwnerOrdersResponse = z.infer<typeof ordersResponseSchema>;
export type OwnerOrderPaginationResponse = z.infer<typeof ownerOrderListsResponseSchema>;
