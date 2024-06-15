import { SERVICE_TYPE } from '@/const/task';
import { TaskDataResponse } from '@/schemas/taskSchema';

import { dateTimeDuration } from '@/lib/utils';

interface TaskDescriptionProps {
  data: TaskDataResponse;
}
export const TaskDescription = ({ data }: TaskDescriptionProps) => {
  return (
    <section>
      {/* 任務說明 */}
      <ul>
        <li className='m-4 ml-0 flex flex-wrap gap-2'>
          <h3 className='text-gray02'>任務需求</h3>
          <strong>{SERVICE_TYPE[data.service_type]}</strong>
        </li>
        <li className='m-4 ml-0 flex flex-wrap gap-2'>
          <h3 className='text-gray02'>任務時間</h3>
          <strong>{dateTimeDuration(data.start_at, data.end_at)}</strong>
        </li>
        <li className='m-4 ml-0 flex flex-wrap gap-2'>
          <h3 className='text-gray02'>任務地區</h3>
          <strong>
            {data.city} {data.district}
          </strong>
        </li>
      </ul>

      {/* 任務價格 */}
      <div className='flex items-center gap-5'>
        <strong className='text-bold text-2xl text-brand01'>{data.total} 元</strong>
        <span className='priceNote'>({data.unit_price} 元 / 30分鐘)</span>
      </div>
    </section>
  );
};
