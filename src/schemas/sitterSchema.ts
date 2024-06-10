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
  status: sitterStatusSchema.nullable(),
});

export type SitterStatus = z.infer<typeof sitterStatusSchema>;

export type ApplySitterRequest = z.infer<typeof applySitterRequestSchema>;
