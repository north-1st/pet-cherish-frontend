const Empty = () => {
  return (
    <div className='flex flex-col items-center gap-y-2'>
      <div className='h-20 w-[168px] bg-empty'></div>
      <p className='text-center text-sm text-gray03'>尚無資料</p>
    </div>
  );
};

export default Empty;
