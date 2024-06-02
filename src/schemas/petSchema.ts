import { z } from 'zod';

export const petSizeSchema = z.enum(['S', 'M', 'L']);

export const petCharacterSchema = z.enum([
  'IRRITABLE',
  'CUTE',
  'SMART',
  'FRIENDLY',
  'GREEDY',
  'NAUGHTY',
  'SNOOZE',
  'ENERGETIC',
]);

export const petRequestSchema = z.object({
  name: z.string(),
  breed: z.string(),
  size: petSizeSchema,
  character_list: z.array(petCharacterSchema).min(1).max(3),
  has_microchipped: z.boolean(),
  is_neutered: z.boolean(),
  health_description: z.string(),
  avatar_list: z.array(z.string().url()).min(1).max(3),
});

export const petResponseSchema = petRequestSchema.extend({
  id: z.string(),
});

export const petListResponseSchema = z.array(petResponseSchema);

export type PetSize = z.infer<typeof petSizeSchema>;
export type PetCharacter = z.infer<typeof petCharacterSchema>;

export type PetRequest = z.infer<typeof petRequestSchema>;
export type PetResponse = z.infer<typeof petResponseSchema>;
