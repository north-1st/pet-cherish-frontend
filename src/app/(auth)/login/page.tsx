import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';

import LoginForm from './components/LoginForm';

const Login = () => {
  return (
    <Card className='w-[350px] rounded-none rounded-r-lg border-none shadow-none'>
      <CardContent className='p-10'>
        <h1 className='mb-4 text-center text-xl font-semibold'>Log in</h1>
        <LoginForm />
        <p className='mt-4 text-center text-sm'>
          Don&#39;t have an account? &nbsp;
          <Link className='text-blue-500 hover:text-blue-600' href='/register'>
            Register
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};

export default Login;
