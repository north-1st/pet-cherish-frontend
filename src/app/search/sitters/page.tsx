import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import LocationOnIcon from '@/components/common/Icon/LocationOnIcon';
import StarFillIcon from '@/components/common/Icon/StarFillIcon';
import StarOutlineIcon from '@/components/common/Icon/StarOutlineIcon';

const SearchSitter = () => {
  return (
    <section className='py-10'>
      <div className='container'>
        <h2 className='mb-10 text-3xl font-medium'>找保姆</h2>
        <div className='flex flex-row gap-10'>
          <div className='basis-1/3'>
            <form className='space-y-4'>
              <div>
                <Label htmlFor='email'>縣市</Label>
                <Select>
                  <SelectTrigger id='sort'>
                    <SelectValue placeholder='Select sort option' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='option1'>Sort Option 1</SelectItem>
                    <SelectItem value='option2'>Sort Option 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor='email'>區域</Label>
                <Select>
                  <SelectTrigger id='filter'>
                    <SelectValue placeholder='Select filter option' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='option1'>Filter Option 1</SelectItem>
                    <SelectItem value='option2'>Filter Option 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>身份驗證</Label>
                <label className='flex items-center'>
                  <Checkbox id='checkbox1' />
                  <span className='ml-2'>保姆證</span>
                </label>
                <label className='flex items-center'>
                  <Checkbox id='checkbox2' />
                  <span className='ml-2'>良民證</span>
                </label>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>服務類型</Label>
                <label className='flex items-center'>
                  <Checkbox id='checkbox1' />
                  <span className='ml-2'>陪伴散步</span>
                </label>
                <label className='flex items-center'>
                  <Checkbox id='checkbox2' />
                  <span className='ml-2'>到府洗澡</span>
                </label>
                <label className='flex items-center'>
                  <Checkbox id='checkbox2' />
                  <span className='ml-2'>寵物保健</span>
                </label>
                <label className='flex items-center'>
                  <Checkbox id='checkbox2' />
                  <span className='ml-2'>專業攝影</span>
                </label>
              </div>
            </form>
          </div>
          <div className='flex basis-2/3 flex-col gap-4'>
            <Card>
              <CardContent className='p-6'>
                <div className='flex gap-8'>
                  <Avatar className='h-32 w-32'>
                    <AvatarImage alt='頭像' src='/images/people1.jpg' />
                  </Avatar>
                  <div className='space-y-2'>
                    <div className='flex flex-row items-center gap-2'>
                      <h5 className='text-xl font-semibold'>張小花</h5>
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarOutlineIcon color='#FFC702' width='16px' height='15px' />
                      <span className='text-xs'>(10)</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <LocationOnIcon />
                      <span>台北市中山區</span>
                    </div>
                    <div className='flex gap-2'>
                      <Badge className='border-green-500 text-green-500' variant='outline'>
                        保姆證
                      </Badge>
                      <Badge className='border-blue-500 text-blue-500' variant='outline'>
                        良民證
                      </Badge>
                      <Badge className='border-gray-500 text-gray-500' variant='outline'>
                        陪伴散步
                      </Badge>
                    </div>
                    <div className='flex gap-2'>
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
                    <p>擁有超過三年的專業狗狗照顧經驗。專業證照:寵物急救及護理認證。</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <div className='flex gap-8'>
                  <Avatar className='h-32 w-32'>
                    <AvatarImage alt='頭像' src='/images/people1.jpg' />
                  </Avatar>
                  <div className='space-y-2'>
                    <div className='flex flex-row items-center gap-2'>
                      <h5 className='text-xl font-semibold'>張小花</h5>
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarOutlineIcon color='#FFC702' width='16px' height='15px' />
                      <span className='text-xs'>(10)</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <LocationOnIcon />
                      <span>台北市中山區</span>
                    </div>
                    <div className='flex gap-2'>
                      <Badge className='border-green-500 text-green-500' variant='outline'>
                        保姆證
                      </Badge>
                      <Badge className='border-blue-500 text-blue-500' variant='outline'>
                        良民證
                      </Badge>
                      <Badge className='border-gray-500 text-gray-500' variant='outline'>
                        陪伴散步
                      </Badge>
                    </div>
                    <div className='flex gap-2'>
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
                    <p>擁有超過三年的專業狗狗照顧經驗。專業證照:寵物急救及護理認證。</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <div className='flex gap-8'>
                  <Avatar className='h-32 w-32'>
                    <AvatarImage alt='頭像' src='/images/people1.jpg' />
                  </Avatar>
                  <div className='space-y-2'>
                    <div className='flex flex-row items-center gap-2'>
                      <h5 className='text-xl font-semibold'>張小花</h5>
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarOutlineIcon color='#FFC702' width='16px' height='15px' />
                      <span className='text-xs'>(10)</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <LocationOnIcon />
                      <span>台北市中山區</span>
                    </div>
                    <div className='flex gap-2'>
                      <Badge className='border-green-500 text-green-500' variant='outline'>
                        保姆證
                      </Badge>
                      <Badge className='border-blue-500 text-blue-500' variant='outline'>
                        良民證
                      </Badge>
                      <Badge className='border-gray-500 text-gray-500' variant='outline'>
                        陪伴散步
                      </Badge>
                    </div>
                    <div className='flex gap-2'>
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
                    <p>擁有超過三年的專業狗狗照顧經驗。專業證照:寵物急救及護理認證。</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <div className='flex gap-8'>
                  <Avatar className='h-32 w-32'>
                    <AvatarImage alt='頭像' src='/images/people1.jpg' />
                  </Avatar>
                  <div className='space-y-2'>
                    <div className='flex flex-row items-center gap-2'>
                      <h5 className='text-xl font-semibold'>張小花</h5>
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarOutlineIcon color='#FFC702' width='16px' height='15px' />
                      <span className='text-xs'>(10)</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <LocationOnIcon />
                      <span>台北市中山區</span>
                    </div>
                    <div className='flex gap-2'>
                      <Badge className='border-green-500 text-green-500' variant='outline'>
                        保姆證
                      </Badge>
                      <Badge className='border-blue-500 text-blue-500' variant='outline'>
                        良民證
                      </Badge>
                      <Badge className='border-gray-500 text-gray-500' variant='outline'>
                        陪伴散步
                      </Badge>
                    </div>
                    <div className='flex gap-2'>
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
                    <p>擁有超過三年的專業狗狗照顧經驗。專業證照:寵物急救及護理認證。</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <div className='flex gap-8'>
                  <Avatar className='h-32 w-32'>
                    <AvatarImage alt='頭像' src='/images/people1.jpg' />
                  </Avatar>
                  <div className='space-y-2'>
                    <div className='flex flex-row items-center gap-2'>
                      <h5 className='text-xl font-semibold'>張小花</h5>
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarOutlineIcon color='#FFC702' width='16px' height='15px' />
                      <span className='text-xs'>(10)</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <LocationOnIcon />
                      <span>台北市中山區</span>
                    </div>
                    <div className='flex gap-2'>
                      <Badge className='border-green-500 text-green-500' variant='outline'>
                        保姆證
                      </Badge>
                      <Badge className='border-blue-500 text-blue-500' variant='outline'>
                        良民證
                      </Badge>
                      <Badge className='border-gray-500 text-gray-500' variant='outline'>
                        陪伴散步
                      </Badge>
                    </div>
                    <div className='flex gap-2'>
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
                    <p>擁有超過三年的專業狗狗照顧經驗。專業證照:寵物急救及護理認證。</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <div className='flex gap-8'>
                  <Avatar className='h-32 w-32'>
                    <AvatarImage alt='頭像' src='/images/people1.jpg' />
                  </Avatar>
                  <div className='space-y-2'>
                    <div className='flex flex-row items-center gap-2'>
                      <h5 className='text-xl font-semibold'>張小花</h5>
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarOutlineIcon color='#FFC702' width='16px' height='15px' />
                      <span className='text-xs'>(10)</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <LocationOnIcon />
                      <span>台北市中山區</span>
                    </div>
                    <div className='flex gap-2'>
                      <Badge className='border-green-500 text-green-500' variant='outline'>
                        保姆證
                      </Badge>
                      <Badge className='border-blue-500 text-blue-500' variant='outline'>
                        良民證
                      </Badge>
                      <Badge className='border-gray-500 text-gray-500' variant='outline'>
                        陪伴散步
                      </Badge>
                    </div>
                    <div className='flex gap-2'>
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
                    <p>擁有超過三年的專業狗狗照顧經驗。專業證照:寵物急救及護理認證。</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <div className='flex gap-8'>
                  <Avatar className='h-32 w-32'>
                    <AvatarImage alt='頭像' src='/images/people1.jpg' />
                  </Avatar>
                  <div className='space-y-2'>
                    <div className='flex flex-row items-center gap-2'>
                      <h5 className='text-xl font-semibold'>張小花</h5>
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarOutlineIcon color='#FFC702' width='16px' height='15px' />
                      <span className='text-xs'>(10)</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <LocationOnIcon />
                      <span>台北市中山區</span>
                    </div>
                    <div className='flex gap-2'>
                      <Badge className='border-green-500 text-green-500' variant='outline'>
                        保姆證
                      </Badge>
                      <Badge className='border-blue-500 text-blue-500' variant='outline'>
                        良民證
                      </Badge>
                      <Badge className='border-gray-500 text-gray-500' variant='outline'>
                        陪伴散步
                      </Badge>
                    </div>
                    <div className='flex gap-2'>
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
                    <p>擁有超過三年的專業狗狗照顧經驗。專業證照:寵物急救及護理認證。</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <div className='flex gap-8'>
                  <Avatar className='h-32 w-32'>
                    <AvatarImage alt='頭像' src='/images/people1.jpg' />
                  </Avatar>
                  <div className='space-y-2'>
                    <div className='flex flex-row items-center gap-2'>
                      <h5 className='text-xl font-semibold'>張小花</h5>
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarOutlineIcon color='#FFC702' width='16px' height='15px' />
                      <span className='text-xs'>(10)</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <LocationOnIcon />
                      <span>台北市中山區</span>
                    </div>
                    <div className='flex gap-2'>
                      <Badge className='border-green-500 text-green-500' variant='outline'>
                        保姆證
                      </Badge>
                      <Badge className='border-blue-500 text-blue-500' variant='outline'>
                        良民證
                      </Badge>
                      <Badge className='border-gray-500 text-gray-500' variant='outline'>
                        陪伴散步
                      </Badge>
                    </div>
                    <div className='flex gap-2'>
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
                    <p>擁有超過三年的專業狗狗照顧經驗。專業證照:寵物急救及護理認證。</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <div className='flex gap-8'>
                  <Avatar className='h-32 w-32'>
                    <AvatarImage alt='頭像' src='/images/people1.jpg' />
                  </Avatar>
                  <div className='space-y-2'>
                    <div className='flex flex-row items-center gap-2'>
                      <h5 className='text-xl font-semibold'>張小花</h5>
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarOutlineIcon color='#FFC702' width='16px' height='15px' />
                      <span className='text-xs'>(10)</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <LocationOnIcon />
                      <span>台北市中山區</span>
                    </div>
                    <div className='flex gap-2'>
                      <Badge className='border-green-500 text-green-500' variant='outline'>
                        保姆證
                      </Badge>
                      <Badge className='border-blue-500 text-blue-500' variant='outline'>
                        良民證
                      </Badge>
                      <Badge className='border-gray-500 text-gray-500' variant='outline'>
                        陪伴散步
                      </Badge>
                    </div>
                    <div className='flex gap-2'>
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
                    <p>擁有超過三年的專業狗狗照顧經驗。專業證照:寵物急救及護理認證。</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <div className='flex gap-8'>
                  <Avatar className='h-32 w-32'>
                    <AvatarImage alt='頭像' src='/images/people1.jpg' />
                  </Avatar>
                  <div className='space-y-2'>
                    <div className='flex flex-row items-center gap-2'>
                      <h5 className='text-xl font-semibold'>張小花</h5>
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarFillIcon color='#FFC702' width='16px' height='15px' />
                      <StarOutlineIcon color='#FFC702' width='16px' height='15px' />
                      <span className='text-xs'>(10)</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <LocationOnIcon />
                      <span>台北市中山區</span>
                    </div>
                    <div className='flex gap-2'>
                      <Badge className='border-green-500 text-green-500' variant='outline'>
                        保姆證
                      </Badge>
                      <Badge className='border-blue-500 text-blue-500' variant='outline'>
                        良民證
                      </Badge>
                      <Badge className='border-gray-500 text-gray-500' variant='outline'>
                        陪伴散步
                      </Badge>
                    </div>
                    <div className='flex gap-2'>
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
                    <p>擁有超過三年的專業狗狗照顧經驗。專業證照:寵物急救及護理認證。</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSitter;
