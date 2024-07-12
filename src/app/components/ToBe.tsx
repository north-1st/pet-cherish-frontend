import Image from 'next/image';

const ToBe = () => {
  return (
    <section className='py-24'>
      <div className='container'>
        <div className='group relative'>
          <Image
            alt='Woman with a dog'
            className='h-[400px] w-full rounded-lg object-cover group-hover:scale-100'
            height='437'
            src='/images/tobe1.png'
            width='1739'
          />
          <div className='absolute inset-0 rounded-lg bg-gradient-to-b from-black/0 to-black/50' />
          <div className='absolute bottom-6 left-0 right-0 mx-4 flex flex-col items-start md:bottom-10 md:items-center'>
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
