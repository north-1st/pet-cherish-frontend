import { baseURL } from '@/const/const';
import { ApiResponse } from '@/schemas/apiResponse';
import { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('type', 'PET');
  const res = await fetch(baseURL + '/api/v1/upload/image', {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) {
    throw new Error('Failed to upload image');
  }
  const data: ApiResponse = await res.json();
  if (data.status == true) {
    return data.data;
  } else {
    throw new Error(data.message);
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
        <FormItem>
          <FormLabel>
            <Avatar className='h-[120px] w-[120px] cursor-pointer'>
              <AvatarImage src={field.value?.[0]} />
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
                  field.onChange([url]);
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
