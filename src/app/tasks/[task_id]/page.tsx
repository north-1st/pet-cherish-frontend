'use client';

import { useEffect, useState } from 'react';

import { ReviewListResponse, ownerReviewListResponseSchema } from '@/schemas/reviewSchema';
import { TaskDataResponse, taskByIdResponseDataSchema } from '@/schemas/taskSchema';

import ClientApiManager from '@/lib/clientApiManager';
import { formatDateTime } from '@/lib/utils';

import Tab from '@/components/ui/tab';

import Breadcrumbs from '@/components/common/breadcrumbs';
import Empty from '@/components/common/view/Empty';
import { ReviewsProps } from '@/components/common/view/Reviews';

import Details from '../../../components/common/view/Details';
import QuestionAnswers from '../../../components/common/view/QuestionAnswers';
import Reviews from '../../../components/common/view/Reviews';
import MainSummary from '../components/MainSummary';

export const getOwnerReviewsByUserId = async (id: string): Promise<ReviewListResponse> => {
  const { success, data } = await ClientApiManager.get(`/api/v1/pet-owners/${id}/reviews`);

  if (success == true) {
    return ownerReviewListResponseSchema.parse(data);
  }

  return ownerReviewListResponseSchema.parse({});
};

export const getTaskById = async (task_id: string): Promise<TaskDataResponse> => {
  const { success, data } = await ClientApiManager.get(`/api/v1/tasks/${task_id}`);

  if (success) {
    return taskByIdResponseDataSchema.parse(data);
  }

  return taskByIdResponseDataSchema.parse({});
};

enum TabGroup {
  DETAILS = '詳情資訊',
  Q_AND_A = 'Q&A討論',
  REVIEWS = '其他保姆評價',
}

export default function Page({ params }: { params: { task_id: string } }) {
  const [currentData, setCurrentData] = useState<TaskDataResponse>();
  const [ownerReviews, setOwnerReviews] = useState<ReviewsProps[]>([]);

  const getPageData = async (task_id: string) => {
    const data = await getTaskById(task_id);
    const reviewsResult = await getOwnerReviewsByUserId(data.user_id);
    const reviewsData = reviewsResult.reviews.map((item) => {
      const { sitter_user_updated_at, sitter_rating, sitter_content } = item;
      const { avatar, real_name, nickname } = item.sitter;
      const { service_type } = item.task;
      return {
        poster: {
          headIcon: avatar || '',
          name: nickname || real_name,
          dateTime: formatDateTime(sitter_user_updated_at) || '',
        },
        review: {
          rating: sitter_rating,
          content: sitter_content,
        },
        task: {
          serviceType: service_type,
        },
      };
    });

    setCurrentData(data);
    setOwnerReviews(reviewsData);
  };

  useEffect(() => {
    if (params.task_id) {
      getPageData(params.task_id);
    }
  }, [params.task_id]);

  const qaList = [
    {
      question: { title: '可接受多犬一起遛狗嗎？', name: '保姆綽號', dateTime: '2023-03-10 20:45' },
      answer: {
        title: '不行噢，Lucky力氣很大，不適合。',
        name: 'Joanna',
        dateTime: '2023-03-10 20:45',
      },
    },
  ];

  const tabs = [
    {
      label: TabGroup.DETAILS,
      content: <Details content={currentData?.description || <Empty />} />,
    },
    {
      label: TabGroup.Q_AND_A,
      content: <QuestionAnswers qaList={qaList} />,
    },
    {
      label: TabGroup.REVIEWS,
      content: <Reviews reviewList={ownerReviews} />,
    },
  ];

  const navList = [
    { label: '任務列表', href: '/search/tasks' },
    { label: `任務編號：${params.task_id}`, href: `/tasks/${params.task_id}` },
  ];

  return (
    <>
      {/* 麵包屑 */}
      <Breadcrumbs navList={navList} />

      {/* 任務資料 */}
      <MainSummary data={currentData} />

      {/* 頁籤區 */}
      <section className='min-h-base-60 bg-gray04 pb-10'>
        <article className='container'>
          <Tab list={tabs} />
        </article>
      </section>
    </>
  );
}
