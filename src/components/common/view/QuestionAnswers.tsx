import { Button } from 'react-day-picker';

import { Badge } from '@/components/ui/badge';

export interface ContentType {
  title: string;
  name: string;
  dateTime: string;
}
export interface QuestionAnswersProps {
  question: ContentType;
  answer?: ContentType;
}
export default function QuestionAnswers({ qaList }: { qaList: QuestionAnswersProps[] }) {
  return (
    <ul className='flex flex-col gap-3 rounded-lg bg-white px-4 py-6'>
      {qaList.map((item) => (
        <>
          <li className='flex flex-col justify-between sm:flex-row'>
            <div className='flex flex-col gap-2 sm:flex-row'>
              <Badge className='py-1 text-gray02' variant='default'>
                Q
              </Badge>
              <p>{item.question.title}</p>
            </div>
            <div className='flex gap-2 text-gray03'>
              <span>{item.question.name}</span>
              <time>{item.question.dateTime}</time>
            </div>
          </li>
          {item.answer ? (
            <li className='flex flex-col justify-between sm:flex-row'>
              <div className='flex flex-col gap-2 sm:flex-row'>
                <Badge className='bg-gray01 py-1'>A</Badge>
                <p>{item.answer.title}</p>
              </div>
              <div className='flex gap-2 text-gray03'>
                <span>{item.answer.name}</span>
                <time>{item.answer.dateTime}</time>
              </div>
            </li>
          ) : (
            <Button>回答</Button>
          )}
        </>
      ))}
    </ul>
  );
}
