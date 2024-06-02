import { IconProps } from '@/schemas/iconPropsSchema';

import { cn } from '@/lib/utils';

const AddIcon = ({ width, height, className }: IconProps) => {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('fill-gray01', className)}
    >
      <path d='M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z' />
    </svg>
  );
};

export default AddIcon;
