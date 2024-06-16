import { SERVICE_TYPE } from '@/const/task';
import VisibilityIcon from '@/icons/visibility.svg';
import { ServiceType } from '@/schemas/taskSchema';

import { Button } from '@/components/ui/button';

import PosterCard from '@/components/common/view/PosterCard';

export interface ReviewsProps {
  poster: {
    headIcon: string | null | undefined;
    name: string;
    rating: number;
  };
  review: {
    content: string;
    dateTime: string;
  };
  task: {
    serviceType: ServiceType;
  };
}
export default function Reviews({ reviewList }: { reviewList: ReviewsProps[] }) {
  return (
    <>
      {reviewList.map((item) => (
        <div key={item.review.dateTime}>
          <PosterCard
            poster={item.poster}
            main={item.review}
            actions={
              <Button variant='link' className='text-gray01'>
                <VisibilityIcon />
                <span className='p-1'>{SERVICE_TYPE[item.task.serviceType]}</span>
              </Button>
            }
          />
        </div>
      ))}
    </>
  );
}
