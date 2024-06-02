import { RequestInit } from 'next/dist/server/web/spec-extension/request';

import { API_BASE_URL } from '@/const/const';

import { toast } from '@/components/ui/use-toast';

class ClientApiManager {
  private static request = async (endpoint: string, options: RequestInit = {}) => {
    try {
      const url = new URL(endpoint, API_BASE_URL);
      const token = localStorage.getItem('token');

      const res = await fetch(url.toString(), {
        ...options,
        headers: {
          ...options?.headers,
          Authorization: token ? `Bearer ${token}` : '',
        },
      });

      const resData = await res.json();

      if (resData.status == true) {
        toast({
          title: '成功',
          description: resData.message,
        });
        return {
          success: true,
          data: resData.data,
        };
      } else {
        throw new Error(resData.message);
      }
    } catch (error) {
      toast({
        title: '失敗',
        description: error instanceof Error ? error.message : '發生錯誤',
        variant: 'destructive',
      });
      console.error('There was a problem with the fetch operation:', error);
      return {
        success: false,
      };
    }
  };

  public static get = async (endpoint: string) => this.request(endpoint);

  public static post = async (endpoint: string, payload: Record<string, any>) =>
    this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

  public static patch = async (endpoint: string, payload: Record<string, any>) =>
    this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

  public static delete = async (endpoint: string, payload: Record<string, any>) =>
    this.request(endpoint, {
      method: 'DELETE',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

  public static upload = async (endpoint: string, formData: FormData) =>
    this.request(endpoint, {
      method: 'POST',
      body: formData,
    });
}

export default ClientApiManager;
