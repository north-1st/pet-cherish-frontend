import { LOCALE } from '@/const/config';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: Date | null) => {
  return date?.toLocaleDateString(LOCALE);
};

export const formatTime = (date?: Date | null, options?: Intl.DateTimeFormatOptions) => {
  return date?.toLocaleTimeString(LOCALE, {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    ...options,
  });
};

export const formatDateTime = (date: Date | null) => {
  return date?.toLocaleString(LOCALE, {
    hour12: false,
  });
};

export const dateTimeDuration = (start: Date, end: Date) => {
  const startDate = formatDate(start);
  const endDate = formatDate(end);

  if (startDate === endDate) {
    return `${startDate} ${formatTime(start)} ~ ${formatTime(end)}`;
  } else {
    return `${startDate} ${formatTime(start)} ~ ${endDate} ${formatTime(end)}`;
  }
};

export const addDays = (date: Date, days: number) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};
