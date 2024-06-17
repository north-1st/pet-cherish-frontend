'use client';

import { useEffect, useState } from 'react';

import {
  OrderStatus, // OwnerOrderPaginationResponse,
  // OwnerOrdersRequest,
  // OwnerOrdersResponse,
  ownerOrderListsResponseSchema,
  ownerOrdersPaginationSchema,
} from '@/schemas/orderSchema';

import ClientApiManager from '@/lib/clientApiManager';

import { Button } from '@/components/ui/button';

import Empty from '@/components/common/view/Empty';
import PosterCard from '@/components/common/view/PosterCard';

// export const getPetOwnerOrders = async (
//   query: OwnerOrdersRequest
// ): Promise<OwnerOrderPaginationResponse> => {
//   const { success, data } = await ClientApiManager.get(
//     `/api/v1/orders/pet-owner?limit=${query.limit}&page=${query.page}&status=${query.status}&task_id=${query.task_id}`
//   );

//   if (success) {
//     return ownerOrderListsResponseSchema.parse(data);
//   }

//   return ownerOrderListsResponseSchema.parse({});
// };

interface SitterApplicationProps {
  task_id: string;
}
const SitterApplication = (props: SitterApplicationProps) => {
  const [applyList, setApplyList] = useState<any[]>([]);
  console.log('🚀 ~ SitterApplication ~ applyList:', applyList);

  // const getData = async (task_id: string) => {
  //   const defaultQuery = ownerOrdersPaginationSchema.parse({
  //     task_id,
  //     status: `${OrderStatus.PENDING},${OrderStatus.INVALID}`,
  //   });
  //   const response = await getPetOwnerOrders(defaultQuery);

  //   setApplyList(response.data);
  // };

  useEffect(() => {
    console.log('SitterApplication: ', props.task_id);
    if (props.task_id) {
      // getData(props.task_id);
    }
  }, [props.task_id]);

  // if (applyList.length === 0) {
  //   return <Empty />;
  // }

  return (
    <>
      {applyList.map((item) => (
        <div key={item.id}>
          <PosterCard
            poster={{
              headIcon: item.sitter_user.avatar || '',
              name: item.sitter_user.nickname || item.sitter_user.real_name || '',
              rating: 0,
            }}
            main={{
              content: item.note,
              dateTime: item.created_at,
            }}
            actions={
              <>
                <Button variant='link' className='text-gray01'>
                  拒絕
                </Button>
                <Button variant='link' className='text-gray01'>
                  接受
                </Button>
              </>
            }
          />
        </div>
      ))}
    </>
  );
};

export default SitterApplication;
