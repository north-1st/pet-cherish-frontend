import CheckIcon from '@/icons/done_outline.svg';
import { SitterResponse } from '@/schemas/sitterSchema';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import Rating from '@/components/common/view/Rating';

const SitterSideBar = ({ sitter }: { sitter: SitterResponse }) => {
  return (
    <aside className='col-span-5 mb-auto overflow-hidden rounded-xl border-2'>
      <Avatar className='aspect-video h-auto w-full rounded-none'>
        <AvatarImage src={sitter.image_list[0]} />
        <AvatarFallback className='rounded-xl' />
      </Avatar>
      <div className='p-6 text-sm text-gray02'>
        <h3 className='mb-2 text-lg font-bold text-gray01 xl:mb-3'>
          {sitter.user.nickname} 保姆資歷
        </h3>
        <div className='flex flex-col gap-x-2 gap-y-1 xl:flex-row xl:gap-y-3'>
          <div className='basis-1/2 space-y-1 xl:space-y-3'>
            <div className='flex gap-x-4'>
              <span className='text-gray03'>飼主評價</span>
              {sitter.average_rating == null ? (
                '尚無評價'
              ) : (
                <div className='flex gap-x-1'>
                  <Rating rating={sitter.average_rating} />
                  <p className=' text-brand01'>{sitter.average_rating}</p>
                </div>
              )}
            </div>
            <p className='flex gap-x-4'>
              <span className='text-gray03'>評價數量</span>
              {sitter.total_reviews}
            </p>
          </div>
          <div className='basis-1/2 space-y-1 xl:space-y-3'>
            {sitter.has_police_check && (
              <div className='flex gap-x-2'>
                <CheckIcon width={20} height={20} />
                <span>良民證</span>
              </div>
            )}
            {sitter.is_door_to_door && (
              <div className='flex gap-x-2'>
                <CheckIcon width={20} height={20} />
                <span>開放到府接送</span>
              </div>
            )}
            {/* <div className='flex gap-x-2'>
              <CheckIcon width={20} height={20} />
              <p>
                平台認證：<span>平台服務次數達100次</span>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SitterSideBar;
