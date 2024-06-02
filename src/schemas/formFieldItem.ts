import { z } from 'zod';

const formFieldItemSchema = z.object({
  id: z.string(),
  label: z.string(),
});

export type FormFieldItem = z.infer<typeof formFieldItemSchema>;
