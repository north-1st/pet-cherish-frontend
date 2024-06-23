'use client';

import { ReactNode, useEffect } from 'react';

import { notFound, redirect, useSearchParams } from 'next/navigation';

import { OWNER_ORDER_STATUS_TAB, SITTER_ORDER_STATUS_TAB } from '@/const/order';
import { OrderRole, orderRoleSchema, orderStatusSchema } from '@/schemas/orderSchema';

export default function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { role: OrderRole };
}) {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');

  useEffect(() => {
    if (
      params.role == orderRoleSchema.enum.sitter &&
      !Object.keys(SITTER_ORDER_STATUS_TAB).includes(status ?? '')
    ) {
      redirect(`/orders/${orderRoleSchema.enum.sitter}?status=` + orderStatusSchema.enum.PENDING);
    } else if (
      params.role == orderRoleSchema.enum['pet-owner'] &&
      !Object.keys(OWNER_ORDER_STATUS_TAB).includes(status ?? '')
    ) {
      redirect(
        `/orders/${orderRoleSchema.enum['pet-owner']}?status=` + orderStatusSchema.enum.PENDING
      );
    }
    if (!orderRoleSchema.options.includes(params.role)) {
      notFound();
    }
  }, [status, params.role]);

  return <>{children}</>;
}
