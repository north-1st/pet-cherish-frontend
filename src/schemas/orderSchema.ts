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

export const stripePaymentStatusSchema = z.enum(['paid', 'unpaid', 'no_payment_required']);

export const paymentMethodTypeSchema = z.enum([
  'card',
  'bank_transfer',
  'alipay',
  'apple_pay',
  'google_pay',
  'wechat',
]);

export const createOrderBodySchema = z.object({
  task_id: z.string(),
  note: z.string(),
});

export const ordersRequestSchema = paginationSchema.extend({
  task_id: z.string().optional(),
  status: z.string().optional(),
});

export const ownerOrderResponseSchema = z.object({
  id: z.string(),
  status: orderStatusSchema,
  note: z.string(),
  payment_id: z.string().nullable().optional(),
  payment_url: z.string().nullable().optional(),
  payment_status: paymentStatusSchema.nullable().optional(),
  payment_at: z.string().nullable().optional(),
  payment_type: paymentMethodTypeSchema.nullable().optional(),
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
  sitter_user: userResponseSchema,
  task: taskResponseSchema,
});

const sitterOrdersResponseDataSchema = z.object({
  id: z.string(),
  sitter_user_id: z.string(),
  status: orderStatusSchema,
  note: z.string(),
  payment_id: z.string().nullable().optional(),
  payment_url: z.string().nullable().optional(),
  payment_status: paymentStatusSchema.nullable().optional(),
  payment_at: z.string().nullable().optional(),
  payment_type: paymentMethodTypeSchema.nullable().optional(),
  report_content: z.string(),
  report_image_list: z.array(z.string()),
  report_created_at: z.string().nullable(),
  report_updated_at: z.string().nullable(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  pet_owner_user: userResponseSchema,
  task: taskResponseSchema,
});

export const updatePaymentStatusOrderBodySchema = z.object({
  task_id: z.string(),
  payment_at: z.number(),
  payment_status: paymentStatusSchema,
  payment_type: paymentMethodTypeSchema,
});

const productSchema = z.object({
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
});

export const checkoutBodyRequestSchema = z.object({
  products: z.array(productSchema),
  metadata: z.object({
    order_id: z.string(),
    task_id: z.string(),
  }),
});

export const completeResponseBodySchema = z.object({
  retrieve: z.object({
    id: z.string(),
    amount_total: z.number(),
    metadata: z.object({
      order_id: z.string(),
      task_id: z.string(),
    }),
    payment_status: stripePaymentStatusSchema,
    payment_intent: z.object({
      amount: z.number(),
      amount_received: z.number(),
      created: z.number(), // 付款时间
      payment_method: z.object({
        type: paymentMethodTypeSchema,
        card: z
          .object({
            brand: z.string(),
            last4: z.string(),
          })
          .optional(),
      }),
    }),
  }),
  list_items: z.array(
    z.object({
      id: z.string(),
      amount_total: z.number(),
      currency: z.string(),
      description: z.string(),
      price: z.object({
        unit_amount: z.number(),
      }),
      quantity: z.number(),
    })
  ),
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
  createResponsePaginationDataSchema(ownerOrderResponseSchema);

export const sitterOrdersPaginationResponseSchema = createResponsePaginationDataSchema(
  sitterOrdersResponseDataSchema
);

export function createBaseResponseDataSchema<T extends ZodRawShape>(dataSchema: ZodObject<T>) {
  return z.object({
    data: dataSchema,
    status: z.boolean(),
  });
}

export const orderDataResponseSchema = z.object({
  data: ownerOrderResponseSchema,
  status: z.boolean(),
});

export const completeResponseSchema = createBaseResponseDataSchema(completeResponseBodySchema);

export const orderResponseListSchema = z.array(ownerOrderResponseSchema);

export const sitterOrderResponseListSchema = z.array(sitterOrdersResponseDataSchema);

export type OrderRole = z.infer<typeof orderRoleSchema>;

export type OrderStatus = z.infer<typeof orderStatusSchema>;

export type OrderResponse = z.infer<typeof ownerOrderResponseSchema>;

export type SitterOrderResponse = z.infer<typeof sitterOrdersResponseDataSchema>;

export type CreateOrderRequest = z.infer<typeof createOrderBodySchema>;

export type OrdersRequest = z.infer<typeof ordersRequestSchema>;

export type OrderPaginationResponse = z.infer<typeof ordersPaginationResponseSchema>;

export type SitterOrderPaginationResponse = z.infer<typeof sitterOrdersPaginationResponseSchema>;

export type PaymentStatus = z.infer<typeof paymentStatusSchema>;

export type PaymentRequest = z.infer<typeof checkoutBodyRequestSchema>;

export type UpdatePaymentStatusOrderRequest = z.infer<typeof updatePaymentStatusOrderBodySchema>;

export type CompleteResponse = z.infer<typeof completeResponseSchema>;
