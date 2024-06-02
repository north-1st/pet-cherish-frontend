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

import Bookmark from '@/components/common/Icon/Bookmark';
import Clock from '@/components/common/Icon/Clock';
import DollarSign from '@/components/common/Icon/DollarSign';
import LocationOnIcon from '@/components/common/Icon/LocationOnIcon';

const SearchTask = () => {
  return (
    <section className='bg-[#F5F5F5] py-10'>
      <div className='container'>
        <h2 className='mb-10 text-3xl font-medium'>找任務</h2>
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
                <Label htmlFor='email'>狗狗體型</Label>
                <label className='flex items-center'>
                  <Checkbox id='checkbox1' />
                  <span className='ml-2'>大型</span>
                </label>
                <label className='flex items-center'>
                  <Checkbox id='checkbox2' />
                  <span className='ml-2'>中型</span>
                </label>
                <label className='flex items-center'>
                  <Checkbox id='checkbox2' />
                  <span className='ml-2'>小型</span>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchTask;
