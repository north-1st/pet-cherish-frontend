import { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const FormTextInput = <T extends FieldValues, K extends FieldPath<T>>({
  form,
  fieldName,
  formLabel,
  placeholder,
  isNumber = false,
}: {
  form: UseFormReturn<T>;
  fieldName: K;
  formLabel: string;
  placeholder?: string;
  isNumber?: boolean;
}) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-xs text-gray02'>{formLabel}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              value={field.value}
              onChange={(e) => field.onChange(isNumber ? Number(e.target.value) : e.target.value)}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormTextInput;
