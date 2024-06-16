import { z } from 'zod';

import { paginationRequestSchema } from './pagination';
import { petResponseSchema } from './petSchema';
import { urlSchema } from './upload';

export const taskPublicSchema = z.enum([
  'OPEN',
  'CLOSED',
  'IN_TRANSACTION',
  'DELETED',
  'COMPLETED',
]);

export const serviceTypeSchema = z.enum(['PHOTOGRAPHY', 'HEALTH_CARE', 'BATH', 'WALKING']);

export const taskStatusSchema = z.enum(['NULL', 'PENDING', 'UN_PAID', 'TRACKING', 'COMPLETED']);

export const taskRequestSchema = z.object({
  title: z.string(),
  public: z.enum([taskPublicSchema.enum.OPEN, taskPublicSchema.enum.CLOSED]),
  cover: z.string().url().catch(''),
  service_type: serviceTypeSchema,
  pet_id: z.string(),
  city: z.string(),
  district: z.string(),
  unit_price: z.number(),
  description: z.string(),
  accept_sitter_contact: z.boolean(),
  start_at: z.date(),
  end_at: z.date(),
});

export const taskListRequestSchema = z.object({
  query: paginationRequestSchema,
  params: z.object({
    user_id: z.string(),
  }),
});

export const deleteTaskRequestSchema = z.object({
  task_id: z.string(),
});

export const taskResponseSchema = taskRequestSchema.extend({
  id: z.string(),
  title: z.string(),
  public: taskPublicSchema.default(taskPublicSchema.enum.OPEN),
  status: taskStatusSchema.default(taskStatusSchema.enum.NULL),
  cover: urlSchema,
  total: z.number(),
  start_at: z.string().transform((value) => new Date(value)),
  end_at: z.string().transform((value) => new Date(value)),
  created_at: z.string().transform((value) => new Date(value)),
  updated_at: z.string().transform((value) => new Date(value)),
  pet_id: z.string().nullable().optional(),
  order_id: z.string().nullable().optional(),
  review_id: z.string().nullable().optional(),
});

export const taskListResponseSchema = z.object({
  total: z.number(),
  data: z.array(taskResponseSchema),
});

export const taskByIdResponseDataSchema = z.object({
  id: z.string(),
  title: z.string(),
  public: taskPublicSchema.default(taskPublicSchema.enum.OPEN),
  status: taskStatusSchema.default(taskStatusSchema.enum.NULL),
  cover: urlSchema,
  service_type: serviceTypeSchema,
  city: z.string(),
  district: z.string(),
  unit_price: z.number(),
  total: z.number(),
  description: z.string(),
  accept_sitter_contact: z.boolean().default(false),
  start_at: z.string().transform((value) => new Date(value)),
  end_at: z.string().transform((value) => new Date(value)),
  created_at: z.string().transform((value) => new Date(value)),
  updated_at: z.string().transform((value) => new Date(value)),
  user_id: z.string(),
  pet_id: z.string(),
  order_id: z.string().nullable().optional(),
  review_id: z.string().nullable().optional(),
  user: z.object({
    id: z.string(),
    email: z.string(),
    real_name: z.string(),
    nickname: z.string().nullable().optional(),
    avator: z.string().nullable().optional(),
    average_rating: z.number().default(0),
    total_reviews: z.number().default(0),
  }),
  pet: petResponseSchema,
});

export type TaskRequest = z.infer<typeof taskRequestSchema>;
export type DeleteTaskRequest = z.infer<typeof deleteTaskRequestSchema>;

export type GetTasksByUserRequest = z.infer<typeof taskListRequestSchema>;

export type TaskResponse = z.infer<typeof taskResponseSchema>;
export type TaskListResponse = z.infer<typeof taskListResponseSchema>;
export type TaskDataResponse = z.infer<typeof taskByIdResponseDataSchema>;
