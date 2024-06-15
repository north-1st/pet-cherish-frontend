import { z } from 'zod';

import { serviceTypeSchema } from './taskSchema';

export const ownerReviewResponse = z.object({
  id: z.string(),
  sitter_rating: z.number().min(1).max(5).default(5),
  sitter_content: z.string(),
  sitter_user_updated_at: z.string().transform((value) => new Date(value)),
  sitter: z.object({
    id: z.string(),
    email: z.string(),
    real_name: z.string(),
    nickname: z.string().nullable().optional(),
    avatar: z.string().nullable().optional(),
  }),
  sitter_user_id: z.string(),
  task: z.object({
    id: z.string(),
    title: z.string(),
    service_type: serviceTypeSchema,
  }),
});

export const ownerReviewListResponseSchema = z.object({
  total_reviews: z.number().default(0),
  average_rating: z.number().nullable(),
  reviews: z.array(ownerReviewResponse),
});

export const reviewListResponseSchema = z.array(ownerReviewResponse);

export type ReviewListResponse = z.infer<typeof ownerReviewListResponseSchema>;
