'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { API_BASE_URL } from '@/const/config';
import { OrderResponse, PaymentStatus, paymentStatusSchema } from '@/schemas/orderSchema';
import { getOrderById, updateOrderSteps } from '@/service';

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

  // (1) 取得指定 Order 資料
  // (2) 先更新訂單狀態
  const getPageData = async (order_id: string) => {
    const response = await getOrderById(order_id);
    if (params.result === paymentStatusSchema.Enum.SUCCESS && response?.data) {
      await updateOrderSteps(
        `${API_BASE_URL}/api/v1/orders/${order_id}/paid`,
        response.data.task.id
      );
    }
    setData(response?.data);
  };

  useEffect(() => {
    if (params.order_id) {
      getPageData(params.order_id);
    }
  }, [params.order_id]);

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
