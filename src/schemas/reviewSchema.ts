import { z } from 'zod';

export const reviewResponseSchema = z.object({
  id: z.string(),
  pet_owner_user_id: z.string(),
  pet_owner_rating: z.number().min(1).max(5).default(5),
  pet_owner_content: z.string(),
  pet_owner_created_at: z.string(),
  sitter_user_id: z.string(),
  sitter_rating: z.number().min(1).max(5).default(5),
  sitter_content: z.string(),
  sitter_user_created_at: z.string().transform((value) => new Date(value)),
  task_id: z.string(),
});

export const reviewListResponseSchema = z.array(reviewResponseSchema);
