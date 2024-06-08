import { FormFieldItem } from '@/schemas/formFieldItem';
import { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const FormSelect = <T extends FieldValues, K extends FieldPath<T>>({
  form,
  fieldName,
  formLabel,
  options,
  placeholder,
  onChange,
  description,
}: {
  form: UseFormReturn<T>;
  fieldName: K;
  formLabel: string;
  options: FormFieldItem[];
  placeholder?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void;
  description?: string;
}) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-xs text-gray02'>{formLabel}</FormLabel>
          <Select
            onValueChange={(value) => {
              onChange?.(value);
              field.onChange(value);
            }}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map(({ id, label }) => (
                <SelectItem key={id} value={id}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormSelect;
