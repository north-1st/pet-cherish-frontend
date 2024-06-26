import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email({ message: '郵件格式不對 !' }),
  password: z.string().min(8, { message: '密碼必須至少有 8 個字元 !' }),
  real_name: z.string().min(2, { message: '姓名必須至少有 2 個字 !' }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
