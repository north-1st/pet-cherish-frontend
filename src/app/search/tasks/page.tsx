'use client';

import { useState } from 'react';

import { Task } from '@/types/types';

import PaginationSection from '@/components/common/view/PaginationSection';

import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';

const postsPerPage = 10;

const SearchTask = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPostList = taskList.slice(firstPostIndex, lastPostIndex);

  return (
    <section className='min-h-screen-minus-144px bg-gray04 py-10'>
      <div className='container'>
        <h2 className='mb-10 text-3xl font-medium'>找任務</h2>
        <div className='flex flex-row gap-10'>
          <div className='basis-1/3'>
            <TaskForm setTaskList={setTaskList} />
          </div>
          <div className='flex basis-2/3 flex-col gap-4'>
            <TaskCard currentPostList={currentPostList} />
            <PaginationSection
              totalPosts={taskList.length}
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

export default SearchTask;
