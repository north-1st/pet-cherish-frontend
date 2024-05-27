import { z } from 'zod';

export const signupSchema = z.object({
  email: z.string().email({
    message: '郵件格式不對 !',
  }),
  password: z.string().min(6, {
    message: '密碼必須至少有6個字元 !',
  }),
  real_name: z.string().min(2, {
    message: '姓名必填且最少 2 個字 !',
  }),
});

export type SignupSchema = z.infer<typeof signupSchema>;
