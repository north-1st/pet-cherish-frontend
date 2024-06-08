import { z } from 'zod';

export const urlSchema = z.union([z.string().url(), z.null()]);

export const uploadTypeSchema = z.enum(['PROFILE', 'PET', 'TASK', 'SITTER']);

export type Url = z.infer<typeof urlSchema>;
export type UploadType = z.infer<typeof uploadTypeSchema>;
