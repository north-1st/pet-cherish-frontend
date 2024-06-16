'use client';

import { applySitterAction } from '@/actions/sitterAction';
import {
  ApplySitterRequest,
  SitterStatus,
  applySitterRequestSchema,
  sitterStatusSchema,
} from '@/schemas/sitterSchema';
import { uploadTypeSchema } from '@/schemas/upload';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';

import FormImageInput from '@/components/common/form/FormImageInput';
import FormTextInput from '@/components/common/form/FormTextInput';

const ApplySitterForm = ({
  status,
  defaultValues,
}: {
  status: SitterStatus | null;
  defaultValues?: Partial<ApplySitterRequest>;
}) => {
  const isUpdate = status != null;

  const form = useForm<ApplySitterRequest>({
    resolver: zodResolver(applySitterRequestSchema),
    defaultValues,
  });

  async function onSubmit(data: ApplySitterRequest) {
    const res = await applySitterAction(data, isUpdate);

    if (res.success) {
      toast({
        description: res.message,
      });
    } else {
      toast({
        title: '保母申請失敗',
        description: res.message,
        variant: 'destructive',
      });
    }
  }
  const className = 'w-2/5 aspect-[3/4] rounded-xl h-auto';

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h3 className='mb-4 text-xl font-bold'>申請保母</h3>
        <p className='text-sm text-red-500'>
          {status == sitterStatusSchema.enum.APPROVING && '狀態：審核中'}
          {status == sitterStatusSchema.enum.REJECTED && '狀態：審核拒絕'}
        </p>
        <div className='space-y-4'>
          <FormTextInput
            form={form}
            fieldName='certificate_number'
            formLabel='保母證號碼'
            placeholder='請輸入保母證號碼'
          />
          <div className='grid gap-6 md:grid-cols-2'>
            <FormImageInput
              form={form}
              fieldName='certificate_image'
              formLabel='保母證照片'
              uploadType={uploadTypeSchema.enum.CERTIFICATE}
              containerClassName={className}
              fallbackClassName='rounded-xl'
              isArray={false}
            />

            <FormImageInput
              form={form}
              fieldName='police_check_image'
              formLabel='良民證照片'
              uploadType={uploadTypeSchema.enum.POLICE_CHECK}
              containerClassName={className}
              fallbackClassName='rounded-xl'
              isArray={false}
            />
          </div>
        </div>
        <div className='flex justify-end gap-4'>
          <Button type='submit' className='orangeFill mt-4 w-full'>
            {isUpdate ? '更新' : '送出'}
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default ApplySitterForm;
