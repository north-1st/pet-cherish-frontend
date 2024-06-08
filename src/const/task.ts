import { serviceTypeSchema, taskPublicSchema } from '@/schemas/taskSchema';

export const SERVICE_TYPE = {
  [serviceTypeSchema.enum.PHOTOGRAPHY]: '專業攝影',
  [serviceTypeSchema.enum.HEALTH_CARE]: '寵物保健',
  [serviceTypeSchema.enum.BATH]: '到府洗澡',
  [serviceTypeSchema.enum.WALKING]: '陪伴散步',
};

export const TASK_PUBLIC = {
  [taskPublicSchema.enum.OPEN]: '上架中',
  [taskPublicSchema.enum.CLOSED]: '已下架',
  [taskPublicSchema.enum.IN_TRANSACTION]: '交易中',
  [taskPublicSchema.enum.DELETED]: '已刪除',
  [taskPublicSchema.enum.COMPLETED]: '已完成',
};

export const TASK_IS_CLOSED = {
  [taskPublicSchema.enum.CLOSED]: '是',
  [taskPublicSchema.enum.OPEN]: '否',
};

export const ACCEPT_SITTER_CONTACT = {
  true: '是',
  false: '否',
};
