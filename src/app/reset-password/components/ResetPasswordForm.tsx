'use client';

import { resetPasswordAction } from '@/actions/resetPasswordActions';
import { ResetPasswordSchema, resetPasswordSchema } from '@/schemas/resetPasswordSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

import { ResetPasswordResponse } from '@/types/types';

import useUserStore from '@/hooks/useUserStore';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const ResetPasswordForm = () => {
  const { user } = useUserStore();
  const { pending } = useFormStatus();

  const form = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      old_password: '',
      password: '',
      password_confirm: '',
    },
  });

  const onSubmit = async (data: ResetPasswordSchema) => {
    if (!user || !user.id) {
      Swal.fire({
        icon: 'error',
        title: '用戶未登入或用戶ID遺失！',
        text: '請先登入再重試。',
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append('old_password', data.old_password);
      formData.append('password', data.password);
      formData.append('password_confirm', data.password_confirm);

      const result: ResetPasswordResponse = await resetPasswordAction(formData, user?.id);

      if (result.status) {
        Swal.fire({
          icon: 'success',
          title: '更新密碼成功 !',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          form.reset();
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: '更新密碼發生錯誤 !',
          html: result.message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error !',
        text: error instanceof Error ? error.message : '發生了意料之外的錯誤。',
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='old_password'
          render={({ field }) => (
            <FormItem className='space-y-0'>
              <FormLabel>舊密碼*</FormLabel>
              <FormControl>
                <Input type='password' placeholder='輸入舊密碼' {...field} />
              </FormControl>
              <FormDescription className='text-xs'>密碼最少 8 個字元 !</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem className='space-y-0'>
              <FormLabel>新密碼*</FormLabel>
              <FormControl>
                <Input type='password' placeholder='輸入新密碼' {...field} />
              </FormControl>
              <FormDescription className='text-xs'>密碼最少 8 個字元 !</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password_confirm'
          render={({ field }) => (
            <FormItem className='space-y-0'>
              <FormLabel>新密碼確認*</FormLabel>
              <FormControl>
                <Input type='password' placeholder='輸入新密碼' {...field} />
              </FormControl>
              <FormDescription className='text-xs'>密碼最少 8 個字元 !</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className='w-full bg-[#26a69a] text-white hover:bg-[#26a69a] hover:text-white hover:opacity-80'
          type='submit'
          variant='outline'
          disabled={pending}
        >
          登入
        </Button>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
