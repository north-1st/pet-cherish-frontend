export const isProduction = true;

export const API_BASE_URL: string = isProduction
  ? 'https://pet-cherish-backend.onrender.com'
  : 'http://localhost:5000';
