import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';

import RegisterForm from './components/RegisterForm';

const Register = () => {
  return (
    <Card className='w-[350px] rounded-none rounded-r-lg border-none shadow-none'>
      <CardContent className='p-10'>
        <h1 className='mb-4 text-center text-xl font-semibold'>Register</h1>
        <RegisterForm />
        <p className='mt-4 text-center text-sm'>
          Already have an account?&nbsp;
          <Link className='text-blue-500 hover:text-blue-600' href='/login'>
            Log in
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};

export default Register;
