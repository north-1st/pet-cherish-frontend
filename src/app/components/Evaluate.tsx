import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

import QuoteIcon from '@/components/common/Icon/QuoteIcon';

const Evaluate = () => {
  return (
    <section className='pb-24 pt-12'>
      <div className='container'>
        <h2 className='text-center text-3xl font-medium'>毛爸媽用戶怎麼說 ?</h2>
        <div className='mt-5 flex flex-col items-center space-y-8 md:flex-row md:items-stretch md:justify-between md:space-y-0'>
          <Card className='relative w-[300px] border-none bg-[#FFF2CC] shadow-md'>
            <QuoteIcon
              className='absolute right-0 top-[-15px]'
              color='#FFC702'
              width='30px'
              height='30px'
            />
            <CardContent className='px-6 py-16'>
              <p>「毛爸媽平台真是救星，找到了理想的寵物保姆、服務周到，非常滿意!」</p>
              <div className='absolute bottom-[-50px] left-[120px] text-center'>
                <Avatar className='h-14 w-14'>
                  <AvatarImage alt='林志玲' src='/images/people2.jpg' />
                </Avatar>
                <span className='text-md'>林志玲</span>
              </div>
            </CardContent>
          </Card>
          <Card className='relative w-[300px] border-none bg-[#FFF2CC] shadow-md'>
            <QuoteIcon
              className='absolute right-0 top-[-15px]'
              color='#FFC702'
              width='30px'
              height='30px'
            />
            <CardContent className='px-6 py-16'>
              <p>「毛爸媽平台真是救星，找到了理想的寵物保姆、服務周到，非常滿意!」</p>
              <div className='absolute bottom-[-50px] left-[120px] text-center'>
                <Avatar className='h-14 w-14'>
                  <AvatarImage alt='林志玲' src='/images/people2.jpg' />
                </Avatar>
                <span className='text-md'>林志玲</span>
              </div>
            </CardContent>
          </Card>
          <Card className='relative w-[300px] border-none bg-[#FFF2CC] shadow-md'>
            <QuoteIcon
              className='absolute right-0 top-[-15px]'
              color='#FFC702'
              width='30px'
              height='30px'
            />
            <CardContent className='px-6 py-16'>
              <p>「毛爸媽平台真是救星，找到了理想的寵物保姆、服務周到，非常滿意!」</p>
              <div className='absolute bottom-[-50px] left-[120px] text-center'>
                <Avatar className='h-14 w-14'>
                  <AvatarImage alt='林志玲' src='/images/people2.jpg' />
                </Avatar>
                <span className='text-md'>林志玲</span>
              </div>
            </CardContent>
          </Card>
          <Card className='relative w-[300px] border-none bg-[#FFF2CC] shadow-md'>
            <QuoteIcon
              className='absolute right-0 top-[-15px]'
              color='#FFC702'
              width='30px'
              height='30px'
            />
            <CardContent className='px-6 py-16'>
              <p>「毛爸媽平台真是救星，找到了理想的寵物保姆、服務周到，非常滿意!」</p>
              <div className='absolute bottom-[-50px] left-[120px] text-center'>
                <Avatar className='h-14 w-14'>
                  <AvatarImage alt='林志玲' src='/images/people2.jpg' />
                </Avatar>
                <span className='text-md'>林志玲</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Evaluate;
