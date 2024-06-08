import ProfileBlock from './components/ProfileBlock';
import UserPetsBlock from './components/UserPetsBlock';
import UserTasksBlock from './components/UserTasksBlock';

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div className='container grid-cols-4 gap-10 bg-white xl:grid'>
      <ProfileBlock id={params.id} />
      <div className='col-span-3'>
        <div className='flex flex-col gap-10'>
          <UserPetsBlock id={params.id} />
          <UserTasksBlock id={params.id} />
        </div>
      </div>
    </div>
  );
}
