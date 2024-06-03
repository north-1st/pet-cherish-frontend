import { petCharacterSchema, petSizeSchema } from '@/schemas/petSchema';

export const PET_CHARACTER = {
  [petCharacterSchema.enum.IRRITABLE]: '暴躁',
  [petCharacterSchema.enum.CUTE]: '可愛',
  [petCharacterSchema.enum.SMART]: '聰明',
  [petCharacterSchema.enum.FRIENDLY]: '友善',
  [petCharacterSchema.enum.GREEDY]: '貪吃',
  [petCharacterSchema.enum.NAUGHTY]: '調皮',
  [petCharacterSchema.enum.SNOOZE]: '貪睡',
  [petCharacterSchema.enum.ENERGETIC]: '活潑',
};

export const PET_SIZE = {
  [petSizeSchema.enum.L]: '大',
  [petSizeSchema.enum.M]: '中',
  [petSizeSchema.enum.S]: '小',
};

export const HAS_MICROCHIP = {
  true: '有',
  false: '無',
};

export const IS_NEUTERED = {
  true: '是',
  false: '否',
};
