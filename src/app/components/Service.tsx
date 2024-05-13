import Image from 'next/image';

import { Card } from '@/components/ui/card';

const Service = () => {
  return (
    <section className='pb-24 pt-12'>
      <div className='container'>
        <h2 className='text-center text-3xl font-medium'>服務內容</h2>
        <div className='mt-5'>
          <Card className='flex w-full border-none shadow-none'>
            <div className='flex-none p-4'>
              <Image
                alt=''
                className='h-48 w-48 rounded-full'
                height='100'
                src='/images/dog2.jpg'
                width='200'
              />
            </div>
            <div className='space-y-6 p-4'>
              <h3 className='text-xl font-semibold text-orange-500'>陪伴散步</h3>
              <p className='rounded-md bg-gray-200 p-6'>
                我們的陪伴散步服務專為忙碌的寵物主人設計,確保您的愛犬獲得充足的運動和社交機會。我們的遛狗專員都經過嚴格篩選和培訓,能夠根據您的狗狗的性格和體能需求,提供量身定製的散步計畫。無論是快步走、慢跑還是玩耍,我們都能滿足。此外,我們使用即時追蹤技術,讓您能夠實時了解愛犬的散步路線和狀態,確保安全和透明度。
              </p>
            </div>
          </Card>
          <Card className='flex w-full border-none shadow-none'>
            <div className='flex-none p-4'>
              <Image
                alt=''
                className='h-48 w-48 rounded-full'
                height='100'
                src='/images/dog3.jpg'
                width='200'
              />
            </div>
            <div className='space-y-6 p-4'>
              <h3 className='text-xl font-semibold text-orange-500'>到府洗澡</h3>
              <p className='rounded-md bg-gray-200 p-6'>
                我們的到府洗澡服務旨在為您的寵物提供最便捷舒適的美容體驗。專業的寵物美容師會直接上門,使用溫和且適合您寵物皮膚的高品質洗護產品,為您的愛寵進行全面的洗澡、吹乾、梳理以及基礎美容服務。我們了解每只寵物的需求都不同,因此提供個性化服務選項,包括敏感皮膚護理和特殊香波。讓您的愛犬在家中就能享受到專業級的寵物美容服務,無需外出。
              </p>
            </div>
          </Card>
          <Card className='flex w-full border-none shadow-none'>
            <div className='flex-none p-4'>
              <Image
                alt=''
                className='h-48 w-48 rounded-full'
                height='100'
                src='/images/dog4.jpg'
                width='200'
              />
            </div>
            <div className='space-y-6 p-4'>
              <h3 className='text-xl font-semibold text-orange-500'>寵物保健</h3>
              <p className='rounded-md bg-gray-200 p-6'>
                我們的寵物保健服務提供專業、全面的健康管理方案,幫助您的愛寵保持最佳健康狀態。從營養諮詢到疫苗接種,我們與經驗豐富的獸醫和寵物營養師合作,為您的寵物提供量身定制的健康計畫。我們還提供定期健康檢查和24小時緊急醫療咨詢服務,確保您在寵物可能出現健康問題時,能夠獲得及時和專業的支持。
              </p>
            </div>
          </Card>
          <Card className='flex w-full border-none shadow-none'>
            <div className='flex-none p-4'>
              <Image
                alt=''
                className='h-48 w-48 rounded-full'
                height='100'
                src='/images/dog5.jpg'
                width='200'
              />
            </div>
            <div className='space-y-6 p-4'>
              <h3 className='text-xl font-semibold text-orange-500'>專業攝影</h3>
              <p className='rounded-md bg-gray-200 p-6'>
                我們的專業攝影服務致力於捕捉您與寵物之間無可取代的瞬間,為您留下永恆的回憶。我們擁有專業的攝影團隊,他們不僅對動物行為有深入的理解,更精通如何在各種光線和環境下捕捉動物最自然、最迷人的一瞬。從溫馨的家庭合影到寵物個性鮮明的個人肖像,我們都能提供創意和專業兼具的攝影解決方案。
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Service;