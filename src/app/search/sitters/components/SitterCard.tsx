import Link from 'next/link';

import { SERVICE_TYPE } from '@/const/task';
// import { CERTIFICATE_TYPE } from '@/const/task';
import ListAltIcon from '@/icons/list_alt.svg';

import { Sitter } from '@/types/types';

import { cn } from '@/lib/utils';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

import LocationOnIcon from '@/components/common/Icon/LocationOnIcon';
import Empty from '@/components/common/view/Empty';
import NewRating from '@/components/common/view/NewRating';

interface SitterCardProps {
  currentPostList: Sitter[];
}

const SitterCard = ({ currentPostList }: SitterCardProps) => {
  if (currentPostList.length === 0) {
    return <Empty />;
  }

  return currentPostList.map((sitter) => {
    return (
      <Link key={sitter.user_id} href={`/sitters/${sitter?.user_id}`}>
        <Card>
          <CardContent className='p-6'>
            <div className='flex gap-8'>
              <Avatar className='h-32 w-32'>
                <AvatarImage alt='頭像' src={sitter.avatar ?? '/images/default_avatar.png'} />
              </Avatar>
              <div className='space-y-2'>
                <div className='flex flex-row items-center gap-1'>
                  <h5 className='text-xl font-semibold'>{sitter.nickname || sitter.real_name}</h5>
                  <NewRating rating={sitter.average_rating} />
                  <span className='text-xs'>{`(${sitter.total_reviews})`}</span>
                </div>
                <div className='flex items-center gap-1'>
                  <LocationOnIcon width={20} height={20} />
                  <span>{`${sitter.service_city}${sitter.service_district_list.join(', ')}`}</span>
                </div>
                <div className='flex gap-2'>
                  <ListAltIcon width={20} height={20} />
                  {sitter.certificate_list.map((certificate) => {
                    return (
                      <Badge
                        key={certificate}
                        className={cn(
                          certificate === 'CERTIFICATE'
                            ? 'border-green-500 text-green-500'
                            : 'border-blue-500 text-blue-500'
                        )}
                        variant='outline'
                      >
                        保姆證
                      </Badge>
                    );
                  })}
                </div>
                <div className='flex gap-2'>
                  <ListAltIcon width={20} height={20} />
                  {sitter.service_type_list.map((serviceType) => {
                    return (
                      <Badge
                        key={serviceType}
                        className='border-gray-500 text-gray-500'
                        variant='outline'
                      >
                        {SERVICE_TYPE[serviceType as keyof typeof SERVICE_TYPE]}
                      </Badge>
                    );
                  })}
                </div>
                <p>{sitter.service_description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  });
};

export default SitterCard;
