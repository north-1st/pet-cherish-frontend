import { ReactNode, useRef, useState } from 'react';

import { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';

import { cn } from '@/lib/utils';

import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const FormChoiceWithTextInput = <T extends FieldValues, K extends FieldPath<T>>({
  form,
  fieldName,
  formLabel,
  optionName,
  placeholder,
  isChecked,
  value,
  isNumber = false,
  className,
  suffix,
}: {
  form: UseFormReturn<T>;
  fieldName: K;
  formLabel?: string;
  optionName: string;
  placeholder?: string;
  isChecked?: boolean;
  value?: string | number;
  isNumber?: boolean;
  className?: string;
  suffix?: ReactNode;
}) => {
  const [checked, setChecked] = useState<boolean>(isChecked || false);
  const valueRef = useRef(value);

  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={() => (
        <FormItem className='text-sm'>
          <FormLabel className='text-xs text-gray02'>{formLabel}</FormLabel>
          <FormField
            control={form.control}
            name={fieldName}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <div className='flex items-center space-x-2'>
                      <Checkbox
                        checked={checked}
                        className='rounded-full'
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setChecked(true);
                            field.onChange(valueRef.current);
                          } else {
                            setChecked(false);
                            field.onChange(null);
                          }
                        }}
                      />
                      <p>{optionName}</p>
                      <Input
                        placeholder={placeholder}
                        defaultValue={valueRef.current}
                        disabled={!checked}
                        onChange={(e) => {
                          field.onChange(isNumber ? Number(e.target.value) : e.target.value);
                        }}
                        className={cn('h-8 w-24 text-sm', className)}
                      />
                      <div className='text-sm'>{suffix}</div>
                    </div>
                  </FormControl>
                </FormItem>
              );
            }}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormChoiceWithTextInput;
