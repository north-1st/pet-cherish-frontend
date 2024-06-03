'use server';

import { cookies } from 'next/headers';

import { loginSchema } from '@/schemas/loginSchema';

import { API_BASE_URL, isProduction } from '../const/const';

export const loginAction = async (formData: FormData) => {
  console.log(formData);
  const validatedFields = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    const errors = validatedFields.error.flatten().fieldErrors;
    const errorMessages = Object.values(errors).flat().join('<br />');

    return {
      success: false,
      message: errorMessages,
      data: {},
    };
  }

  const rawFormData = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rawFormData),
    });

    const result = await response.json();

    if (response.ok) {
      cookies().set({
        name: 'token',
        value: '',
        maxAge: -1, // 設置 maxAge 為負數來清除 Cookie
      });

      cookies().set({
        name: 'token',
        value: result.data.accessToken,
        maxAge: 60 * 60 * 24, // 設定為 1 天
        secure: isProduction, // 需要在 HTTPS 上啟用
      });

      cookies().set({
        name: 'user_id',
        value: result.data.id,
        maxAge: 60 * 60 * 24, // 設定為 1 天
        secure: isProduction, // 需要在 HTTPS 上啟用
      });

      return result;
    } else {
      return { ...result, data: {} };
    }
  } catch (error) {
    return { success: false, data: {}, message: error || 'An error occurred' };
  }
};
