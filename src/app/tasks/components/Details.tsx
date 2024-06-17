import React from 'react';

import Image from 'next/image';

import { TaskDataResponse } from '@/schemas/taskSchema';

import Empty from '@/components/common/view/Empty';

interface DetailsProps {
  data?: TaskDataResponse;
}
export default function Details(props: DetailsProps) {
  const { data } = props;

  if (!data) {
    return <Empty />;
  }

  return (
    <section>
      {data.pet.avatar_list.map((item) => (
        <div key={item} className='w-fill overflow-hidden'>
          <img src={item} alt='寵物照片' />
        </div>
      ))}
      <p>{data.description}</p>
    </section>
  );
}
