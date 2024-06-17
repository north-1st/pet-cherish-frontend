'use client';

import { useState } from 'react';

import { Sitter } from '@/types/types';

import PaginationSection from '@/components/common/view/PaginationSection';

import SitterCard from './components/SitterCard';
import SitterForm from './components/SitterForm';

const postsPerPage = 10;

const SearchSitter = () => {
  const [sitterList, setSitterList] = useState<Sitter[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPostList = sitterList.slice(firstPostIndex, lastPostIndex);

  return (
    <section className='min-h-screen-minus-144px bg-gray04 py-10'>
      <div className='container'>
        <h2 className='mb-10 text-3xl font-medium'>找保姆</h2>
        <div className='flex flex-row gap-10'>
          <div className='basis-1/3'>
            <SitterForm setSitterList={setSitterList} />
          </div>
          <div className='flex basis-2/3 flex-col gap-4'>
            <SitterCard currentPostList={currentPostList} />
            <PaginationSection
              totalPosts={sitterList.length}
              postsPerPage={postsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSitter;
