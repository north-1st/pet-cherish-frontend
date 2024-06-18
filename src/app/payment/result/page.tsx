'use client';

import { useEffect, useState } from 'react';

import { SERVICE_TYPE } from '@/const/task';
import PayResultIcon from '@/icons/dog.svg';
import { OrderResponse } from '@/schemas/orderSchema';
import { parseCookies } from 'nookies';

import { dateTimeDuration } from '@/lib/utils';

interface PaymentResultParams {
  payment_id: string; // stripe id
  order_id: string;
}
export default function Page({ params }: { params: PaymentResultParams }) {
  const { user_id } = parseCookies();
  const [currentData, setCurrentData] = useState<OrderResponse>();

  // 取得指定 Order 資料
  const getPageData = async (order_id: string) => {
    // const data = await getOrderById(order_id);
    // setCurrentData(data);
  };

  useEffect(() => {
    if (params.order_id) {
      getPageData(params.order_id);
    }
  }, [params.order_id]);

  return (
    <section className='p-5'>
      <div className='m-auto w-[30%] min-w-[500px] rounded-lg border-2 border-gray04 p-5'>
        {}
        <div className='flex flex-col items-center justify-center'>
          {/* <PayResultIcon className='text-brand01 text-[5rem]' /> */}
          <PayResultIcon className='text-[5rem] text-error' />
          <h2 className='my-4 text-2xl font-bold'>訂單付款結果</h2>
          <h3 className='border-b-4 border-error text-2xl font-bold text-error'>失敗</h3>
        </div>

        {/* 訂單資訊 */}
        <section className='py-5'>
          <article className='container'>
            {/* 任務說明 */}
            <ul>
              <li className='m-4 ml-0 flex flex-wrap gap-3'>
                <h3 className='text-gray02'>流水編號</h3>
                {/* <strong>{params.order_id}</strong> */}
                <strong>{2536365535538}</strong>
              </li>
              <li className='m-4 ml-0 flex flex-wrap gap-3'>
                <h3 className='text-gray02'>付款時間</h3>
                {/* <strong>{params.order_id}</strong> */}
                <strong>{'2024/03/24 17:53'}</strong>
              </li>
              <li className='m-4 ml-0 flex flex-wrap gap-3'>
                <h3 className='text-gray02'>訂單編號</h3>
                {/* <strong>{params.order_id}</strong> */}
                <strong>{253535538}</strong>
              </li>
              <li className='m-4 ml-0 flex flex-wrap gap-3'>
                <h3 className='text-gray02'>任務需求</h3>
                <strong>{SERVICE_TYPE['BATH']}</strong>
              </li>
              <li className='m-4 ml-0 flex flex-wrap gap-3'>
                <h3 className='text-gray02'>任務時間</h3>
                {/* <strong>{dateTimeDuration(data.start_at, data.end_at)}</strong> */}
                <strong>{'2024/03/20 17:00 ~ 21:00'}</strong>
              </li>
              <li className='m-4 ml-0 flex flex-wrap gap-3'>
                <h3 className='text-gray02'>任務地區</h3>
                {/* <strong>{data.city} {data.district}</strong> */}
                <strong>
                  {'台北市'} {'內湖區'}
                </strong>
              </li>
            </ul>
            <hr className='my-3 border-t-2 border-gray04' />
            <h5 className='my-3 text-lg font-bold'>小計</h5>
            <ul>
              <li className='m-4 ml-0 flex justify-between'>
                <h3 className='text-gray02'>服務費用 (每30分鐘)</h3>
                <strong>{1000} 元</strong>
              </li>
              <li className='m-4 ml-0 flex justify-between'>
                <h3 className='text-gray02'>服務時間 (每30分鐘)</h3>
                <strong>X {4}</strong>
              </li>
              <li className='m-4 ml-0 flex justify-between'>
                <h3 className='text-gray02'>平台費用 (每次)</h3>
                <strong>{10} 元</strong>
              </li>
            </ul>
            <hr className='my-3 border-t-2 border-gray04' />

            {/* 任務價格 */}
            <div className='flex justify-between'>
              <h3 className='my-3 text-xl font-bold'>$ 應付金額</h3>
              <strong className='text-bold text-2xl text-brand01'>{3000} 元</strong>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}
