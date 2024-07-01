import { cookies } from 'next/headers';
import Link from 'next/link';

import { SERVICE_TYPE } from '@/const/task';
import { petListResponseSchema } from '@/schemas/petSchema';
import { taskListResponseSchema, taskRequestSchema } from '@/schemas/taskSchema';

import ServerApiManager from '@/lib/serverApiManager';
import { cn, dateTimeDuration } from '@/lib/utils';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

import AddIcon from '@/components/common/Icon/Add';
import Clock from '@/components/common/Icon/Clock';
import LocationOnIcon from '@/components/common/Icon/LocationOnIcon';
import Empty from '@/components/common/view/Empty';

import TaskDialog from './TaskDialog';

const getData = async (id: string) => {
  const { success, message, ...data } = await ServerApiManager.get(`/api/v1/users/${id}/tasks`, {
    cache: 'no-store',
    next: { tags: ['user-tasks'] },
  });

  const {
    success: petsSuccess,
    message: petsMessage,
    data: petsData,
  } = await ServerApiManager.get(`/api/v1/users/${id}/pets`, {
    cache: 'no-store',
    next: { tags: ['user-pets'] },
  });

  if (success == true && petsSuccess == true) {
    const pets = petListResponseSchema.parse(petsData);
    const petOptions = pets.map((pet) => ({
      id: pet.id,
      label: pet.name,
    }));

    return {
      tasks: taskListResponseSchema.parse(data),
      petOptions: petOptions,
    };
  } else if (petsSuccess == false) {
    throw new Error(petsMessage);
  } else {
    throw new Error(message);
  }
};

const UserTasksBlock = async ({ id }: { id: string }) => {
  const { tasks, petOptions } = await getData(id);
  const isSelf = id == cookies().get('user_id')?.value;

  return (
    <section className='rounded-xl bg-gray04 px-8 py-6 xl:col-span-3'>
      <TaskDialog
        key={'new-task'}
        disabled={!isSelf}
        petOptions={petOptions}
        triggerChildren={
          <div className={cn('flex cursor-pointer items-center', !isSelf && 'mb-4')}>
            <h3 className='mr-2 text-xl font-bold'>任務資料</h3>
            {isSelf && <AddIcon width={28} height={28} className='fill-brand01' />}
          </div>
        }
      />
      {tasks.data.length == 0 ? (
        <Empty />
      ) : (
        <div className='grid gap-4 md:grid-cols-2'>
          {tasks.data.map((task) => {
            return (
              <Card key={task.id} className='text-xs'>
                <CardContent className='gap-x-4 p-0'>
                  <TaskDialog
                    key={task.id}
                    disabled={!isSelf}
                    taskId={task.id}
                    petOptions={petOptions}
                    triggerChildren={
                      <Avatar className='aspect-video h-auto w-full rounded-b-none rounded-t-lg'>
                        <AvatarImage src={task.cover ?? undefined} />
                      </Avatar>
                    }
                    defaultValues={taskRequestSchema.parse(task)}
                  />
                  <Link
                    className={cn('grid gap-y-3 p-4 text-sm', isSelf && 'pt-0')}
                    href={`/tasks/${task.id}`}
                  >
                    <h3 className='line-clamp-1 text-lg font-bold'>{task.title}</h3>
                    <div className='mr-auto rounded-2xl border border-gray02 px-3 py-1'>
                      {SERVICE_TYPE[task.service_type]}
                    </div>
                    <p className='flex items-center gap-x-1'>
                      <Clock />
                      {dateTimeDuration(task.start_at, task.end_at)}
                    </p>
                    <p className='flex items-center gap-x-1'>
                      <LocationOnIcon />
                      {`${task.city}${task.district}`}
                    </p>
                    <hr />
                    <p className='h-20'>{task.description}</p>
                    <div className='flex items-center justify-between'>
                      <p className='text-xl font-bold text-brand01'>{task.total}</p>
                      <p className='text-gray03'>{`(${task.unit_price}元/30分鐘)`}</p>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default UserTasksBlock;
