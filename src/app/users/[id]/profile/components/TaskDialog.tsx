'use client';

import React, { useRef } from 'react';

import { taskAction, taskDeleteAction } from '@/actions/taskAction';
import TAIWAN_DISTRICTS from '@/const/taiwanDistricts';
import { ACCEPT_SITTER_CONTACT, SERVICE_TYPE, TASK_IS_CLOSED } from '@/const/task';
import { TaskRequest, taskRequestSchema } from '@/schemas/taskSchema';
import { uploadTypeSchema } from '@/schemas/upload';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';

import TriggerDialog from '@/components/common/button/TriggerDialog';
import FormDateTimeInput from '@/components/common/form/FormDateTimeInput';
import FormImageInput from '@/components/common/form/FormImageInput';
import FormRadioGroup from '@/components/common/form/FormRadioGroup';
import FormSelect from '@/components/common/form/FormSelect';
import FormTextInput from '@/components/common/form/FormTextInput';

export function TaskDialog({
  disabled,
  taskId,
  petOptions,
  triggerChildren,
  defaultValues,
}: {
  disabled: boolean;
  taskId?: string;
  petOptions: { id: string; label: string }[];
  triggerChildren: React.ReactNode;
  defaultValues?: Partial<TaskRequest>;
}) {
  const closeDialogRef = useRef<HTMLButtonElement>(null);
  const form = useForm<TaskRequest>({
    resolver: zodResolver(taskRequestSchema),
    defaultValues,
  });

  async function onSubmit(data: TaskRequest) {
    const res = await taskAction(data, taskId);
    if (res.success) {
      toast({
        description: res.message,
      });
      if (!taskId) form.reset();
      closeDialogRef.current?.click();
    } else {
      toast({
        title: '任務設定失敗',
        description: res.message,
        variant: 'destructive',
      });
    }
  }

  async function deleteTask() {
    if (!taskId) return;
    const res = await taskDeleteAction(taskId!);
    if (res.success) {
      toast({
        description: res.message,
      });
      closeDialogRef.current?.click();
    } else {
      toast({
        title: '任務刪除失敗',
        description: res.message,
        variant: 'destructive',
      });
    }
  }

  const serviceType = useRef(
    Object.entries(SERVICE_TYPE).map(([key, value]) => ({
      id: key,
      label: value,
    }))
  );

  const cities = TAIWAN_DISTRICTS.map(({ name }) => ({
    id: name,
    label: name,
  }));

  const districts = useRef(
    TAIWAN_DISTRICTS.reduce(
      (acc, { name, districts }) => {
        acc[name] = districts.map(({ name }) => ({
          id: name,
          label: name,
        }));
        return acc;
      },
      {} as Record<string, { id: string; label: string }[]>
    )
  );

  const isClosed = useRef(
    Object.entries(TASK_IS_CLOSED).map(([key, value]) => ({
      id: key,
      label: value,
    }))
  );

  const acceptSitterContact = useRef(
    Object.entries(ACCEPT_SITTER_CONTACT).map(([key, value]) => ({
      id: key,
      label: value,
    }))
  );

  return (
    <TriggerDialog
      disabled={disabled}
      closeDialogRef={closeDialogRef}
      triggerChildren={triggerChildren}
      title={'任務資料設定'}
      contentChildren={
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormImageInput
              form={form}
              fieldName='cover'
              uploadType={uploadTypeSchema.enum.TASK}
              containerClassName='w-full aspect-video rounded-xl h-auto'
              fallbackClassName='rounded-xl'
              isArray={false}
            />
            <FormTextInput
              form={form}
              fieldName='title'
              formLabel='標題'
              placeholder='請輸入標題'
            />
            <FormDateTimeInput form={form} fieldName='start_at' formLabel='開始時間' />
            <FormDateTimeInput form={form} fieldName='end_at' formLabel='結束時間' />
            <div className='grid grid-cols-2 gap-x-4 gap-y-6'>
              <FormSelect
                form={form}
                fieldName='city'
                formLabel='縣市'
                options={cities}
                placeholder='請選擇縣市'
                onChange={() => {
                  form.resetField('district');
                }}
              />
              {form.getValues('city') && (
                <FormSelect
                  form={form}
                  fieldName='district'
                  formLabel='區域'
                  options={districts.current[form.getValues('city')] ?? []}
                  placeholder='請選擇區域'
                />
              )}
            </div>
            <div className='grid grid-cols-2 gap-x-4 gap-y-6'>
              <FormRadioGroup
                form={form}
                fieldName='service_type'
                formLabel='需要什麼服務'
                options={serviceType.current}
                isBoolean={false}
                isVertical
              />
              <div className='grid gap-y-2'>
                <FormTextInput
                  form={form}
                  fieldName='unit_price'
                  formLabel='單位價格'
                  placeholder='請輸入單位價格'
                  isNumber
                />
                <FormSelect
                  form={form}
                  fieldName='pet_id'
                  formLabel='寵物'
                  options={petOptions}
                  placeholder='請選擇寵物'
                />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-x-4 gap-y-6'>
              <FormRadioGroup
                form={form}
                fieldName='public'
                formLabel='是否下架'
                options={isClosed.current}
                isBoolean={false}
              />
              <FormRadioGroup
                form={form}
                fieldName='accept_sitter_contact'
                formLabel='是否接受保母主動聯繫下單'
                options={acceptSitterContact.current}
                isBoolean={true}
              />
            </div>
            <FormTextInput
              form={form}
              fieldName='description'
              formLabel='詳細資訊'
              placeholder='請輸入詳細資訊'
            />
            <div className='flex justify-end gap-4'>
              {defaultValues && (
                <Button variant='outline' type='button' onClick={deleteTask}>
                  刪除
                </Button>
              )}
              <Button type='submit' className='w-full text-black md:w-auto'>
                {defaultValues ? '更新' : '送出'}
              </Button>
            </div>
          </form>
        </Form>
      }
    />
  );
}

export default TaskDialog;
