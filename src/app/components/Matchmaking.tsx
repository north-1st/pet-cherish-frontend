import { Card, CardContent } from '@/components/ui/card';

import PersonStandingIcon from '@/components/common/Icon/PersonStandingIcon';
import SolidClockIcon from '@/components/common/Icon/SolidClockIcon';
import TurtleIcon from '@/components/common/Icon/TurtleIcon';

const Matchmaking = () => {
  return (
    <section className='bg-[#F5F5F5] pb-24 pt-12'>
      <div className='container'>
        <h2 className='text-center text-3xl font-medium'>輕鬆快速媒合寵物保母</h2>
        <div className='mt-5 flex justify-center space-x-40'>
          <Card className='border-none bg-transparent shadow-none'>
            <CardContent className='space-y-3 text-center'>
              <SolidClockIcon color='#000' width='32px' height='32px' className='mx-auto' />
              <p className='text-5xl font-bold text-[#FFC702]'>19789</p>
              <p className='text-[#3E3E3E]'>服務完成數數</p>
            </CardContent>
          </Card>
          <Card className='border-none bg-transparent shadow-none'>
            <CardContent className='space-y-3 text-center'>
              <PersonStandingIcon color='#000' width='32px' height='32px' className='mx-auto' />
              <p className='text-5xl font-bold text-[#FFC702]'>9789</p>
              <p className='text-[#3E3E3E]'>平台用戶數</p>
            </CardContent>
          </Card>
          <Card className='border-none bg-transparent shadow-none'>
            <CardContent className='space-y-3 text-center'>
              <TurtleIcon color='#000' width='32px' height='32px' className='mx-auto' />
              <p className='text-5xl font-bold text-[#FFC702]'>1789</p>
              <p className='text-[#3E3E3E]'>保姆上架數</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Matchmaking;
