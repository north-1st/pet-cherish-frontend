'use client';

import { useEffect, useState } from 'react';

import { OrderResponse, PaymentStatus } from '@/schemas/orderSchema';
import { getOrderById } from '@/server';

import PaymentResult from '@/components/common/view/PaymentResult';

interface PaymentResultParams {
  payment_id: string; // stripe id
  order_id: string;
  result: PaymentStatus;
}
export default function Page({ params }: { params: PaymentResultParams }) {
  const [data, setData] = useState<OrderResponse>();

  // 取得指定 Order 資料
  const getPageData = async (order_id: string) => {
    const response = await getOrderById(order_id);
    setData(response?.data);
  };

  useEffect(() => {
    if (params.order_id) {
      getPageData(params.order_id);
    }
  }, [params.order_id]);

  return <PaymentResult result={params.result} data={data} />;
}
