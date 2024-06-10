import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';

const SearchTask = () => {
  return (
    <section className='min-h-screen-minus-144px bg-gray04 py-10'>
      <div className='container'>
        <h2 className='mb-10 text-3xl font-medium'>找任務</h2>
        <div className='flex flex-row gap-10'>
          <div className='basis-1/3'>
            <TaskForm />
          </div>
          <div className='flex basis-2/3 flex-col gap-4'>
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchTask;
