'use server';

import { resetPasswordSchema } from '@/schemas/resetPasswordSchema';

import { API_BASE_URL } from '../const/config';

export const resetPasswordAction = async (formData: FormData, userId: string) => {
  const validatedFields = resetPasswordSchema.safeParse({
    old_password: formData.get('old_password'),
    password: formData.get('password'),
    password_confirm: formData.get('password_confirm'),
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
    const response = await fetch(`${API_BASE_URL}/api/v1/users/${userId}/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rawFormData),
    });

    const result = await response.json();

    if (response.ok) {
      return result;
    }

    return { ...result, data: {} };
  } catch (error) {
    return { success: false, data: {}, message: error || 'An error occurred' };
  }
};
