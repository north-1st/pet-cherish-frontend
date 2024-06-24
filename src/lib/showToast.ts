'use client';

import { toast } from '@/components/ui/use-toast';

interface ToastProps {
  success: boolean;
  successTitle?: string;
  errorTitle?: string;
  message: string;
}

const showToast = ({ success, successTitle, errorTitle, message: description }: ToastProps) => {
  if (success) {
    toast({
      title: successTitle,
      description,
      variant: 'default',
    });
  } else {
    toast({
      title: errorTitle,
      description,
      variant: 'destructive',
    });
  }
};

export default showToast;
