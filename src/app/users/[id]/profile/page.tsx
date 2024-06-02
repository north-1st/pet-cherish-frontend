import ProfileBlock from './components/ProfileBlock';
import UserPetsBlock from './components/UserPetsBlock';

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div className='container gap-x-10 xl:flex'>
      <ProfileBlock id={params.id} />
      <UserPetsBlock id={params.id} />
    </div>
  );
}
