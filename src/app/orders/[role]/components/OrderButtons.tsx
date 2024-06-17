'use client';

import { useSearchParams } from 'next/navigation';

import CardIcon from '@/icons/card.svg';
import StarOutlineIcon from '@/icons/star-outline.svg';
import StylusIcon from '@/icons/stylus.svg';
import VisibilityIcon from '@/icons/visibility.svg';
import { OrderResponse, orderStatusSchema, ownerOrderStatusSchema } from '@/schemas/orderSchema';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

const buttonClassName = 'w-full';
const iconClassName = 'mr-1 text-xl text-gray01';
const ghostButtonsClassName = 'flex w-full gap-x-0 md:gap-x-4';

export const OwnerOrderButtons = ({ order }: { order: OrderResponse }) => {
  const { task } = order;
  const { data: status } = ownerOrderStatusSchema.safeParse(useSearchParams().get('status'));

  if (status == ownerOrderStatusSchema.enum.UN_PAID) {
    return (
      <>
        <CancelOrderButton orderId={order.id} taskId={task.id} />
        <Button className={buttonClassName} onClick={() => {}}>
          前往付款
        </Button>
      </>
    );
  }

  if (status == ownerOrderStatusSchema.enum.TRACKING) {
    return (
      <div className='w-full gap-x-4 md:flex'>
        <Button className={cn(buttonClassName, 'md:order-1')} onClick={() => {}}>
          完成任務
        </Button>
        <div className={ghostButtonsClassName}>
          <Button className={buttonClassName} variant={'ghost'} onClick={() => {}}>
            <CardIcon className='mr-1 text-xl' />
            付款結果
          </Button>
          <ServiceReportButton orderId={order.id} />
        </div>
      </div>
    );
  }

  if (status == ownerOrderStatusSchema.enum.COMPLETED) {
    return (
      <div className={ghostButtonsClassName}>
        <ReviewButton order={order} />
        <ServiceReportButton orderId={order.id} />
      </div>
    );
  }

  return null;
};

export const SitterOrderButtons = ({ order }: { order: OrderResponse }) => {
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

const CancelOrderButton = ({ orderId, taskId }: { orderId: string; taskId: string }) => {
  return (
    <Button className={buttonClassName} variant={'outline'} onClick={() => {}}>
      取消訂單
    </Button>
  );
};

const ReviewButton = ({ order, isEdit = false }: { order: OrderResponse; isEdit?: boolean }) => {
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
