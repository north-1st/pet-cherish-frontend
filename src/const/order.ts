import { orderStatusSchema, ownerOrderStatusSchema } from '@/schemas/orderSchema';

export const ORDER_STATUS = {
  [orderStatusSchema.enum.PENDING]: '待處理',
  [orderStatusSchema.enum.VALID]: '已成立',
  [orderStatusSchema.enum.TRACKING]: '進行中',
  [orderStatusSchema.enum.COMPLETED]: '已完成',
  [orderStatusSchema.enum.CANCELED]: '已取消',
  [orderStatusSchema.enum.INVALID]: '付款失敗！',
};

export const OWNER_ORDER_STATUS_TAB = {
  [ownerOrderStatusSchema.enum.PENDING]: '待處理',
  [ownerOrderStatusSchema.enum.UN_PAID]: '待付款',
  [ownerOrderStatusSchema.enum.TRACKING]: '進行中',
  [ownerOrderStatusSchema.enum.COMPLETED]: '已完成',
  [ownerOrderStatusSchema.enum.CANCELED]: '已取消',
  [ownerOrderStatusSchema.enum.INVALID]: '未成立',
};

export const SITTER_ORDER_STATUS_TAB = {
  [orderStatusSchema.enum.PENDING]: '待處理',
  [orderStatusSchema.enum.VALID]: '已成立',
  [orderStatusSchema.enum.TRACKING]: '進行中',
  [orderStatusSchema.enum.COMPLETED]: '已完成',
  [orderStatusSchema.enum.CANCELED]: '已取消',
  [orderStatusSchema.enum.INVALID]: '未成立',
};
