import ProfileBlock from './components/ProfileBlock';

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div className='container gap-x-10 xl:flex'>
      <ProfileBlock id={params.id} />
    </div>
  );
}
