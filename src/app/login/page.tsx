'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useFormState, useFormStatus } from 'react-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { login } from '../../actions/actions';

const Login = () => {
  const { pending } = useFormStatus();
  const initialState = {
    message: '',
  };

  const [state, formAction] = useFormState(login, initialState);

  return (
    <section className='flex min-h-screen items-center justify-center bg-[#f5f5f4]'>
      <div className='flex'>
        <Card className='w-[350px] rounded-none rounded-l-lg border-none bg-gradient-to-br from-[#89f7fe] to-[#66a6ff] shadow-none'>
          <CardContent className='flex h-[100%] flex-col items-center justify-center p-10'>
            <h2 className='mb-2 text-3xl font-bold'>Glad to see You!</h2>
            <Link href='/'>
              <Image
                alt='Logo'
                className='text-white'
                height='44'
                width='142'
                src='/images/logo1.png'
              />
            </Link>
          </CardContent>
        </Card>
        <Card className='w-[350px] rounded-none rounded-r-lg border-none shadow-none'>
          <CardContent className='p-10'>
            <h1 className='mb-4 text-center text-xl font-semibold'>Log in</h1>
            <form className='space-y-4' action={formAction}>
              <div>
                <Label htmlFor='email'>Email*</Label>
                <Input id='email' name='email' placeholder='您的電子郵件' type='text' />
              </div>
              <p aria-live='polite'>{state.email}</p>
              <div>
                <Label htmlFor='password'>密碼*</Label>
                <Input id='password' name='password' placeholder='選擇一個密碼' type='password' />
              </div>
              <p aria-live='polite'>{state.password}</p>
              <p aria-live='polite'>{state.message}</p>
              <Button type='submit' className='w-full bg-[#26a69a]' disabled={pending}>
                {pending ? 'Loading...' : '登入'}
              </Button>
              <p className='mt-4 text-center text-sm'>
                Don&#39;t have an account? &nbsp;
                <Link className='text-blue-500 hover:text-blue-600' href='/register'>
                  Register
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Login;
