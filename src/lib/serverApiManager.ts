import { RequestInit } from 'next/dist/server/web/spec-extension/request';
import { cookies } from 'next/headers';

import { API_BASE_URL } from '@/const/const';
import { ApiResponse } from '@/schemas/apiResponse';
import { z } from 'zod';

class ServerApiManager {
  private static request = async (endpoint: string, options: RequestInit = {}) => {
    try {
      const url = new URL(endpoint, API_BASE_URL);

      const res = await fetch(url.toString(), {
        ...options,
        headers: {
          ...options?.headers,
          Authorization: `Bearer ${cookies().get('token')?.value}`,
        },
      });

      const resData: ApiResponse = await res.json();

      if (resData.status == true) {
        return {
          success: true,
          status: res.status,
          data: resData.data,
          ...(z.number().safeParse(resData.total).success && { total: resData.total }),
          message: resData.message,
        };
      } else {
        return {
          success: false,
          status: res.status,
          data: null,
          message: resData.message,
        };
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return {
        status: 500,
        success: false,
        message: error instanceof Error ? error.message : '發生錯誤',
        data: null,
      };
    }
  };

  public static get = async (endpoint: string, options: RequestInit = {}) =>
    this.request(endpoint, options);

  public static post = async (
    endpoint: string,
    payload: Record<string, any>,
    options: RequestInit = {}
  ) =>
    this.request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

  public static patch = async (
    endpoint: string,
    payload: Record<string, any>,
    options: RequestInit = {}
  ) =>
    this.request(endpoint, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

  public static delete = async (
    endpoint: string,
    payload?: Record<string, any>,
    options: RequestInit = {}
  ) =>
    this.request(endpoint, {
      ...options,
      method: 'DELETE',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
}

export default ServerApiManager;
