import { SERVICE_TYPE } from '@/const/task';
import CardIcon from '@/icons/card.svg';
import ListAltIcon from '@/icons/list_alt.svg';
import LocationOnIcon from '@/icons/location_on.svg';
import ScheduleIcon from '@/icons/schedule.svg';

import { Task } from '@/types/types';

import { dateTimeDuration } from '@/lib/utils';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

import Empty from '@/components/common/view/Empty';

interface TaskCardProps {
  taskList: Task[];
}

const TaskCard = ({ taskList }: TaskCardProps) => {
  console.log(taskList);

  if (taskList.length === 0) {
    return <Empty />;
  }

  return (
    <>
      {taskList.map((task) => {
        return (
          <Card key={task.id}>
            <CardContent className='p-6'>
              <div className='flex gap-8'>
                <Avatar className='h-32 w-32'>
                  <AvatarImage alt='頭像' src={task.cover} />
                </Avatar>
                <div className='space-y-2'>
                  <h5 className='text-xl font-semibold'>{task.title}</h5>
                  <p className='flex items-center gap-2'>
                    <ScheduleIcon width={20} height={20} />
                    <span>{dateTimeDuration(new Date(task.start_at), new Date(task.end_at))}</span>
                  </p>
                  <p className='flex items-center gap-2'>
                    <LocationOnIcon width={20} height={20} />
                    <span>{`${task.city}${task.district}`}</span>
                  </p>
                  <div className='flex items-center gap-2'>
                    <ListAltIcon width={20} height={20} />
                    <Badge className='border-gray-500 text-gray-500' variant='outline'>
                      {SERVICE_TYPE[task.service_type as keyof typeof SERVICE_TYPE]}
                    </Badge>
                  </div>
                  <p className='flex items-center gap-2'>
                    <CardIcon width={20} height={20} />
                    <span>{`總 ${task.total} 元 (${task.unit_price}/30分鐘)`}</span>
                  </p>
                  <p>{task.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default TaskCard;
