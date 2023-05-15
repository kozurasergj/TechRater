import { API } from '@/helper/api';
import { firstLevelMenu } from '@/helper/helpers';
import { MenuItem } from '@/interface/menu.interface';
import { withLayout } from '@/layout/Layout';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import Image from 'next/image';

const Type = ({ firstCategory }: TypeProps): JSX.Element => {
  return (
    <>
      <h1>Welcome to our website!✋😀</h1>
      <p>Here you will find the most truthful information about our courses. We offer a wide selection of courses on various topics at very affordable prices. On each course page, you will be able to see its price and reviews from our real students. We guarantee the quality and usefulness of our courses, so we confidently recommend you to start your learning journey today!</p>
      <Image src="/bg.jpg" width={900} height={700} alt="Welcome to our website" style={{ width: '100%' }} />
    </>
  );
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map(m => `/${m.route}`),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return { notFound: true };
  }

  const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);
  if (!firstCategoryItem) {
    return { notFound: true };
  }

  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory: firstCategoryItem.id
  });
  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id
    }
  };
};

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
