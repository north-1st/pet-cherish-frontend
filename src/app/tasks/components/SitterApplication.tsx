'use client';

import { useEffect, useState } from 'react';

import { ORDER_STATUS } from '@/const/order';
import { OrderResponse, orderStatusSchema, ordersRequestSchema } from '@/schemas/orderSchema';
import { getPetOwnerOrders } from '@/server';

import { formatDateTime } from '@/lib/utils';

import { Button } from '@/components/ui/button';

import Empty from '@/components/common/view/Empty';
import PosterCard from '@/components/common/view/PosterCard';

import AcceptSitterDialog from './AcceptSitterDialog';

interface SitterApplicationProps {
  task_id: string;
}
const SitterApplication = (props: SitterApplicationProps) => {
  const [applyList, setApplyList] = useState<OrderResponse[]>([]);

  const getData = async (task_id: string) => {
    const defaultQuery = ordersRequestSchema.parse({
      task_id,
      status: `${orderStatusSchema.enum.PENDING},${orderStatusSchema.enum.INVALID}`,
    });
    const response = await getPetOwnerOrders(defaultQuery);

    setApplyList(response.data);
  };

  useEffect(() => {
    console.log('SitterApplication: ', props.task_id);
    if (props.task_id) {
      getData(props.task_id);
    }
  }, [props.task_id]);

  if (applyList.length === 0) {
    return <Empty />;
  }

  return (
    <>
      {applyList.map((item) => (
        <PosterCard
          key={item.id}
          poster={{
            headIcon: item.sitter_user.avatar || '',
            name: item.sitter_user.nickname || item.sitter_user.real_name || '',
            rating: item.sitter_user.average_rating || 0,
          }}
          main={{
            content: item.note,
            dateTime: formatDateTime(item.created_at) || '',
          }}
          actions={
            <>
              {item.status === orderStatusSchema.Enum.PENDING && (
                <>
                  <Button variant='outline' className='text-gray01' key='refuse-sitter'>
                    拒絕保姆
                  </Button>
                  <AcceptSitterDialog
                    disabled={item.status !== orderStatusSchema.Enum.PENDING}
                    targetOrder={applyList[0]}
                    triggerChildren={
                      <Button className='text-gray01' key='accept-sitter'>
                        接受接單
                      </Button>
                    }
                  />
                </>
              )}
              {item.status === orderStatusSchema.Enum.INVALID && (
                <Button disabled={true} variant='secondary' className='w-[200px]'>
                  已拒絕保姆
                </Button>
              )}
              {item.status === orderStatusSchema.Enum.VALID && (
                <Button disabled={true} variant='secondary' className='w-[200px]'>
                  已接受保姆
                </Button>
              )}
            </>
          }
        />
      ))}
    </>
  );
};

export default SitterApplication;
