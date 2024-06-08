import { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';

import { DateTimePicker } from '@/components/ui/datetime-picker';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const FormDateTimeInput = <T extends FieldValues, K extends FieldPath<T>>({
  form,
  fieldName,
  formLabel,
  description,
}: {
  form: UseFormReturn<T>;
  fieldName: K;
  formLabel: string;
  description?: string;
}) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={fieldName} className='text-xs text-gray02 '>
            {formLabel}
          </FormLabel>
          <FormControl>
            <DateTimePicker
              granularity='minute'
              jsDate={field.value}
              onJsDateChange={field.onChange}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormDateTimeInput;
