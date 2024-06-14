import { cookies } from 'next/headers';

import {
  applySitterRequestSchema,
  sitterResponseSchema,
  sitterStatusSchema,
} from '@/schemas/sitterSchema';

import ServerApiManager from '@/lib/serverApiManager';

import ApplySitterForm from './components/ApplySitterForm';

const Page = async ({ params }: { params: { user_id: string } }) => {
  const getData = async (id: string) => {
    const { success, message, data } = await ServerApiManager.get(`/api/v1/sitters/${id}`, {
      cache: 'no-store',
      next: { tags: ['user-sitter'] },
    });

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
        </div>
      </div>
    </main>
  );
};

export default Page;
