import { FormFieldItem } from '@/schemas/formFieldItem';
import { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';

import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const FormMultiCheckboxes = <T extends FieldValues, K extends FieldPath<T>>({
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
      render={() => (
        <FormItem>
          <FormLabel className='text-xs text-gray02'>{formLabel}</FormLabel>
          <div className='flex flex-wrap items-center gap-y-1'>
            {options.map(({ id, label }) => (
              <FormField
                key={id}
                control={form.control}
                name={fieldName}
                render={({ field }) => {
                  return (
                    <FormItem
                      key={id}
                      className='flex w-20 flex-row items-start space-x-1 space-y-0 py-2'
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(id)}
                          className='rounded-full'
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...(field.value || []), id])
                              : field.onChange(
                                  field.value?.filter((value: string) => value !== id)
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className='font-normal'>{label}</FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormMultiCheckboxes;
