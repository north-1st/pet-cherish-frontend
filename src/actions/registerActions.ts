'use server';

import { cookies } from 'next/headers';

import { registerSchema } from '@/schemas/registerSchema';

import { baseURL } from '../const/const';

export const registerActions = async (formData: FormData) => {
  const validatedFields = registerSchema.safeParse({
    real_name: formData.get('real_name'),
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
    const response = await fetch(`${baseURL}/api/v1/users/signup`, {
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
        secure: true,
      });

      return result;
    } else {
      return { ...result, data: {} };
    }
  } catch (error) {
    return { success: false, data: {}, message: error || 'An error occurred' };
  }
};
