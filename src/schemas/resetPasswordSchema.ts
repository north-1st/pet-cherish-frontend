import { z } from 'zod';

export const resetPasswordSchema = z
  .object({
    old_password: z.string().min(8, { message: '舊密碼必須至少有 8 個字元 !' }),
    password: z.string().min(8, { message: '新密碼必須至少有 8 個字元 !' }),
    password_confirm: z.string().min(8, { message: '密碼確認欄位必須至少有 8 個字元 !' }),
  })
  .refine((data) => data.password === data.password_confirm, {
    message: '新密碼與新密碼確認欄位不一樣',
    path: ['password_confirm'],
  });

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
