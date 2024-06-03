'use client';

import React, { useRef } from 'react';

import profileAction from '@/actions/profileAction';
import {
  UserProfileRequest,
  genderSchema,
  userProfileRequestSchema,
} from '@/schemas/userProfileSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';

import TriggerDialog from '@/components/common/button/TriggerDialog';
import FormDateInput from '@/components/common/form/FormDateInput';
import FormImageInput from '@/components/common/form/FormImageInput';
import FormRadioGroup from '@/components/common/form/FormRadioGroup';
import FormTextInput from '@/components/common/form/FormTextInput';

const gender = [
  {
    id: genderSchema.enum.MALE,
    label: '男',
  },
  {
    id: genderSchema.enum.FEMALE,
    label: '女',
  },
  {
    id: genderSchema.enum.OTHER,
    label: '其他',
  },
];

export function ProfileDialog({
  triggerChildren,
  defaultValues,
}: {
  triggerChildren: React.ReactNode;
  defaultValues?: Partial<UserProfileRequest>;
}) {
  const closeDialogRef = useRef<HTMLButtonElement>(null);
  const form = useForm<UserProfileRequest>({
    resolver: zodResolver(userProfileRequestSchema),
    defaultValues,
  });

  async function onSubmit(data: UserProfileRequest) {
    const res = await profileAction(data);

    if (res.success) {
      toast({
        description: res.message,
      });
      closeDialogRef.current?.click();
    } else {
      toast({
        title: '使用者資料設定失敗',
        description: res.message,
        variant: 'destructive',
      });
    }
  }

  return (
    <TriggerDialog
      closeDialogRef={closeDialogRef}
      triggerChildren={triggerChildren}
      title={'使用者資料設定'}
      disabled={false}
      contentChildren={
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormImageInput form={form} fieldName='avatar' />
            <div className='grid grid-cols-2 gap-x-4 gap-y-6'>
              <FormTextInput
                form={form}
                fieldName='nickname'
                formLabel='綽號'
                placeholder='請輸入綽號'
              />
              <FormDateInput
                form={form}
                fieldName='birthdate'
                formLabel='出生年月日'
                placeholder='請選擇出生日'
              />
            </div>
            <div className='grid gap-x-4 gap-y-6 md:grid-cols-2'>
              <FormRadioGroup
                form={form}
                fieldName='gender'
                formLabel='性別'
                isBoolean={false}
                options={gender}
              />
            </div>
            <FormTextInput
              form={form}
              fieldName='self_introduction'
              formLabel='自我介紹'
              placeholder='請輸入自我介紹'
            />
            <div className='flex justify-end gap-4'>
              <Button type='submit' className='w-full text-black md:w-auto'>
                送出
              </Button>
            </div>
          </form>
        </Form>
      }
    />
  );
}

export default ProfileDialog;
