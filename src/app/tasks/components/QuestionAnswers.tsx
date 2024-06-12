import { Badge } from '@/components/ui/badge';

export default function QuestionAnswers() {
  return (
    <ul className='flex flex-col gap-3 rounded-lg bg-white px-4 py-6'>
      <li className='flex flex-col justify-between sm:flex-row'>
        <div className='flex flex-col gap-2 sm:flex-row'>
          <Badge className='py-1 text-gray02' variant='default'>
            Q
          </Badge>
          <p>可接受多犬一起遛狗？</p>
        </div>
        <div className='flex gap-2 text-gray03'>
          <span>保姆綽號</span>
          <time>2023-03-10 20:45</time>
        </div>
      </li>
      <li className='flex flex-col justify-between sm:flex-row'>
        <div className='flex flex-col gap-2 sm:flex-row'>
          <Badge className='bg-gray01 py-1'>A</Badge>
          <p>不行噢，Lucky力氣很大，不適合。 </p>
        </div>
        <div className='flex gap-2 text-gray03'>
          <span>Joanna</span>
          <time>2023-03-10 20:45</time>
        </div>
      </li>
    </ul>
  );
}
