import { IconProps } from '@/schemas/iconPropsSchema';

import { cn } from '@/lib/utils';

const FemaleIcon = ({ width, height, className }: IconProps) => {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('fill-brand01', className)}
    >
      <path d='M11 21V19H9V17H11V14.9C9.68333 14.6667 8.60417 14.0375 7.7625 13.0125C6.92083 11.9875 6.5 10.8 6.5 9.45C6.5 7.93333 7.0375 6.64583 8.1125 5.5875C9.1875 4.52917 10.4833 4 12 4C13.5167 4 14.8125 4.52917 15.8875 5.5875C16.9625 6.64583 17.5 7.93333 17.5 9.45C17.5 10.8 17.0792 11.9875 16.2375 13.0125C15.3958 14.0375 14.3167 14.6667 13 14.9V17H15V19H13V21H11ZM12 13C12.9667 13 13.7917 12.6583 14.475 11.975C15.1583 11.2917 15.5 10.4667 15.5 9.5C15.5 8.53333 15.1583 7.70833 14.475 7.025C13.7917 6.34167 12.9667 6 12 6C11.0333 6 10.2083 6.34167 9.525 7.025C8.84167 7.70833 8.5 8.53333 8.5 9.5C8.5 10.4667 8.84167 11.2917 9.525 11.975C10.2083 12.6583 11.0333 13 12 13Z' />
    </svg>
  );
};

export default FemaleIcon;
