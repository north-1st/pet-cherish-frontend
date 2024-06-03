'use client';

import React, { useRef } from 'react';

import { petAction } from '@/actions/petAction';
import { PetRequest, petCharacterSchema, petRequestSchema } from '@/schemas/petSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import useUserStore from '@/hooks/useUserStore';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';

import TriggerDialog from '@/components/common/button/TriggerDialog';
import FormImageInput from '@/components/common/form/FormImageInput';
import FormMultiCheckboxes from '@/components/common/form/FormMultiCheckboxes';
import FormRadioGroup from '@/components/common/form/FormRadioGroup';
import FormTextInput from '@/components/common/form/FormTextInput';

const petCharacters = [
  {
    id: petCharacterSchema.enum.IRRITABLE,
    label: '暴躁',
  },
  {
    id: petCharacterSchema.enum.CUTE,
    label: '可愛',
  },
  {
    id: petCharacterSchema.enum.SMART,
    label: '聰明',
  },
  {
    id: petCharacterSchema.enum.FRIENDLY,
    label: '友善',
  },
  {
    id: petCharacterSchema.enum.GREEDY,
    label: '貪吃',
  },
  {
    id: petCharacterSchema.enum.NAUGHTY,
    label: '調皮',
  },
  {
    id: petCharacterSchema.enum.SNOOZE,
    label: '貪睡',
  },
  {
    id: petCharacterSchema.enum.ENERGETIC,
    label: '活潑',
  },
];

const petSize = [
  {
    id: 'L',
    label: '大',
  },
  {
    id: 'M',
    label: '中',
  },
  {
    id: 'S',
    label: '小',
  },
];

const hasMicrochip = [
  {
    id: true,
    label: '有',
  },
  {
    id: false,
    label: '無',
  },
];

const isNeutered = [
  {
    id: true,
    label: '是',
  },
  {
    id: false,
    label: '否',
  },
];

export function PetDialog({
  id,
  triggerChildren,
  defaultValues,
}: {
  id?: string;
  triggerChildren: React.ReactNode;
  defaultValues?: Partial<PetRequest>;
}) {
  const user = useUserStore((state) => state.user);
  const closeDialogRef = useRef<HTMLButtonElement>(null);
  const form = useForm<PetRequest>({
    resolver: zodResolver(petRequestSchema),
    defaultValues,
  });

  async function onSubmit(data: PetRequest) {
    const res = await petAction(data, id);
    if (res.success) {
      toast({
        description: res.message,
      });
      closeDialogRef.current?.click();
    } else {
      toast({
        title: '寵物設定失敗',
        description: res.message,
        variant: 'destructive',
      });
    }
  }

  return (
    <TriggerDialog
      disabled={user?.id != id}
      closeDialogRef={closeDialogRef}
      triggerChildren={triggerChildren}
      title={'寵物資料設定'}
      contentChildren={
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormImageInput form={form} fieldName='avatar_list' />
            <div className='grid grid-cols-2 gap-x-4 gap-y-6'>
              <FormTextInput
                form={form}
                fieldName='name'
                formLabel='寵物名稱'
                placeholder='請輸入寵物名稱'
              />
              <FormTextInput
                form={form}
                fieldName='breed'
                formLabel='品種'
                placeholder='請輸入品種'
              />
            </div>
            <FormRadioGroup form={form} fieldName='size' formLabel='犬型' options={petSize} />
            <FormMultiCheckboxes
              form={form}
              fieldName='character_list'
              formLabel='個性'
              options={petCharacters}
            />
            <div className='grid gap-x-4 gap-y-6 md:grid-cols-2'>
              <FormRadioGroup
                form={form}
                fieldName='has_microchipped'
                formLabel='寵物晶片'
                options={hasMicrochip}
              />
              <FormRadioGroup
                form={form}
                fieldName='is_neutered'
                formLabel='結紮'
                options={isNeutered}
              />
            </div>
            <FormTextInput
              form={form}
              fieldName='health_description'
              formLabel='健康描述'
              placeholder='請輸入健康描述'
            />
            <div className='flex justify-end gap-4'>
              {defaultValues && (
                <Button variant='outline' type='button'>
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

export default PetDialog;
