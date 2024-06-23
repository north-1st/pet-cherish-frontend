import {
  orderStatusSchema,
  paymentMethodTypeSchema,
  paymentStatusSchema,
} from '@/schemas/orderSchema';

export const ORDER_STATUS = {
  [orderStatusSchema.enum.PENDING]: '待處理',
  [orderStatusSchema.enum.VALID]: '已成立',
  [orderStatusSchema.enum.TRACKING]: '進行中',
  [orderStatusSchema.enum.COMPLETED]: '已完成',
  [orderStatusSchema.enum.CANCELED]: '已取消',
  [orderStatusSchema.enum.INVALID]: '付款失敗！',
};

export const OWNER_ORDER_STATUS_TAB = {
  [orderStatusSchema.enum.PENDING]: '待處理',
  [orderStatusSchema.enum.VALID]: '待付款',
  [orderStatusSchema.enum.TRACKING]: '進行中',
  [orderStatusSchema.enum.COMPLETED]: '已完成',
  [orderStatusSchema.enum.CANCELED]: '已取消',
  [orderStatusSchema.enum.INVALID]: '未成立',
};

export const SITTER_ORDER_STATUS_TAB = {
  [orderStatusSchema.enum.PENDING]: '待處理',
  [orderStatusSchema.enum.VALID]: '已成立',
  [orderStatusSchema.enum.TRACKING]: '進行中',
  [orderStatusSchema.enum.COMPLETED]: '已完成',
  [orderStatusSchema.enum.CANCELED]: '已取消',
  [orderStatusSchema.enum.INVALID]: '未成立',
};

export const PAYMENT_RESULT = {
  [paymentStatusSchema.enum.SUCCESS]: '付款成功',
  [paymentStatusSchema.enum.FAILURE]: '付款失敗',
};

export const PLATFORM_FEE = 50; // 平台手續費

export const PaymentMethodVueType = {
  [paymentMethodTypeSchema.Enum.card]: '信用卡',
  [paymentMethodTypeSchema.Enum.bank_transfer]: '銀行轉帳',
  [paymentMethodTypeSchema.Enum.alipay]: '支付寶',
  [paymentMethodTypeSchema.Enum.apple_pay]: '蘋果支付',
  [paymentMethodTypeSchema.Enum.google_pay]: 'Google 支付',
  [paymentMethodTypeSchema.Enum.wechat]: '微信支付',
};
