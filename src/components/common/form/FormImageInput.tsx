import { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';

import ClientApiManager from '@/lib/clientApiManager';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('type', 'PET');
  const res = await ClientApiManager.upload('/api/v1/upload/image', formData);
  if (res.success) {
    return res.data;
  }
};

const FormImageInput = <T extends FieldValues, K extends FieldPath<T>>({
  form,
  fieldName,
  placeholder,
}: {
  form: UseFormReturn<T>;
  fieldName: K;
  placeholder?: string;
}) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className='flex'>
          <FormLabel>
            <Avatar className='h-[120px] w-[120px] cursor-pointer'>
              <AvatarImage src={typeof field.value === 'string' ? field.value : field.value?.[0]} />
              <AvatarFallback></AvatarFallback>
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
                uploadImage(e.target.files[0]).then((url) => {
                  field.onChange(typeof field.value === 'string' ? url : [url]);
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
