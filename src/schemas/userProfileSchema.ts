import { z } from 'zod';

export const genderSchema = z.enum(['MALE', 'FEMALE', 'OTHER']);

export const userProfileRequestSchema = z.object({
  avatar: z.string().url().nullable(),
  nickname: z.string().nullable(),
  birthdate: z.date().nullable(),
  gender: genderSchema.nullable(),
  self_introduction: z.string().nullable(),
});

export const userResponseSchema = z.object({
  id: z.string(),
  email: z.string().optional(),
  real_name: z.string().optional(),
  phone: z.string().optional(),
  nickname: z.string().nullable(),
  birthdate: z
    .string()
    .datetime()
    .transform((str) => new Date(str))
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

export type UserProfileRequest = z.infer<typeof userProfileRequestSchema>;
export type UserResponse = z.infer<typeof userResponseSchema>;
