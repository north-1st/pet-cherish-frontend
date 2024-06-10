'use client';

import React from 'react';

import { PET_SIZE } from '@/const/pet';
import TAIWAN_DISTRICTS from '@/const/taiwanDistricts';
import { SERVICE_TYPE } from '@/const/task';
import { SearchTasksRequest, searchTasksRequestSchema } from '@/schemas/searchTasksSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
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

import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from '@/components/extension/multi-select';

const TaskForm = () => {
  const form = useForm<SearchTasksRequest>({
    resolver: zodResolver(searchTasksRequestSchema),
    defaultValues: {
      service_city: '',
      service_district_list: [],
      service_type_list: [],
      pet_size_list: [],
    },
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='service_city'
          render={({ field }) => (
            <FormItem>
              <FormLabel>縣市</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  form.resetField('service_district_list');
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='選擇縣市' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {TAIWAN_DISTRICTS.map((city) => (
                    <SelectItem key={city.name} value={city.name}>
                      <div className='flex items-center space-x-2'>
                        <span>{city.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='service_district_list'
          render={({ field }) => (
            <FormItem>
              <FormLabel>區域</FormLabel>
              <MultiSelector onValuesChange={field.onChange} values={field.value}>
                <MultiSelectorTrigger>
                  <MultiSelectorInput placeholder='選擇區域' />
                </MultiSelectorTrigger>
                <MultiSelectorContent>
                  <MultiSelectorList>
                    {TAIWAN_DISTRICTS.find(
                      (city) => city.name === form.getValues('service_city')
                    )?.districts.map((district) => (
                      <MultiSelectorItem key={district.name} value={district.name}>
                        <div className='flex items-center space-x-2'>
                          <span>{district.name}</span>
                        </div>
                      </MultiSelectorItem>
                    ))}
                  </MultiSelectorList>
                </MultiSelectorContent>
              </MultiSelector>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='service_type_list'
          render={({ field }) => (
            <FormItem>
              <FormLabel>服務類型</FormLabel>
              <MultiSelector onValuesChange={field.onChange} values={field.value}>
                <MultiSelectorTrigger>
                  <MultiSelectorInput placeholder='選擇服務' />
                </MultiSelectorTrigger>
                <MultiSelectorContent>
                  <MultiSelectorList>
                    {Object.entries(SERVICE_TYPE).map(([serviceType, description]) => (
                      <MultiSelectorItem key={serviceType} value={description}>
                        <div className='flex items-center space-x-2'>
                          <span>{description}</span>
                        </div>
                      </MultiSelectorItem>
                    ))}
                  </MultiSelectorList>
                </MultiSelectorContent>
              </MultiSelector>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='pet_size_list'
          render={({ field }) => (
            <FormItem>
              <FormLabel>犬型</FormLabel>
              <MultiSelector onValuesChange={field.onChange} values={field.value}>
                <MultiSelectorTrigger>
                  <MultiSelectorInput placeholder='選擇犬型' />
                </MultiSelectorTrigger>
                <MultiSelectorContent>
                  <MultiSelectorList>
                    {Object.entries(PET_SIZE).map(([petSize, description]) => (
                      <MultiSelectorItem key={petSize} value={description}>
                        <div className='flex items-center space-x-2'>
                          <span>{description}</span>
                        </div>
                      </MultiSelectorItem>
                    ))}
                  </MultiSelectorList>
                </MultiSelectorContent>
              </MultiSelector>
            </FormItem>
          )}
        />
        <Button
          className='w-full bg-[#26a69a] text-white hover:bg-[#26a69a] hover:text-white hover:opacity-80'
          type='submit'
          variant='outline'
        >
          登入
        </Button>
      </form>
    </Form>
  );
};

export default TaskForm;
