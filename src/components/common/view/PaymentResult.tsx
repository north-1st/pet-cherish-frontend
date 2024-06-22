import { PAYMENT_RESULT, PLATFORM_FEE } from '@/const/order';
import { SERVICE_TYPE } from '@/const/task';
import PayResultIcon from '@/icons/dog.svg';
import { OrderResponse, PaymentStatus, paymentStatusSchema } from '@/schemas/orderSchema';

import { dateTimeDuration, formatDateTime } from '@/lib/utils';

import Empty from './Empty';

export interface PaymentResultPorps {
  result: PaymentStatus;
  data?: OrderResponse;
}
export default function PaymentResult({ result, data }: PaymentResultPorps) {
  const isSuccess = result === paymentStatusSchema.Enum.SUCCESS;

  if (!data) {
    return <Empty />;
  }

  return (
    <section className='p-5'>
      <div className='m-auto w-[30%] min-w-[500px] rounded-lg border-2 border-gray04 p-5'>
        {/* 付款結果 */}
        <div className='flex flex-col items-center justify-center'>
          <PayResultIcon className={`text-[5rem] ${isSuccess ? 'text-brand01' : 'text-error'}`} />
          <h2 className='my-4 text-2xl font-bold'>訂單付款結果</h2>
          <h3
            className={`border-b-4 ${isSuccess ? 'border-brand01 text-brand01' : 'border-error text-error'} text-2xl font-bold `}
          >
            {PAYMENT_RESULT[result]}
          </h3>
        </div>

        {/* 訂單資訊 */}
        <section className='py-5'>
          <article className='container'>
            <ul>
              {/* <li className='m-4 ml-0 flex flex-wrap gap-3'>
                <h3 className='text-gray02'>流水編號</h3>
                <strong>{data.payment_id}</strong>
              </li> */}
              <li className='m-4 ml-0 flex flex-wrap gap-3'>
                <h3 className='text-gray02'>付款時間</h3>
                <strong>{data.payment_at && formatDateTime(new Date(data.payment_at))}</strong>
              </li>
              <li className='m-4 ml-0 flex flex-wrap gap-3'>
                <h3 className='text-gray02'>訂單編號</h3>
                <strong>{data.task.id}</strong>
              </li>
              <li className='m-4 ml-0 flex flex-wrap gap-3'>
                <h3 className='text-gray02'>任務內容</h3>
                <strong>{data.task.title}</strong>
              </li>
              <li className='m-4 ml-0 flex flex-wrap gap-3'>
                <h3 className='text-gray02'>任務需求</h3>
                <strong>{SERVICE_TYPE[data.task.service_type]}</strong>
              </li>
              <li className='m-4 ml-0 flex flex-wrap gap-3'>
                <h3 className='text-gray02'>任務時間</h3>
                <strong>{dateTimeDuration(data.task.start_at, data.task.end_at)}</strong>
              </li>
              <li className='m-4 ml-0 flex flex-wrap gap-3'>
                <h3 className='text-gray02'>任務地區</h3>
                <strong>
                  {data.task.city} {data.task.district}
                </strong>
              </li>
            </ul>
            <hr className='my-3 border-t-2 border-gray04' />
            <h5 className='my-3 text-lg font-bold'>小計</h5>
            <ul>
              <li className='m-4 ml-0 flex justify-between'>
                <h3 className='text-gray02'>服務費用 (每30分鐘)</h3>
                <strong>{data.task.unit_price} 元</strong>
              </li>
              <li className='m-4 ml-0 flex justify-between'>
                <h3 className='text-gray02'>服務時間 (每30分鐘)</h3>
                <strong>X {Math.round(data.task.total / data.task.unit_price)}</strong>
              </li>
              <li className='m-4 ml-0 flex justify-between'>
                <h3 className='text-gray02'>平台費用 (每次)</h3>
                <strong>{PLATFORM_FEE} 元</strong>
              </li>
            </ul>
            <hr className='my-3 border-t-2 border-gray04' />

            {/* 訂單價格 */}
            <div className='flex items-center justify-between'>
              <h3 className='my-3 text-xl font-bold'>$ 應付金額</h3>
              <strong className='text-bold text-2xl text-brand01'>
                {data.task.total + PLATFORM_FEE} 元
              </strong>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}