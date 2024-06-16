import { PET_SIZE } from '@/const/pet';
import { SERVICE_TYPE } from '@/const/task';
import { SitterResponse } from '@/schemas/sitterSchema';

import { Badge } from '@/components/ui/badge';

const SitterServiceContent = ({ sitter }: { sitter: SitterResponse }) => {
  return (
    <article className='text-gray01'>
      <h3 className='mb-2 text-lg font-bold'>服務內容</h3>
      <ul className='space-y-2'>
        <Service type={SERVICE_TYPE.PHOTOGRAPHY} price={sitter.photography_price} />
        <Service type={SERVICE_TYPE.HEALTH_CARE} price={sitter.health_care_price} />
        <Service type={SERVICE_TYPE.BATH} price={sitter.bath_price} />
        <Service type={SERVICE_TYPE.WALKING} price={sitter.walking_price} />
        <li className='flex gap-x-4'>
          <p className='text-sm'>服務縣市</p>
          {sitter.service_city ? (
            <Badge className='py-1 text-gray02' variant='default'>
              {sitter.service_city}
            </Badge>
          ) : (
            <span className='text-gray01'>未設定</span>
          )}
        </li>
        <li className='flex gap-x-4'>
          <p className='flex-shrink-0 text-gray02'>服務區域</p>
          {sitter.service_district_list.length == 0 ? (
            <span className='text-gray02'>未設定</span>
          ) : (
            <ul className='flex flex-wrap gap-2'>
              {sitter.service_district_list.map((district) => (
                <li key={district}>
                  <Badge className='py-1 text-gray02' variant='default'>
                    {district}
                  </Badge>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className='flex gap-x-4'>
          <p className='text-gray02'>服務犬型</p>
          {sitter.service_size_list.length == 0 ? (
            <span className='text-gray01'>未設定</span>
          ) : (
            <ul className='flex flex-wrap gap-2'>
              {sitter.service_size_list.map((size) => (
                <li key={size}>
                  <Badge className='py-1 text-gray02' variant='default'>
                    {PET_SIZE[size]}型犬
                  </Badge>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </article>
  );
};

const Service = ({ type, price }: { type: string; price: number | null }) => {
  return (
    <li key={type}>
      <span className='mr-4 text-gray02'> {type}</span>
      {price == null ? (
        <span className='text-gray01'>未開放</span>
      ) : (
        <span className=' font-bold text-yellow-600'>{price} 元 / 30分鐘</span>
      )}
    </li>
  );
};

export default SitterServiceContent;
