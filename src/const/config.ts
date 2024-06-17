import { unstable_noStore as noStore } from 'next/cache';

noStore();

export const LOCALE = 'zh-TW';
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const IS_SECURE = API_BASE_URL?.startsWith('https');
