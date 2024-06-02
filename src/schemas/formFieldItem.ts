import { z } from 'zod';

const formFieldItemSchema = z.object({
  id: z.string(),
  label: z.string(),
});

export const formFieldRadioSchema = z.object({
  id: z.boolean(),
  label: z.string(),
});

export type FormFieldItem = z.infer<typeof formFieldItemSchema>;
export type FormFieldRadio = z.infer<typeof formFieldRadioSchema>;
