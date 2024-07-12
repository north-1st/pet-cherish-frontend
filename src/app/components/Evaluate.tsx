import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

import QuoteIcon from '@/components/common/Icon/QuoteIcon';

const Evaluate = () => {
  return (
    <section className='pb-24 pt-12 text-gray01'>
      <div className='container'>
        <h2 className='text-center text-3xl font-medium'>毛爸媽用戶怎麼說 ?</h2>
        <div className='no-scrollbar mt-5 flex gap-x-6 overflow-scroll py-16'>
          <Card className='relative w-80 border-none bg-[#FFF2CC] shadow-md xl:w-1/4'>
            <QuoteIcon
              className='absolute right-0 top-[-15px]'
              color='#FFC702'
              width='30px'
              height='30px'
            />
            <CardContent className='w-80 py-16 xl:w-full'>
              <p>「毛爸媽平台真是救星，找到了理想的寵物保姆、服務周到，非常滿意!」</p>
              <div className='absolute bottom-[-50px] left-1/2 -translate-x-1/2 text-center'>
                <Avatar className='h-14 w-14'>
                  <AvatarImage alt='毛爸媽用戶怎麼說 _01' src='/images/毛爸媽用戶怎麼說 _01.png' />
                </Avatar>
                <span className='text-md'>林志玲</span>
              </div>
            </CardContent>
          </Card>
          <Card className='relative w-80 border-none bg-[#FFF2CC] shadow-md xl:w-1/4'>
            <QuoteIcon
              className='absolute right-0 top-[-15px]'
              color='#FFC702'
              width='30px'
              height='30px'
            />
            <CardContent className='w-80 py-16 xl:w-full'>
              <p>「這個平台非常方便,讓我輕鬆找到可靠的寵物保姆,讓我可以放心外出。」</p>
              <div className='absolute bottom-[-50px] left-1/2 -translate-x-1/2 text-center'>
                <Avatar className='h-14 w-14'>
                  <AvatarImage alt='毛爸媽用戶怎麼說 _02' src='/images/毛爸媽用戶怎麼說 _02.png' />
                </Avatar>
                <span className='text-md'>陳大天</span>
              </div>
            </CardContent>
          </Card>
          <Card className='relative w-80 border-none bg-[#FFF2CC] shadow-md xl:w-1/4'>
            <QuoteIcon
              className='absolute right-0 top-[-15px]'
              color='#FFC702'
              width='30px'
              height='30px'
            />
            <CardContent className='w-80 py-16 xl:w-full'>
              <p>
                「我喜歡這個平台的多樣性,我可以找到不同專業背景和經驗豐富的寵物照顧者,讓我可以根據我的寵物需求做出最佳選擇！」
              </p>
              <div className='absolute bottom-[-50px] left-1/2 -translate-x-1/2 text-center'>
                <Avatar className='h-14 w-14'>
                  <AvatarImage alt='毛爸媽用戶怎麼說 _03' src='/images/毛爸媽用戶怎麼說 _03.png' />
                </Avatar>
                <span className='text-md'>黃美麗</span>
              </div>
            </CardContent>
          </Card>
          <Card className='relative w-80 border-none bg-[#FFF2CC] shadow-md xl:w-1/4'>
            <QuoteIcon
              className='absolute right-0 top-[-15px]'
              color='#FFC702'
              width='30px'
              height='30px'
            />
            <CardContent className='w-80 py-16 xl:w-full'>
              <p>
                「使用這個平台後,我發現我的寵物更健康、更快樂了。每次我需要外出時,我都會在這裡找到最棒的照顧者。」
              </p>
              <div className='absolute bottom-[-50px] left-1/2 -translate-x-1/2 text-center'>
                <Avatar className='h-14 w-14'>
                  <AvatarImage alt='毛爸媽用戶怎麼說 _04' src='/images/毛爸媽用戶怎麼說 _04.png' />
                </Avatar>
                <span className='text-md'>劉小虎</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Evaluate;
