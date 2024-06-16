'use client';

import { useState } from 'react';

import { Sitter } from '@/types/types';

import SitterCard from './components/SitterCard';
import SitterForm from './components/SitterForm';

const SearchSitter = () => {
  const [sitterList, setSitterList] = useState<Sitter[]>([]);

  return (
    <section className='min-h-screen-minus-144px bg-gray04 py-10'>
      <div className='container'>
        <h2 className='mb-10 text-3xl font-medium'>找保姆</h2>
        <div className='flex flex-row gap-10'>
          <div className='basis-1/3'>
            <SitterForm setSitterList={setSitterList} />
          </div>
          <div className='flex basis-2/3 flex-col gap-4'>
            <SitterCard sitterList={sitterList} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSitter;
