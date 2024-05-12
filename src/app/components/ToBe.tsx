import Image from 'next/image';

const ToBe = () => {
  return (
    <section className='py-24'>
      <div className='container'>
        <div className='relative'>
          <Image
            alt='Woman with a dog'
            className='aspect-[1739/437] h-auto w-full rounded-lg object-cover'
            height='437'
            src='/images/tobe1.png'
            width='1739'
          />
          <div className='absolute bottom-10 left-1/3 flex flex-col items-center'>
            <h2 className='text-3xl font-bold text-white'>成為寵物保母</h2>
            <p className='mt-2 text-white'>
              您可以根據自己的時間表來安排工作,這樣就能夠平衡工作和個人生活。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToBe;
