import { z } from 'zod';

import { paginationRequestSchema } from './pagination';
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
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export const taskListResponseSchema = z.object({
  total: z.number(),
  data: z.array(taskResponseSchema),
});

export type TaskRequest = z.infer<typeof taskRequestSchema>;
export type DeleteTaskRequest = z.infer<typeof deleteTaskRequestSchema>;

export type GetTasksByUserRequest = z.infer<typeof taskListRequestSchema>;

export type TaskResponse = z.infer<typeof taskResponseSchema>;
export type TaskListResponse = z.infer<typeof taskListResponseSchema>;
