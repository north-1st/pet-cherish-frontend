'use client';

import { sitterServiceAction } from '@/actions/sitterAction';
import { YES_NO_OPTIONS } from '@/const/common_options';
import { PET_SIZE_OPTIONS } from '@/const/pet';
import { CITIES_OPTIONS, DISTRICTS_OPTIONS } from '@/const/taiwanDistricts';
import { SERVICE_TYPE } from '@/const/task';
import { SitterServiceRequest, sitterServiceRequestSchema } from '@/schemas/sitterSchema';
import { uploadTypeSchema } from '@/schemas/upload';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';

import FormChoiceWithTextInput from '@/components/common/form/FormChoiceWithTextInput';
import FormImageInput from '@/components/common/form/FormImageInput';
import FormMultiCheckboxes from '@/components/common/form/FormMultiCheckboxes';
import FormRadioGroup from '@/components/common/form/FormRadioGroup';
import FormSelect from '@/components/common/form/FormSelect';
import FormTextInput from '@/components/common/form/FormTextInput';

const SitterServiceForm = ({
  defaultValues,
}: {
  defaultValues?: Partial<SitterServiceRequest>;
}) => {
  const form = useForm<SitterServiceRequest>({
    resolver: zodResolver(sitterServiceRequestSchema),
    defaultValues,
  });

  async function onSubmit(data: SitterServiceRequest) {
    const res = await sitterServiceAction(data);

    if (res.success) {
      toast({
        description: res.message,
      });
    } else {
      toast({
        title: '服務刊登失敗',
        description: res.message,
        variant: 'destructive',
      });
    }
  }

  return (
    <div className='max-w-form rounded-lg bg-white'>
      <h3 className='mb-4 text-xl font-bold'>服務刊登</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <FormSelect
            form={form}
            fieldName='service_city'
            formLabel='縣市'
            options={CITIES_OPTIONS}
            placeholder='請選擇縣市'
            onChange={() => {
              form.resetField('service_district_list');
            }}
          />
          {form.getValues('service_city') && (
            <FormMultiCheckboxes
              form={form}
              fieldName='service_district_list'
              formLabel='區域'
              options={DISTRICTS_OPTIONS[form.getValues('service_city')] ?? []}
            />
          )}
          <div className='space-y-2'>
            <FormChoiceWithTextInput
              form={form}
              fieldName='photography_price'
              formLabel='服務類型'
              placeholder='請輸入價格'
              optionName={SERVICE_TYPE.PHOTOGRAPHY}
              isChecked={form.watch('photography_price') != null}
              value={form.watch('photography_price') ?? 0}
              suffix='元/30分鐘'
              isNumber
            />
            <FormChoiceWithTextInput
              form={form}
              fieldName='health_care_price'
              placeholder='請輸入價格'
              optionName={SERVICE_TYPE.HEALTH_CARE}
              isChecked={form.watch('health_care_price') != null}
              value={form.watch('health_care_price') ?? 0}
              suffix='元/30分鐘'
              isNumber
            />
            <FormChoiceWithTextInput
              form={form}
              fieldName='bath_price'
              placeholder='請輸入價格'
              optionName={SERVICE_TYPE.BATH}
              isChecked={form.watch('bath_price') != null}
              value={form.watch('bath_price') ?? 0}
              suffix='元/30分鐘'
              isNumber
            />
            <FormChoiceWithTextInput
              form={form}
              fieldName='walking_price'
              placeholder='請輸入價格'
              optionName={SERVICE_TYPE.WALKING}
              isChecked={form.watch('walking_price') != null}
              value={form.watch('walking_price') ?? 0}
              suffix='元/30分鐘'
              isNumber
            />
          </div>

          <FormMultiCheckboxes
            form={form}
            fieldName='service_size_list'
            formLabel='服務犬型'
            options={PET_SIZE_OPTIONS}
          />
          <FormRadioGroup
            form={form}
            fieldName='is_door_to_door'
            formLabel='是否開放到府接送'
            options={YES_NO_OPTIONS}
            isBoolean={true}
          />

          <FormImageInput
            form={form}
            fieldName='image_list'
            formLabel='服務圖片'
            uploadType={uploadTypeSchema.enum.TASK}
            containerClassName='w-32 h-32 rounded-xl'
            fallbackClassName='rounded-xl'
            isArray={true}
          />
          <FormTextInput
            form={form}
            fieldName='service_description'
            formLabel='服務描述'
            placeholder='請輸入服務描述'
          />
          <div className='flex justify-end gap-4'>
            <Button type='submit' className='w-full text-black md:w-auto'>
              刊登服務
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default SitterServiceForm;
