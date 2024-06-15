import { z } from 'zod';

export const createOrderBodySchema = z.object({
  task_id: z.string(),
  note: z.string(),
});

export type CreateOrderRequest = z.infer<typeof createOrderBodySchema>;
