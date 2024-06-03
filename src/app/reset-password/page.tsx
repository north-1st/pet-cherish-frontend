import { Card, CardContent } from '@/components/ui/card';

import ResetPasswordForm from './components/ResetPasswordForm';

const ResetPassword = () => {
  return (
    <section className='flex min-h-screen-minus-144px flex-col items-center justify-center bg-[#F5F5F5]'>
      <h2 className='mb-4 text-3xl font-bold'>更改密碼</h2>
      <Card className='w-[350px] rounded-none rounded-l-lg border-none shadow-none'>
        <CardContent className='p-10'>
          <ResetPasswordForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default ResetPassword;
