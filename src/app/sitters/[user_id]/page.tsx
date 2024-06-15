import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

import {
  applySitterRequestSchema,
  sitterResponseSchema,
  sitterStatusSchema,
} from '@/schemas/sitterSchema';

import ServerApiManager from '@/lib/serverApiManager';

import ApplySitterForm from './components/ApplySitterForm';
import SitterServiceDetails from './components/SitterServiceDetails';
import SitterServiceForm from './components/SitterServiceForm';

const Page = async ({ params }: { params: { user_id: string } }) => {
  const isSelf = cookies().get('user_id')?.value == params.user_id;
  const getData = async (id: string) => {
    const { success, message, data, status } = await ServerApiManager.get(`/api/v1/sitters/${id}`, {
      cache: 'no-store',
      next: { tags: ['user-sitter'] },
    });

    if (!isSelf && status == 404) {
      notFound();
    }

    if (success == true) {
      return sitterResponseSchema.parse(data);
    } else {
      if (id == cookies().get('user_id')?.value) {
        return { status: null };
      }
      throw new Error(message);
    }
  };

  const sitter = await getData(params.user_id);

  if (
    sitter.status == sitterStatusSchema.enum.ON_BOARD ||
    (!isSelf && sitter.status == sitterStatusSchema.enum.PASS)
  ) {
    return <SitterServiceDetails sitter={sitter} />;
  }

  return (
    <main>
      <div className='flex flex-col items-center bg-gray04 p-12'>
        <div className='container max-w-form space-y-6 rounded-lg  bg-white p-10'>
          {sitter.status == null && <ApplySitterForm status={sitter.status} />}

          {(sitter.status == sitterStatusSchema.enum.APPROVING ||
            sitter.status == sitterStatusSchema.enum.REJECTED) && (
            <ApplySitterForm
              status={sitter.status}
              defaultValues={applySitterRequestSchema.partial().parse(sitter)}
            />
          )}

          {sitter.status == sitterStatusSchema.enum.PASS && <SitterServiceForm />}
        </div>
      </div>
    </main>
  );
};

export default Page;
