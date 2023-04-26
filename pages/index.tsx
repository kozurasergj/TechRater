import { Button, Htag, Input, P, Tag, Textarea } from '@/components';
import { Rating } from '@/components';
import { MenuItem } from '@/interface/menu.interface';
import { withLayout } from '@/layout/Layout';
import axios from 'axios';
import { GetStaticProps } from 'next';
import React, { useState } from 'react';

const Home = ({ menu }: HomeProps): JSX.Element => {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag='h1'>Добро пожаловать на наш сайт! </Htag>
      <p>Здесь вы найдете самую правдивую информацию о наших курсах. Мы предлагаем широкий выбор курсов по различным темам по очень выгодным ценам. На странице каждого курса вы сможете увидеть его цену и отзывы наших настоящих учеников. Мы гарантируем качество и полезность наших курсов, поэтому смело рекомендуем вам начать свое обучение уже сегодня!</p>
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
