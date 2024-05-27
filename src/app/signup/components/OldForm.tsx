'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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

// import { userSignUp } from '../../actions/signUpAction';

const formSchema = z.object({
  email: z.string().email({
    message: '郵件格式不對 !',
  }),
  password: z.string().min(6, {
    message: '密碼必須至少有6個字元 !',
  }),
  real_name: z.string().min(2, {
    message: '姓名必填且最少 2 個字 !',
  }),
});

const OldForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      real_name: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // 註冊成功的處理邏輯
        console.log(result.message);
      } else {
        // 註冊失敗的處理邏輯
        console.error(result.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
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
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default OldForm;
