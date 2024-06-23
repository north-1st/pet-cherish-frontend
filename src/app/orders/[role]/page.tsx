import { OWNER_ORDER_STATUS_TAB, SITTER_ORDER_STATUS_TAB } from '@/const/order';
import { OrderRole, orderRoleSchema } from '@/schemas/orderSchema';

import ServerApiManager from '@/lib/serverApiManager';

import OrderCard from './components/OrderCard';
import OrderTab from './components/OrderTab';
import { fakeData } from './fakeData';

interface OrdersSearchParams {
  status: string;
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { role: OrderRole };
  searchParams: OrdersSearchParams;
}) {
  const { role } = params;
  const isOwner = role == orderRoleSchema.enum['pet-owner'];

  await ServerApiManager.get(
    `/api/v1/orders/${role}?limit=10&page=1&status=${searchParams.status}`,
    {
      cache: 'no-store',
    }
  );

  return (
    <main className='container'>
      <h3 className='mb-3 mt-4 text-3xl font-bold md:my-20 md:mb-[42px] md:mt-[82px]'>
        {isOwner ? '飼主' : '保母'}訂單
      </h3>
      <ul className='no-scrollbar flex gap-x-2 overflow-scroll border-b'>
        {(isOwner
          ? Object.entries(OWNER_ORDER_STATUS_TAB)
          : Object.entries(SITTER_ORDER_STATUS_TAB)
        ).map(([status, text]) => (
          <li key={status}>
            <OrderTab status={status} text={text} />
          </li>
        ))}
      </ul>
      {fakeData.map((order) => (
        <OrderCard key={order.id} order={order} isOwner={isOwner} />
      ))}
    </main>
  );
}
