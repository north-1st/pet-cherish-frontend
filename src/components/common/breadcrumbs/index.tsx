import Link from 'next/link';

import ArrowRightIcon from '@/icons/keyboard_double_arrow_right.svg';

export interface BreadcrumbsProps {
  label: string;
  href: string;
}
const Breadcrumbs = ({ navList }: { navList: BreadcrumbsProps[] }) => {
  return (
    <nav className='container p-3'>
      <ul className='flex items-center gap-2'>
        <li>
          <Link className='align-top text-gray03 hover:text-alert' href='/'>
            首頁
          </Link>
        </li>
        {navList.map((item, index) => (
          <li key={item.label}>
            <ArrowRightIcon className='mr-2 inline-block text-gray03' />
            <Link
              className={`align-top ${index + 1 < navList.length ? 'text-gray03' : 'text-gray02'} hover:text-alert`}
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
