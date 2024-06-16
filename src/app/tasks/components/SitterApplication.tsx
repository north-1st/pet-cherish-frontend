import { Button } from '@/components/ui/button';

import PosterCard, { PosterCardProps } from '@/components/common/view/PosterCard';

const SitterApplication = () => {
  const applyList: PosterCardProps[] = [];
  return (
    <>
      {applyList.map((item) => (
        <div key={item.main.dateTime}>
          <PosterCard
            poster={item.poster}
            main={item.main}
            actions={
              <>
                <Button variant='link' className='text-gray01'>
                  拒絕
                </Button>
                <Button variant='link' className='text-gray01'>
                  接受
                </Button>
              </>
            }
          />
        </div>
      ))}
    </>
  );
};

export default SitterApplication;
