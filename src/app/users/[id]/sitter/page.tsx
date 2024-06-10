import { cookies } from 'next/headers';

import {
  applySitterRequestSchema,
  sitterResponseSchema,
  sitterStatusSchema,
} from '@/schemas/sitterSchema';

import ServerApiManager from '@/lib/serverApiManager';

import ApplySitterForm from './components/ApplySitterForm';

const Page = async ({ params }: { params: { id: string } }) => {
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

  const sitter = await getData(params.id);

  return (
    <main>
      {sitter.status != sitterStatusSchema.enum.PASS &&
        sitter.status != sitterStatusSchema.enum.ON_BOARD && (
          <ApplySitterForm
            status={sitter.status}
            defaultValues={
              sitter.status == null ? undefined : applySitterRequestSchema.parse(sitter)
            }
          />
        )}
    </main>
  );
};

export default Page;
