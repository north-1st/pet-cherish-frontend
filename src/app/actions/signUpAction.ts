'use server';

import { isRedirectError } from 'next/dist/client/components/redirect';
import { cookies } from 'next/headers';

// import { RedirectType, redirect } from 'next/navigation';
import { z } from 'zod';

const signUpSchema = z.object({
  real_name: z.string().min(2, { message: '姓名最少 2 個字 !' }),
  email: z.string().email({ message: '郵件格式不對 !' }),
  password: z.string().min(6, '密碼必須至少有6個字元 !'),
});

export const userSignUp = async (prevState: any, formData: FormData) => {
  const validatedFields = signUpSchema.safeParse({
    real_name: formData.get('real_name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      real_name: validatedFields.error.flatten().fieldErrors.real_name,
      email: validatedFields.error.flatten().fieldErrors.email,
      password: validatedFields.error.flatten().fieldErrors.password,
    };
  }

  const rawFormData = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('https://pet-cherish-backend.onrender.com/api/v1/users/signup', {
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
        value: result.data.accessToken,
        maxAge: 60 * 60 * 24 * 7, // 設定為 7 天
        secure: true,
      });
      // const email = decodeURIComponent(cookies().get('email')?.value || '');
      cookies().set({
        name: 'email',
        value: encodeURIComponent(result.data.email),
        maxAge: 60 * 60 * 24 * 7,
        secure: true,
      });
      cookies().set({
        name: 'id',
        value: result.data.id,
        maxAge: 60 * 60 * 24 * 7,
        secure: true,
      });
      cookies().set({
        name: 'is_sitter',
        value: result.data.is_sitter,
        maxAge: 60 * 60 * 24 * 7,
        secure: true,
      });
      // redirect('/', RedirectType.replace);
      return result;
    } else {
      return result;
    }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: error || 'An error occurred' };
  }
};
