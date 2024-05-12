interface QuoteIconProps {
  width: string;
  height: string;
  className?: string;
  color: string;
}

const QuoteIcon = ({ width, height, className, color }: QuoteIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 17 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M1.7 12L4 8C2.9 8 1.95833 7.60833 1.175 6.825C0.391667 6.04167 0 5.1 0 4C0 2.9 0.391667 1.95833 1.175 1.175C1.95833 0.391667 2.9 0 4 0C5.1 0 6.04167 0.391667 6.825 1.175C7.60833 1.95833 8 2.9 8 4C8 4.38333 7.95417 4.7375 7.8625 5.0625C7.77083 5.3875 7.63333 5.7 7.45 6L4 12H1.7ZM10.7 12L13 8C11.9 8 10.9583 7.60833 10.175 6.825C9.39167 6.04167 9 5.1 9 4C9 2.9 9.39167 1.95833 10.175 1.175C10.9583 0.391667 11.9 0 13 0C14.1 0 15.0417 0.391667 15.825 1.175C16.6083 1.95833 17 2.9 17 4C17 4.38333 16.9542 4.7375 16.8625 5.0625C16.7708 5.3875 16.6333 5.7 16.45 6L13 12H10.7Z'
        fill={color}
      />
    </svg>
  );
};

export default QuoteIcon;
