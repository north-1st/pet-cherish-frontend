'use client';

import { useParams } from 'next/navigation';

import { ORDER_STATUS } from '@/const/order';
import { TASK_STATUS } from '@/const/task';
import {
  OrderResponse,
  SitterOrderResponse,
  orderRoleSchema,
  orderStatusSchema,
} from '@/schemas/orderSchema';

import { cn } from '@/lib/utils';

const OrderCodeStatus = ({
  order,
  className,
}: {
  order: OrderResponse | SitterOrderResponse;
  className?: string;
}) => {
  const { role } = useParams();
  const { task } = order;

  let color;
  let statusText: string = ORDER_STATUS[order.status];

  switch (order.status) {
    case orderStatusSchema.enum.CANCELED:
    case orderStatusSchema.enum.INVALID:
      color = 'text-error';
      if (role == orderRoleSchema.enum.sitter && order.status == orderStatusSchema.enum.INVALID) {
        statusText = '被拒絕';
      }
      break;
    default:
      color = order.status == orderStatusSchema.enum.COMPLETED ? 'text-lightGreen' : 'text-brand01';
      if (role == orderRoleSchema.enum['pet-owner']) {
        statusText = TASK_STATUS[task.status];
      }
  }

  return (
    <div className={cn('mb-3 flex justify-between md:mb-4', className)}>
      <div className={cn('text-sm', className)}>任務編號：{task.id}</div>
      <p className={cn('text-sm font-bold', color)}>{statusText}</p>
    </div>
  );
};

export default OrderCodeStatus;
