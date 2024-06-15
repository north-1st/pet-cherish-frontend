import { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textArea';

const FormTextArea = <T extends FieldValues, K extends FieldPath<T>>({
  form,
  fieldName,
  formLabel,
  placeholder,
}: {
  form: UseFormReturn<T>;
  fieldName: K;
  formLabel: string;
  placeholder?: string;
}) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-xs text-gray02'>{formLabel}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormTextArea;
