'use client';

import { useRouter } from 'next/navigation';

import { registerAction } from '@/actions/registerActions';
import { RegisterSchema, registerSchema } from '@/schemas/registerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

import { RegisterResponse } from '@/types/types';

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

const RegisterForm = () => {
  const { pending } = useFormStatus();
  const router = useRouter();
  const { setUser, setToken } = useUserStore();

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      real_name: '',
    },
  });

  const onSubmit = async (data: RegisterSchema) => {
    try {
      const formData = new FormData();
      formData.append('real_name', data.real_name);
      formData.append('email', data.email);
      formData.append('password', data.password);

      const result: RegisterResponse = await registerAction(formData);

      if (result.status) {
        Swal.fire({
          icon: 'success',
          title: '註冊成功 !',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          setUser(result.data);
          setToken(result.data.accessToken);
          router.push('/');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: '註冊發生錯誤 !',
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
          name='email'
          render={({ field }) => (
            <FormItem className='space-y-0'>
              <FormLabel>Email*</FormLabel>
              <FormControl>
                <Input placeholder='您的郵件' {...field} />
              </FormControl>
              <FormDescription className='text-xs'>請填寫常用郵件 !</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem className='space-y-0'>
              <FormLabel>Password*</FormLabel>
              <FormControl>
                <Input type='password' placeholder='輸入密碼' {...field} />
              </FormControl>
              <FormDescription className='text-xs'>密碼最少 6 個字元 !</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='real_name'
          render={({ field }) => (
            <FormItem className='space-y-0'>
              <FormLabel>姓名*</FormLabel>
              <FormControl>
                <Input placeholder='您的全名' {...field} />
              </FormControl>
              <FormDescription className='text-xs'>請填寫真實姓名 !</FormDescription>
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
          註冊
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
