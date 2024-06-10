'use server';

import { searchTasksRequestSchema } from '@/schemas/searchTasksSchema';

import { API_BASE_URL } from '../const/config';

export const searchTasksAction = async (formData: FormData) => {
  const validatedFields = searchTasksRequestSchema.safeParse({
    service_city: formData.get('service_city'),
    service_district_list: formData.get('service_district_list'),
    service_type_list: formData.get('service_type_list'),
    pet_size_list: formData.get('pet_size_list'),
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

  const queryParams = new URLSearchParams({
    ...rawFormData,
    page: '1',
    limit: '1',
  });

  console.log(`${API_BASE_URL}/api/v1/tasks?${queryParams.toString()}`);

  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/tasks?${queryParams.toString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    if (response.ok) {
      return result;
    } else {
      return { ...result, data: {} };
    }
  } catch (error) {
    return { success: false, data: {}, message: error || 'An error occurred' };
  }
};
