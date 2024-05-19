'use server';

import { NextResponse } from 'next/server';

export async function POST(formData: FormData) {
  try {
    const response = await fetch('https://pet-cherish-backend.onrender.com/api/v1/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const data = await response.json();
      return NextResponse.json({ message: data.message }, { status: response.status });
    }

    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
