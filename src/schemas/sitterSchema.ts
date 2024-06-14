import { z } from 'zod';

import { petSizeSchema } from './petSchema';
import { urlSchema } from './upload';

export const sitterStatusSchema = z.enum(['APPROVING', 'REJECTED', 'PASS', 'ON_BOARD']);

export const applySitterRequestSchema = z.object({
  certificate_number: z.string(),
  certificate_image: z.string().url(),
  police_check_image: urlSchema.optional(),
});

export const sitterResponseSchema = z.object({
  user_id: z.string(),
  has_certificate: z.boolean().default(false),
  has_police_check: z.boolean().default(false),
  service_city: z.string().nullable(),
  service_district_list: z.array(z.string()).catch([]),
  photography_price: z.number().nullable(),
  health_care_price: z.number().nullable(),
  bath_price: z.number().nullable(),
  walking_price: z.number().nullable(),
  service_size_list: z.array(petSizeSchema),
  is_door_to_door: z.boolean().default(false),
  image_list: z.array(z.string()),
  service_description: z.string(),
  average_rating: z.number().nullable(),
  total_reviews: z.number().default(0),
  certificate_number: z.string().nullable(),
  certificate_image: z.string().url().nullable(),
  police_check_image: z.string().url().nullable(),
  created_at: z.string().transform((value) => new Date(value)),
  updated_at: z.string().transform((value) => new Date(value)),
  status: sitterStatusSchema.nullable(),
});

export const sitterServiceRequestSchema = z.object({
  service_city: z.string(),
  service_district_list: z.array(z.string()).min(1),
  photography_price: z.number().nullable().optional(),
  health_care_price: z.number().nullable().optional(),
  bath_price: z.number().nullable().optional(),
  walking_price: z.number().nullable().optional(),
  service_size_list: z.array(petSizeSchema).min(1).max(3),
  is_door_to_door: z.boolean(),
  image_list: z.array(z.string().url()).min(1).max(3),
  service_description: z.string(),
});

export type SitterStatus = z.infer<typeof sitterStatusSchema>;

export type SitterServiceRequest = z.infer<typeof sitterServiceRequestSchema>;
export type ApplySitterRequest = z.infer<typeof applySitterRequestSchema>;

export type SitterResponse = z.infer<typeof sitterResponseSchema>;
