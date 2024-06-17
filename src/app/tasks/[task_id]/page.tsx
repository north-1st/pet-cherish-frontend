'use client';

import { useEffect, useState } from 'react';

import { ReviewListResponse, ownerReviewListResponseSchema } from '@/schemas/reviewSchema';
import { TaskDataResponse, taskByIdResponseDataSchema } from '@/schemas/taskSchema';
import { getOwnerReviewsByUserId, getTaskById } from '@/server';
import { parseCookies } from 'nookies';

import { formatDateTime } from '@/lib/utils';

import Breadcrumbs from '@/components/common/breadcrumbs';

import Details from '../components/Details';
// import QuestionAnswers from '../../../components/common/view/QuestionAnswers';
import MainSummary from '../components/MainSummary';
import Reviews, { ReviewsProps } from '../components/Reviews';
import SitterApplication from '../components/SitterApplication';
import Tab from '../components/Tab';

enum TabGroup {
  DETAILS = '詳情資訊',
  // Q_AND_A = 'Q&A討論',
  REVIEWS = '其他保姆評價',
  SITTER_APPILCATION = '保姆接單申請',
}

export default function Page({ params }: { params: { task_id: string } }) {
  const { user_id } = parseCookies();
  const [currentData, setCurrentData] = useState<TaskDataResponse>();
  const [ownerReviews, setOwnerReviews] = useState<ReviewsProps[]>([]);
  const [reload, setReload] = useState(false);

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
          rating: sitter_rating,
        },
        review: {
          content: sitter_content,
          dateTime: formatDateTime(sitter_user_updated_at) || '',
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
  }, [params.task_id, reload]);

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
      content: <Details data={currentData} />,
    },
    // {
    //   label: TabGroup.Q_AND_A,
    //   content: <QuestionAnswers qaList={qaList} />,
    // },
    {
      label: TabGroup.REVIEWS,
      content: <Reviews reviewList={ownerReviews} />,
    },
  ];

  // if (currentData?.user_id === user_id) {
  //   tabs.push({
  //     label: TabGroup.SITTER_APPILCATION,
  //     content: <SitterApplication task_id={params.task_id} />,
  //   });
  // }

  const navList = [
    { label: '任務列表', href: '/search/tasks' },
    { label: `任務編號：${params.task_id}`, href: `/tasks/${params.task_id}` },
  ];

  return (
    <>
      {/* 麵包屑 */}
      <Breadcrumbs navList={navList} />

      {/* 任務資料 */}
      <MainSummary data={currentData} setReload={setReload} />

      {/* 頁籤區 */}
      <section className='min-h-base-60 bg-gray04 pb-10'>
        <article className='container'>
          <Tab list={tabs} />
        </article>
      </section>
    </>
  );
}
