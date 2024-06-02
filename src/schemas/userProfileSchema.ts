import { z } from 'zod';

export const genderSchema = z.enum(['MALE', 'FEMALE', 'OTHER']);

export const userResponseSchema = z.object({
  id: z.string(),
  email: z.string().optional(),
  real_name: z.string().optional(),
  phone: z.string().optional(),
  nickname: z.string().nullable(),
  birthdate: z
    .string()
    .datetime()
    .transform((str) => new Date(str).toLocaleDateString('zh-TW'))
    .optional(),
  gender: genderSchema.nullable(),
  self_introduction: z.string().nullable(),
  avatar: z.string().url().nullable(),
  is_sitter: z.boolean().default(false),
  is_deleted: z.boolean().optional(),
  average_rating: z.number().nullable(),
  total_reviews: z.number().catch(0),
});

export type Gender = z.infer<typeof genderSchema>;
