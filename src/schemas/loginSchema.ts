import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: '郵件格式不對 !' }),
  password: z.string().min(8, { message: '密碼必須至少有 8 個字元 !' }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
