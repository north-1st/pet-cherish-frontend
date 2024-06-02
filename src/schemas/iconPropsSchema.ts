import { z } from 'zod';

export const iconPropsSchema = z.object({
  width: z.number().optional(),
  height: z.number().optional(),
  className: z.string().optional(),
});

export type IconProps = z.infer<typeof iconPropsSchema>;
