import { IconProps } from '@/schemas/iconPropsSchema';

import { cn } from '@/lib/utils';

const CheckIcon = ({ width = 24, height = 24, className }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('fill-lightGreen', className)}
    >
      <path d='M9.52505 18L20.125 7.40005L18.7001 6.00005L9.50005 15.175L5.27505 10.925L3.85005 12.35L9.52505 18ZM9.52505 20.825L1.05005 12.35L5.27505 8.10005L9.52505 12.35L18.6751 3.17505L22.975 7.37505L9.52505 20.825Z' />
    </svg>
  );
};

export default CheckIcon;
