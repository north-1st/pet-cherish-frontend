import { z } from 'zod';

export const searchSittersSchema = z.object({
  service_city: z.string(),
  service_district_list: z.array(z.string()),
  // certificate_list: z.array(z.string()),
  service_type_list: z.array(z.string()),
});

export type SearchSittersRequest = z.infer<typeof searchSittersSchema>;
