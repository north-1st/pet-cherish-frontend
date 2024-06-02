import { RequestInit } from 'next/dist/server/web/spec-extension/request';

import { toast } from '@/components/ui/use-toast';

const isProduction = true;

const API_BASE_URL = isProduction
  ? 'https://pet-cherish-backend.onrender.com'
  : 'http://localhost:5000';

class ClientApiManager {
  private static request = async (endpoint: string, options: RequestInit = {}) => {
    try {
      const url = new URL(endpoint, API_BASE_URL);

      const res = await fetch(url.toString(), {
        ...options,
        headers: {
          ...options?.headers,
          'Content-Type': 'application/json',
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
    });

  public static patch = async (endpoint: string, payload: Record<string, any>) =>
    this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(payload),
    });

  public static delete = async (endpoint: string, payload: Record<string, any>) =>
    this.request(endpoint, {
      method: 'DELETE',
      body: JSON.stringify(payload),
    });
}

export default ClientApiManager;
