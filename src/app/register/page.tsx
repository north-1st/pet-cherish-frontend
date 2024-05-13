import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Register = () => {
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
            <h1 className='mb-4 text-center text-xl font-semibold'>Sign Up</h1>
            <form className='space-y-4'>
              <div>
                <Label htmlFor='email'>Email*</Label>
                <Input id='email' placeholder='您的電子郵件' type='email' />
              </div>
              <div>
                <Label htmlFor='password'>密碼*</Label>
                <Input id='password' placeholder='選擇一個密碼' type='password' />
              </div>
              <div>
                <Label htmlFor='name'>姓名*</Label>
                <Input id='name' placeholder='您的全名' type='text' />
              </div>
              <div>
                <Label htmlFor='confirm-password'>確認密碼*</Label>
                <Input id='confirm-password' placeholder='再次輸入密碼' type='password' />
              </div>
              <Button className='w-full bg-[#26a69a]'>註冊</Button>
              <p className='mt-4 text-center text-sm'>
                Already have an account?&nbsp;
                <Link className='text-blue-500 hover:text-blue-600' href='/login'>
                  Log in
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Register;
