import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

import Bookmark from '@/components/common/Icon/Bookmark';
import Clock from '@/components/common/Icon/Clock';
import DollarSign from '@/components/common/Icon/DollarSign';
import LocationOnIcon from '@/components/common/Icon/LocationOnIcon';

const TaskCard = () => {
  return (
    <Card>
      <CardContent className='p-6'>
        <div className='flex gap-8'>
          <Avatar className='h-32 w-32'>
            <AvatarImage alt='頭像' src='/images/dog3.jpg' />
          </Avatar>
          <div className='space-y-2'>
            <h5 className='text-xl font-semibold'>急需遛狗 十萬火急 狗已經快把家拆了~</h5>
            <p className='flex items-center gap-2'>
              <Clock color='#1C1B1F' width='20px' height='20px' />
              <span>2024/04/05 20:00 ~ 23:00</span>
            </p>
            <p className='flex items-center gap-2'>
              <LocationOnIcon color='#1C1B1F' width='20px' height='20px' />
              <span>台北市中山區</span>
            </p>
            <div className='flex items-center gap-2'>
              <Bookmark color='#1C1B1F' width='20px' height='20px' />
              <Badge className='border-gray-500 text-gray-500' variant='outline'>
                到府洗澡
              </Badge>
              <Badge className='border-gray-500 text-gray-500' variant='outline'>
                寵物保健
              </Badge>
              <Badge className='border-gray-500 text-gray-500' variant='outline'>
                到府洗澡
              </Badge>
              <Badge className='border-gray-500 text-gray-500' variant='outline'>
                專業攝影
              </Badge>
            </div>
            <p className='flex items-center gap-2'>
              <DollarSign color='#1C1B1F' width='20px' height='20px' />
              <span>總 1200 元 (300元/30分鐘)</span>
            </p>
            <p>心臟病，需餵藥以及保健品、容易過敏。</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
