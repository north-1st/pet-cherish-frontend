import { IconProps } from '@/schemas/iconPropsSchema';

import { cn } from '@/lib/utils';

const Face = ({ width = 24, height = 24, className }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('fill-gray01', className)}
    >
      <mask id='mask0_7220_8371' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'>
        <rect width='24' height='24' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_7220_8371)'>
        <path
          d='M9 16.25C8.65 16.25 8.35417 16.1292 8.1125 15.8875C7.87083 15.6458 7.75 15.35 7.75 15C7.75 14.65 7.87083 14.3542 8.1125 14.1125C8.35417 13.8708 8.65 13.75 9 13.75C9.35 13.75 9.64583 13.8708 9.8875 14.1125C10.1292 14.3542 10.25 14.65 10.25 15C10.25 15.35 10.1292 15.6458 9.8875 15.8875C9.64583 16.1292 9.35 16.25 9 16.25ZM15 16.25C14.65 16.25 14.3542 16.1292 14.1125 15.8875C13.8708 15.6458 13.75 15.35 13.75 15C13.75 14.65 13.8708 14.3542 14.1125 14.1125C14.3542 13.8708 14.65 13.75 15 13.75C15.35 13.75 15.6458 13.8708 15.8875 14.1125C16.1292 14.3542 16.25 14.65 16.25 15C16.25 15.35 16.1292 15.6458 15.8875 15.8875C15.6458 16.1292 15.35 16.25 15 16.25ZM12 22C14.2333 22 16.125 21.225 17.675 19.675C19.225 18.125 20 16.2333 20 14C20 13.6 19.975 13.2125 19.925 12.8375C19.875 12.4625 19.7833 12.1 19.65 11.75C19.3 11.8333 18.95 11.8958 18.6 11.9375C18.25 11.9792 17.8833 12 17.5 12C15.9833 12 14.55 11.675 13.2 11.025C11.85 10.375 10.7 9.46667 9.75 8.3C9.21667 9.6 8.45417 10.7292 7.4625 11.6875C6.47083 12.6458 5.31667 13.3667 4 13.85V14C4 16.2333 4.775 18.125 6.325 19.675C7.875 21.225 9.76667 22 12 22ZM12 24C10.6167 24 9.31667 23.7375 8.1 23.2125C6.88333 22.6875 5.825 21.975 4.925 21.075C4.025 20.175 3.3125 19.1167 2.7875 17.9C2.2625 16.6833 2 15.3833 2 14C2 13.5167 2.03333 13.0375 2.1 12.5625C2.16667 12.0875 2.26667 11.6333 2.4 11.2C1.68333 10.7667 1.10417 10.1792 0.6625 9.4375C0.220833 8.69583 0 7.875 0 6.975C0 5.59167 0.483333 4.41667 1.45 3.45C2.41667 2.48333 3.59167 2 4.975 2C5.85833 2 6.67083 2.2125 7.4125 2.6375C8.15417 3.0625 8.75 3.65 9.2 4.4C9.63333 4.26667 10.0875 4.16667 10.5625 4.1C11.0375 4.03333 11.5167 4 12 4C13.3833 4 14.6833 4.2625 15.9 4.7875C17.1167 5.3125 18.175 6.025 19.075 6.925C19.975 7.825 20.6875 8.88333 21.2125 10.1C21.7375 11.3167 22 12.6167 22 14C22 15.3833 21.7375 16.6833 21.2125 17.9C20.6875 19.1167 19.975 20.175 19.075 21.075C18.175 21.975 17.1167 22.6875 15.9 23.2125C14.6833 23.7375 13.3833 24 12 24Z'
          fill='#3E3E3E'
        />
      </g>
    </svg>
  );
};

export default Face;
