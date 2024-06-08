import { UploadType } from '@/schemas/upload';
import { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';

import ClientApiManager from '@/lib/clientApiManager';
import { cn } from '@/lib/utils';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const uploadImage = async (file: File, type: UploadType) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('type', type);
  const res = await ClientApiManager.upload('/api/v1/upload/image', formData);
  if (res.success) {
    return res.data;
  }
};

const FormImageInput = <T extends FieldValues, K extends FieldPath<T>>({
  form,
  fieldName,
  uploadType,
  placeholder,
  containerClassName,
  fallbackClassName,
  isArray,
}: {
  form: UseFormReturn<T>;
  fieldName: K;
  uploadType: UploadType;
  placeholder?: string;
  containerClassName?: string;
  fallbackClassName?: string;
  isArray: boolean;
}) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className='flex'>
          <FormLabel>
            <Avatar className={cn('h-[120px] w-[120px] cursor-pointer', containerClassName)}>
              <AvatarImage src={isArray ? field.value?.[0] : field.value} />
              <AvatarFallback className={fallbackClassName}></AvatarFallback>
            </Avatar>
          </FormLabel>
          <FormControl>
            <Input
              type='file'
              className='hidden'
              placeholder={placeholder}
              accept='image/*'
              onChange={(e) => {
                if (!e.target.files) return;
                uploadImage(e.target.files[0], uploadType).then((url) => {
                  field.onChange(isArray ? [url] : url);
                });
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormImageInput;
