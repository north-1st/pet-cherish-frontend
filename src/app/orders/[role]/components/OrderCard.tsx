'use client';

import { useRouter } from 'next/navigation';

import { SERVICE_TYPE } from '@/const/task';
import { OrderResponse, SitterOrderResponse } from '@/schemas/orderSchema';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

import { OwnerOrderButtons, SitterOrderButtons } from './OrderButtons';
import OrderCodeStatus from './OrderCodeStatus';

const OrderCard = ({
  order,
  isOwner,
}: {
  order: OrderResponse | SitterOrderResponse;
  isOwner: boolean;
}) => {
  const router = useRouter();
  const { task } = order;

  return (
    <div className='cursor-pointer' onClick={() => router.push(`/tasks/${task.id}`)}>
      <div className='border-b-2 border-gray04 p-4 text-gray02 md:p-6'>
        <OrderCodeStatus className='xl:hidden' order={order} />
        <div className='flex gap-x-3 md:gap-x-6'>
          <Avatar className='aspect-video h-[72px] w-auto rounded-xl md:h-[140px]'>
            <AvatarImage src={task.cover ?? ''} />
            <AvatarFallback className='rounded-xl'></AvatarFallback>
          </Avatar>
          <div className='my-auto w-full'>
            <OrderCodeStatus className='hidden xl:flex' order={order} />
            <div className='flex items-end justify-between'>
              <div className='flex flex-col justify-center gap-y-1 md:gap-y-2'>
                <h3 className='text-lg font-bold text-gray01'>{task.title}</h3>
                <Badge className='mr-auto border-gray02' variant='outline'>
                  {SERVICE_TYPE[task.service_type]}
                </Badge>
              </div>
              <div className='hidden gap-x-3 md:flex md:gap-x-4'>
                {isOwner ? (
                  <OwnerOrderButtons order={order as OrderResponse} />
                ) : (
                  <SitterOrderButtons order={order as SitterOrderResponse} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='mt-4 flex gap-x-3 md:hidden'>
          {isOwner ? (
            <OwnerOrderButtons order={order as OrderResponse} />
          ) : (
            <SitterOrderButtons order={order as SitterOrderResponse} />
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
