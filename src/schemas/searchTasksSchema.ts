import { z } from 'zod';

export const searchTasksRequestSchema = z.object({
  service_city: z.string().min(3, { message: '請選擇縣市' }),
  service_district_list: z.array(z.string()),
  service_type_list: z.array(z.string()),
  pet_size_list: z.array(z.string()),
});

export type SearchTasksRequest = z.infer<typeof searchTasksRequestSchema>;
