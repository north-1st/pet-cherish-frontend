import { FormFieldItem } from '@/schemas/formFieldItem';
import { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const FormRadioGroup = <T extends FieldValues, K extends FieldPath<T>>({
  form,
  fieldName,
  formLabel,
  options,
}: {
  form: UseFormReturn<T>;
  fieldName: K;
  formLabel: string;
  options: FormFieldItem[];
}) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-xs text-gray02'>{formLabel}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value?.toString()}
              className='flex flex-col space-y-1'
            >
              <div className='flex items-center'>
                {options.map(({ id, label }) => (
                  <FormItem key={id} className='flex w-20 items-center space-x-1 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value={id} />
                    </FormControl>
                    <FormLabel className='font-normal'>{label}</FormLabel>
                  </FormItem>
                ))}
              </div>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormRadioGroup;
