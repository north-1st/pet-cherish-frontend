'use client';

import React, { useRef } from 'react';

import { applyForOrder } from '@/actions/orderAction';
import { CreateOrderRequest, createOrderBodySchema } from '@/schemas/orderSchema';
import { TaskDataResponse } from '@/schemas/taskSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';

import TriggerDialog from '@/components/common/button/TriggerDialog';
import FormTextArea from '@/components/common/form/FormTextArea';

import { TaskDescription } from './TaskDescription';

interface ApplyOrderDialogProps {
  disabled: boolean;
  targetTask: TaskDataResponse;
  triggerChildren: React.ReactNode;
}
export function ApplyOrderDialog({ disabled, targetTask, triggerChildren }: ApplyOrderDialogProps) {
  const closeDialogRef = useRef<HTMLButtonElement>(null);
  const defaultValues: Partial<CreateOrderRequest> = createOrderBodySchema.parse({
    task_id: targetTask.id,
    note: '',
  });
  const form = useForm<CreateOrderRequest>({
    resolver: zodResolver(createOrderBodySchema),
    defaultValues,
  });

  async function onSubmit(req: CreateOrderRequest) {
    const res = await applyForOrder(req);
    if (res.success) {
      toast({
        description: res.message,
      });

      closeDialogRef.current?.click();
    } else {
      toast({
        title: '接案申請失敗！',
        description: res.message,
        variant: 'destructive',
      });
    }
  }

  return (
    <TriggerDialog
      disabled={disabled}
      closeDialogRef={closeDialogRef}
      triggerChildren={triggerChildren}
      title={`確認要接下任務：${targetTask.title}?`}
      contentChildren={
        <>
          <TaskDescription data={targetTask} />

          <hr className='my-3 border-t-2 border-gray04' />

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormTextArea
                form={form}
                fieldName='note'
                formLabel='保姆備註'
                placeholder='輸入問候訊息讓飼主認識您...'
              />
              <div className='flex justify-end'>
                <Button type='submit' className='w-full text-black md:w-auto'>
                  送出
                </Button>
              </div>
            </form>
          </Form>
        </>
      }
    />
  );
}

export default ApplyOrderDialog;
