'use client';

import { useEffect, useState } from 'react';

import { OrderResponse, orderStatusSchema, ordersRequestSchema } from '@/schemas/orderSchema';
import { getPetOwnerOrders } from '@/server';

import { formatDateTime } from '@/lib/utils';

import { Button } from '@/components/ui/button';

import Empty from '@/components/common/view/Empty';
import PosterCard from '@/components/common/view/PosterCard';

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
              <Button variant='secondary' className='text-gray01' key='refuse-sitter'>
                拒絕
              </Button>
              <Button className='text-gray01' key='accept-sitter'>
                接受
              </Button>
            </>
          }
        />
      ))}
    </>
  );
};

export default SitterApplication;
