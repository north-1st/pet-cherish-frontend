'use server';

import { isRedirectError } from 'next/dist/client/components/redirect';
import { cookies } from 'next/headers';
import { RedirectType, redirect } from 'next/navigation';

import { z } from 'zod';

const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export const login = async (prevState: any, formData: FormData) => {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      email: validatedFields.error.flatten().fieldErrors.email,
      password: validatedFields.error.flatten().fieldErrors.password,
    };
  }

  try {
    const response = await fetch('https://pet-cherish-backend.onrender.com/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedFields.data),
    });

    const data = await response.json();

    if (!response.ok) {
      return { message: data.message };
    }

    if (data.status != true) {
      throw new Error(data.message);
    } else {
      cookies().set({
        name: 'token',
        value: data.data.accessToken,
        path: '/',
        maxAge: 120,
        secure: true,
        sameSite: 'strict',
      });
      redirect('/', RedirectType.replace);
    }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return {
      message: JSON.stringify(error),
    };
  }
};
