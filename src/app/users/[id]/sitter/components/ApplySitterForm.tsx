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
        title: '寵物申請失敗',
        description: res.message,
        variant: 'destructive',
      });
    }
  }
  const className = 'w-2/5 aspect-[3/4] rounded-xl h-auto';

  return (
    <div className='flex flex-col items-center bg-gray04 p-12'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='container max-w-[700px]  space-y-6 rounded-lg bg-white p-10'
        >
          <h3 className='mb-4 text-center text-3xl font-bold'>申請保母</h3>
          <p className='text-sm text-red-500'>
            {status == sitterStatusSchema.enum.APPROVING && '狀態：審核中'}
            {status == sitterStatusSchema.enum.REJECTED && '狀態：審核拒絕'}
          </p>
          <div className='flex flex-col gap-6 md:flex-row'>
            <div className='w-full'>
              <h4 className='text-lg font-bold'>保母證</h4>
              <div className='space-y-4'>
                <FormTextInput
                  form={form}
                  fieldName='certificate_number'
                  formLabel='證照號碼'
                  placeholder='請輸入證照號碼'
                />
                <FormImageInput
                  form={form}
                  fieldName='certificate_image'
                  formLabel='證照照片'
                  uploadType={uploadTypeSchema.enum.CERTIFICATE}
                  containerClassName={className}
                  fallbackClassName='rounded-xl'
                  isArray={false}
                />
              </div>
            </div>
            <div className='w-full'>
              <h4 className='text-lg font-bold'>良民證</h4>
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
            <Button type='submit' className='orangeFill w-full'>
              {isUpdate ? '更新' : '送出'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default ApplySitterForm;
