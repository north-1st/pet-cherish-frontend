'use client';

import React, { useRef } from 'react';

import { API_BASE_URL } from '@/const/config';
import { PLATFORM_FEE } from '@/const/order';
import { SERVICE_TYPE } from '@/const/task';
import { OrderResponse } from '@/schemas/orderSchema';
import { PaymentRequest } from '@/schemas/orderSchema';
import { payForOder, updateOrderSteps } from '@/service';

import { Button } from '@/components/ui/button';

import TriggerDialog from '@/components/common/button/TriggerDialog';

import { TaskDescription } from './TaskDescription';

interface AcceptSitterDialogProps {
  disabled: boolean;
  targetOrder: OrderResponse;
  triggerChildren: React.ReactNode;
}
export function AcceptSitterDialog({
  disabled,
  targetOrder,
  triggerChildren,
}: AcceptSitterDialogProps) {
  const closeDialogRef = useRef<HTMLButtonElement>(null);

  const handlePay = async () => {
    // (1) Call API: 接受保姆
    // (2) Call API: 前往付款
    const request: PaymentRequest = {
      products: [
        {
          name: SERVICE_TYPE[targetOrder.task.service_type],
          price: targetOrder.task.unit_price,
          quantity: targetOrder.task.total / targetOrder.task.unit_price,
        },
        {
          name: '平台手續費',
          price: PLATFORM_FEE,
          quantity: 1,
        },
      ],
      metadata: {
        order_id: targetOrder.id,
      },
    };
    await updateOrderSteps(
      `${API_BASE_URL}/api/v1/orders/${targetOrder.id}/accept-sitter`,
      targetOrder.task.id
    );
    await payForOder(request);
  };

  return (
    <TriggerDialog
      disabled={disabled}
      closeDialogRef={closeDialogRef}
      triggerChildren={triggerChildren}
      title={`保姆 ${targetOrder.sitter_user.nickname || targetOrder.sitter_user.real_name || ''} 想要接下任務`}
      contentChildren={
        <>
          {/* <TaskDescription data={targetOrder.task} /> */}

          <hr className='my-3 border-t-2 border-gray04' />
          <Button onClick={handlePay}>接受並前往付款</Button>
        </>
      }
    />
  );
}

export default AcceptSitterDialog;
