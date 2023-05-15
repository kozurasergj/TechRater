import { Button, Htag, Input, P, Tag, Textarea } from '@/components';
import { Rating } from '@/components';
import { MenuItem } from '@/interface/menu.interface';
import { withLayout } from '@/layout/Layout';
import axios from 'axios';
import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import Image from 'next/image';

const Home = ({ menu }: HomeProps): JSX.Element => {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <h1>Welcome to our website!✋😀</h1>
      <p>Here you will find the most truthful information about our courses. We offer a wide selection of courses on various topics at very affordable prices. On each course page, you will be able to see its price and reviews from our real students. We guarantee the quality and usefulness of our courses, so we confidently recommend you to start your learning journey today!</p>
      <Image src="/bg.jpg" width={900} height={700} alt="Welcome to our website" style={{ width: '100%' }} />
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
