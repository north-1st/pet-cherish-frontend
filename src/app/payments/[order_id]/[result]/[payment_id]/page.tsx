'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import {
  OrderResponse,
  PaymentStatus,
  UpdatePaymentStatusOrderRequest,
  paymentStatusSchema,
  stripePaymentStatusSchema,
} from '@/schemas/orderSchema';
import { getOrderById, paymentComplete, updatePaymentStatusOrder } from '@/service';

import { Button } from '@/components/ui/button';

import PaymentResult from '@/components/common/view/PaymentResult';

interface PaymentResultParams {
  payment_id: string; // stripe id
  order_id: string;
  result: PaymentStatus;
}
export default function Page({ params }: { params: PaymentResultParams }) {
  const router = useRouter();
  const [data, setData] = useState<OrderResponse>();

  // (1) Call Stripe Complete API
  // (2) 更新訂單狀態
  // (3) 取得指定 Order 資料
  const getPageData = async (order_id: string, payment_id: string) => {
    const stripeResponse = await paymentComplete(payment_id); // 看這支能不能給我 task_id
    if (stripeResponse?.data) {
      const { metadata, payment_status, payment_intent } = stripeResponse.data.retrieve;
      const request: UpdatePaymentStatusOrderRequest = {
        task_id: `${metadata.task_id}`,
        payment_at: payment_intent.created,
        payment_status:
          payment_status === stripePaymentStatusSchema.Enum.paid
            ? paymentStatusSchema.Enum.SUCCESS
            : paymentStatusSchema.Enum.FAILURE,
        payment_type: payment_intent.payment_method.type,
      };
      await updatePaymentStatusOrder(order_id, request);
    }

    const response = await getOrderById(order_id);
    setData(response?.data);
  };

  useEffect(() => {
    if ((params.order_id, params.payment_id)) {
      getPageData(params.order_id, params.payment_id);
    }
  }, [params.order_id, params.payment_id]);

  return (
    <>
      <PaymentResult result={params.result} data={data} />
      <aside className='container mb-8 flex justify-center gap-5'>
        <Button onClick={() => router.push(`/tasks/${data?.task.id || ''}`)}>返回任務詳情頁</Button>
        <Button variant={'dark'} onClick={() => router.push(`/orders/pet-owner`)}>
          返回訂單追蹤頁
        </Button>
      </aside>
    </>
  );
}
