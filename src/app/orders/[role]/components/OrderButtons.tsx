'use client';

import { useRef } from 'react';

import { useSearchParams } from 'next/navigation';

import { cancelOrder, completeOrder, paidForOrder } from '@/actions/orderAction';
import CardIcon from '@/icons/card.svg';
import StarOutlineIcon from '@/icons/star-outline.svg';
import StylusIcon from '@/icons/stylus.svg';
import VisibilityIcon from '@/icons/visibility.svg';
import { OrderResponse, SitterOrderResponse, orderStatusSchema } from '@/schemas/orderSchema';

import showToast from '@/lib/showToast';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

import PaymentResult from '@/components/common/view/PaymentResult';

const buttonClassName = 'w-full';
const iconClassName = 'mr-1 text-xl text-gray01';
const ghostButtonsClassName = 'flex w-full gap-x-0 md:gap-x-4';

export const OwnerOrderButtons = ({ order }: { order: OrderResponse }) => {
  const {
    task: { id: task_id },
    id: orderId,
  } = order;
  const { data: status } = orderStatusSchema.safeParse(useSearchParams().get('status'));
  const ref = useRef<HTMLButtonElement>(null);

  if (status == orderStatusSchema.enum.VALID) {
    return (
      <>
        <CancelOrderButton orderId={order.id} taskId={task_id} />
        <Button
          className={buttonClassName}
          onClick={async () => {
            const { success, message } = await paidForOrder(orderId, task_id);
            showToast({
              success,
              successTitle: '訂單已付款',
              errorTitle: '訂單付款失敗',
              message,
            });
          }}
        >
          前往付款
        </Button>
      </>
    );
  }

  if (status == orderStatusSchema.enum.TRACKING) {
    return (
      <div className='w-full gap-x-4 md:flex'>
        <Button
          className={cn(buttonClassName, 'md:order-1')}
          onClick={async () => {
            const { success, message } = await completeOrder(orderId, task_id);
            showToast({
              success,
              successTitle: '訂單已完成',
              errorTitle: '訂單完成失敗',
              message,
            });
          }}
        >
          完成任務
        </Button>
        <div className={ghostButtonsClassName}>
          <Dialog>
            <DialogTrigger asChild ref={ref}>
              <Button className={buttonClassName} variant={'ghost'}>
                <CardIcon className='mr-1 text-xl' />
                付款結果
              </Button>
            </DialogTrigger>
            <DialogContent className=''>
              <div className='bg-white'>
                <PaymentResult result='SUCCESS' data={order} />
              </div>
            </DialogContent>
          </Dialog>

          <ServiceReportButton orderId={order.id} />
        </div>
      </div>
    );
  }

  if (status == orderStatusSchema.enum.COMPLETED) {
    return (
      <div className={ghostButtonsClassName}>
        <ReviewButton order={order} />
        <ServiceReportButton orderId={order.id} />
      </div>
    );
  }

  return null;
};

export const SitterOrderButtons = ({ order }: { order: SitterOrderResponse }) => {
  const { task } = order;
  const { data: status } = orderStatusSchema.safeParse(useSearchParams().get('status'));

  if (status == orderStatusSchema.enum.VALID) {
    return <CancelOrderButton orderId={order.id} taskId={task.id} />;
  }

  if (status == orderStatusSchema.enum.TRACKING) {
    return <ServiceReportButton orderId={order.id} isEdit={true} />;
  }

  if (status == orderStatusSchema.enum.COMPLETED) {
    return (
      <div className={ghostButtonsClassName}>
        <ReviewButton order={order} />
        <ServiceReportButton orderId={order.id} />
      </div>
    );
  }
};

const ServiceReportButton = ({
  orderId,
  isEdit = false,
}: {
  orderId: string;
  isEdit?: boolean;
}) => {
  if (isEdit) {
    return (
      <Button className={buttonClassName} variant={'default'} onClick={() => {}}>
        撰寫報告
      </Button>
    );
  }

  return (
    <Button className={buttonClassName} variant={'ghost'} onClick={() => {}}>
      <VisibilityIcon className={iconClassName} />
      服務報告
    </Button>
  );
};

const CancelOrderButton = ({ orderId, taskId: task_id }: { orderId: string; taskId: string }) => {
  return (
    <Button
      className={buttonClassName}
      variant={'outline'}
      onClick={async () => {
        const { success, message } = await cancelOrder(orderId, task_id);
        showToast({
          success,
          successTitle: '訂單已取消',
          errorTitle: '訂單取消失敗',
          message,
        });
      }}
    >
      取消訂單
    </Button>
  );
};

const ReviewButton = ({
  order,
  isEdit = false,
}: {
  order: OrderResponse | SitterOrderResponse;
  isEdit?: boolean;
}) => {
  const {
    id: orderId,
    task: { id: taskId },
  } = order;

  if (isEdit) {
    return (
      <Button className={buttonClassName} variant={'ghost'} onClick={() => {}}>
        <StylusIcon className={iconClassName} />
        撰寫評價
      </Button>
    );
  }

  return (
    <Button className={buttonClassName} variant={'ghost'} onClick={() => {}}>
      <StarOutlineIcon className={iconClassName} />
      查看評價
    </Button>
  );
};
