import { z } from 'zod';

export const apiResponseSchema = z.object({
  status: z.boolean(),
  message: z.string(),
  data: z.any(),
  total: z.any(),
});

export type ApiResponse = z.infer<typeof apiResponseSchema>;
