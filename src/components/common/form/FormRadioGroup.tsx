import { FormFieldItem, FormFieldRadio } from '@/schemas/formFieldItem';
import { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';

import { cn } from '@/lib/utils';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const FormRadioGroup = <T extends FieldValues, K extends FieldPath<T>>({
  form,
  fieldName,
  formLabel,
  options,
  isVertical = false,
  isBoolean,
}: {
  form: UseFormReturn<T>;
  fieldName: K;
  formLabel: string;
  options: FormFieldItem[] | FormFieldRadio[];
  isVertical?: boolean;
  isBoolean: boolean;
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
              onValueChange={async (value) => {
                if (isBoolean) {
                  field.onChange(value == 'true');
                  return;
                }
                field.onChange(value);
              }}
              defaultValue={field.value?.toString()}
            >
              <div className={cn('flex flex-wrap gap-y-4', isVertical && 'flex-col')}>
                {options.map(({ id, label }) => (
                  <FormItem
                    key={id?.toString()}
                    className='flex min-w-20 items-center space-x-1 space-y-0'
                  >
                    <FormControl>
                      <RadioGroupItem value={id?.toString()} />
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
