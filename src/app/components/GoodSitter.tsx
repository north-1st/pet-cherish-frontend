import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

import Rating from '@/components/common/view/Rating';

const GoodSitter = () => {
  return (
    <section className='bg-gray04 pb-24 pt-12'>
      <div className='container'>
        <h2 className='text-center text-3xl font-medium'>優資保姆推薦</h2>
        <div className='no-scrollbar mt-5 flex gap-x-6 overflow-scroll'>
          <Card>
            <CardContent className='w-80 p-6 xl:w-auto'>
              <div className='flex gap-4'>
                <Avatar className='h-[72px] w-[72px]'>
                  <AvatarImage alt='資優保姆推薦01' src='/images/資優保姆推薦01.png' />
                </Avatar>
                <div>
                  <h3 className='text-lg font-bold'>張小花</h3>
                  <div className='mt-2 flex justify-center gap-1'>
                    <Rating rating={5} />
                    <span className='text-xs'>(62)</span>
                  </div>
                </div>
              </div>
              <div className='my-3 flex gap-3'>
                <Badge className='border-lightGreen font-normal text-lightGreen' variant='outline'>
                  保姆證
                </Badge>
                <Badge
                  className='border-peacockBlue font-normal text-peacockBlue'
                  variant='outline'
                >
                  良民證
                </Badge>
              </div>
              <ul className='mx-6 list-disc text-gray02'>
                <li>擁有超過三年的專業狗狗照顧經驗。</li>
                <li>專業證照:寵物急救及護理認證。</li>
                <li>擅長犬種:從小型狗到大型狗,無所不包。</li>
                <li>提供定制化服務:根據狗狗的性格和需要調整照顧方式。</li>
                <li>熱愛戶外活動:喜歡帶狗狗進行長時間的散步和遊戲。</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='w-80 p-6 xl:w-auto'>
              <div className='flex gap-4'>
                <Avatar className='h-[72px] w-[72px]'>
                  <AvatarImage alt='資優保姆推薦02' src='/images/資優保姆推薦02.png' />
                </Avatar>
                <div>
                  <h3 className='text-lg font-bold'>李寶藍</h3>
                  <div className='mt-2 flex justify-center gap-1'>
                    <Rating rating={4} />
                    <span className='text-xs'>(101)</span>
                  </div>
                </div>
              </div>
              <div className='my-3 flex gap-3'>
                <Badge className='border-lightGreen font-normal text-lightGreen' variant='outline'>
                  保姆證
                </Badge>
                <Badge
                  className='border-peacockBlue font-normal text-peacockBlue'
                  variant='outline'
                >
                  良民證
                </Badge>
              </div>
              <ul className='mx-6 list-disc text-gray02'>
                <li>專注於幼犬的早期教育和社交化。</li>
                <li>經驗豐富:已成功訓練超過50隻幼犬適應家庭生活。</li>
                <li>持有動物行為學課程證書。</li>
                <li>能提供專業的營養和飲食建議。</li>
                <li>環境友好:提供安全和刺激的居住環境。</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='w-80 p-6 xl:w-auto'>
              <div className='flex gap-4'>
                <Avatar className='h-[72px] w-[72px]'>
                  <AvatarImage alt='資優保姆推薦03' src='/images/資優保姆推薦03.png' />
                </Avatar>
                <div>
                  <h3 className='text-lg font-bold'>王天樂</h3>
                  <div className='mt-2 flex justify-center gap-1'>
                    <Rating rating={4} />
                    <span className='text-xs'>(83)</span>
                  </div>
                </div>
              </div>
              <div className='my-3 flex gap-3'>
                <Badge className='border-lightGreen font-normal text-lightGreen' variant='outline'>
                  保姆證
                </Badge>
                <Badge
                  className='border-peacockBlue font-normal text-peacockBlue'
                  variant='outline'
                >
                  良民證
                </Badge>
              </div>
              <ul className='mx-6 list-disc text-gray02'>
                <li>超過五年照顧特殊需求狗狗的經驗。</li>
                <li>專業技能:熟練於處理焦慮、害怕和過度活躍的狗狗。</li>
                <li>提供日常訓練和行為矯正服務。</li>
                <li>緊急準備:具備處理突發狀況和提供急救的能力。</li>
                <li>高度推薦:擁有眾多回頭客和正面評價。</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='w-80 p-6 xl:w-auto'>
              <div className='flex gap-4'>
                <Avatar className='h-[72px] w-[72px]'>
                  <AvatarImage alt='資優保姆推薦04' src='/images/資優保姆推薦04.png' />
                </Avatar>
                <div>
                  <h3 className='text-lg font-bold'>趙心樂</h3>
                  <div className='mt-2 flex justify-center gap-1'>
                    <Rating rating={5} />
                    <span className='text-xs'>(77)</span>
                  </div>
                </div>
              </div>
              <div className='my-3 flex gap-3'>
                <Badge className='border-lightGreen font-normal text-lightGreen' variant='outline'>
                  保姆證
                </Badge>
                <Badge
                  className='border-peacockBlue font-normal text-peacockBlue'
                  variant='outline'
                >
                  良民證
                </Badge>
              </div>
              <ul className='mx-6 list-disc text-gray02'>
                <li>擁有豐富的跨犬種照顧經驗。</li>
                <li>專注於寵物心理健康,提供情感支持。</li>
                <li>定期參加專業進修課程,不斷提升照顧技巧。</li>
                <li>個性化服務:對每隻狗狗都有專屬的照顧計劃。</li>
                <li>溝通能力強:與寵物主人保持良好的溝通,確保需求得到滿足。</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GoodSitter;
