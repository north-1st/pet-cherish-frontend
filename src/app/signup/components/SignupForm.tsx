'use client';

import { useFormState, useFormStatus } from 'react-dom';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { userSignUp } from '../../../actions/signUpAction';

const SignUpForm = () => {
  const { pending } = useFormStatus();
  const initialState = {
    email: '',
    password: '',
    real_name: '',
  };

  const [state, formAction] = useFormState(userSignUp, initialState);

  return (
    <form className='space-y-4' action={formAction}>
      <div>
        <Label htmlFor='real_name'>真實姓名*</Label>
        <Input id='real_name' name='real_name' placeholder='您的真實姓名' type='text' />
      </div>
      <p aria-live='polite'>{state.real_name}</p>
      <div>
        <Label htmlFor='email'>電子郵件*</Label>
        <Input id='email' name='email' placeholder='您的電子郵件' type='email' />
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
        Click
      </Button>
    </form>
  );
};

export default SignUpForm;
