'use client';

import React, { useRef } from 'react';

import { petAction, petDeleteAction } from '@/actions/petAction';
import { HAS_MICROCHIP, IS_NEUTERED, PET_CHARACTER, PET_SIZE } from '@/const/pet';
import { PetRequest, petRequestSchema } from '@/schemas/petSchema';
import { uploadTypeSchema } from '@/schemas/upload';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';

import TriggerDialog from '@/components/common/button/TriggerDialog';
import FormImageInput from '@/components/common/form/FormImageInput';
import FormMultiCheckboxes from '@/components/common/form/FormMultiCheckboxes';
import FormRadioGroup from '@/components/common/form/FormRadioGroup';
import FormTextInput from '@/components/common/form/FormTextInput';

export function PetDialog({
  disabled,
  petId,
  triggerChildren,
  defaultValues,
}: {
  disabled: boolean;
  petId?: string;
  triggerChildren: React.ReactNode;
  defaultValues?: Partial<PetRequest>;
}) {
  const closeDialogRef = useRef<HTMLButtonElement>(null);
  const form = useForm<PetRequest>({
    resolver: zodResolver(petRequestSchema),
    defaultValues,
  });

  async function onSubmit(data: PetRequest) {
    const res = await petAction(data, petId);
    if (res.success) {
      toast({
        description: res.message,
      });
      if (!petId) form.reset();
      closeDialogRef.current?.click();
    } else {
      toast({
        title: '寵物設定失敗',
        description: res.message,
        variant: 'destructive',
      });
    }
  }

  async function deletePet() {
    if (!petId) return;
    const res = await petDeleteAction(petId!);
    if (res.success) {
      toast({
        description: res.message,
      });
      closeDialogRef.current?.click();
    } else {
      toast({
        title: '寵物刪除失敗',
        description: res.message,
        variant: 'destructive',
      });
    }
  }

  const petCharater = useRef(
    Object.entries(PET_CHARACTER).map(([key, value]) => ({
      id: key,
      label: value,
    }))
  );

  const petSize = useRef(
    Object.entries(PET_SIZE).map(([key, value]) => ({
      id: key,
      label: value,
    }))
  );

  const hasMicrochip = useRef(
    Object.entries(HAS_MICROCHIP).map(([key, value]) => ({
      id: key,
      label: value,
    }))
  );

  const isNeutered = useRef(
    Object.entries(IS_NEUTERED).map(([key, value]) => ({
      id: key,
      label: value,
    }))
  );

  return (
    <TriggerDialog
      disabled={disabled}
      closeDialogRef={closeDialogRef}
      triggerChildren={triggerChildren}
      title={'寵物資料設定'}
      contentChildren={
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormImageInput
              form={form}
              fieldName='avatar_list'
              uploadType={uploadTypeSchema.enum.PET}
              isArray
            />
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
            <FormRadioGroup
              form={form}
              fieldName='size'
              formLabel='犬型'
              options={petSize.current}
              isBoolean={false}
            />
            <FormMultiCheckboxes
              form={form}
              fieldName='character_list'
              formLabel='個性'
              options={petCharater.current}
            />
            <div className='grid gap-x-4 gap-y-6 md:grid-cols-2'>
              <FormRadioGroup
                form={form}
                fieldName='has_microchipped'
                formLabel='寵物晶片'
                options={hasMicrochip.current}
                isBoolean
              />
              <FormRadioGroup
                form={form}
                fieldName='is_neutered'
                formLabel='結紮'
                options={isNeutered.current}
                isBoolean
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
                <Button variant='outline' type='button' onClick={deletePet}>
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
