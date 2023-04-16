import { Button } from '@/components';
import { Rating } from '@/components';
import { MenuItem } from '@/interface/menu.interface';
import { withLayout } from '@/layout/Layout';
import axios from 'axios';
import { GetStaticProps } from 'next';
import React, { useState } from 'react';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <h1 className="h1__header">Курсы по Photoshop</h1>
      <span className='mark__number__course'>10</span>
      <h3 className="h3__header">Профессия дизайнер от 0 до PRO</h3>
      <span className='mark__price__course'>-10 000 ₽ </span>
      <p className='p__header'>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</p>
      <Button apperance='primary' arrow='right'>Кнопка</Button>
      <Button apperance='ghost' arrow='down'>Кнопка</Button>
      <Rating rating={rating} isEditable setRating={setRating} />
      <p className='p__coment'>Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании. Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в трудоустройстве!</p>
      <Rating rating={rating} setRating={setRating} />
      <Button apperance='primary' arrow='right'>Отправить</Button>
      <h2 className="h2__header">Вакансии - Photoshop</h2>
      <span className='mark__name__site'>hh.ru</span>
      <h4 className="h4__header">Преимущества</h4>
      <p className='p__benefits'>Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.</p>
      <p className='p__benefits'>Если освоить программы и найти заказы по графическому дизайну, вскоре окажется, что вставать в 6:00 вовсе не обязательно. Когда у человека вечером продуктивность выше, надо этим пользоваться.</p>
      <p className='p__benefits'>Прохождения собеседований в крупные компании могут принести свои плоды. В случае с профессией графического дизайна вполне возможна работа на рынке фриланса. Специалист сам выбирает регион, с кем работать и сколько работать. В связи с этим получится точно контролировать доход в большую или меньшую сторону.</p>
      <p className='p__benefits'>Пользователи сети, которые знают Photoshop, не обязательно должны выполнять одну работу. Профессия графического дизайнера дает возможность отойти от обычных проектов и повысить скил в других компьютерных программах.</p>
      <h4 className="h4__header">Получаемые навыки</h4>
      <span className='mark__skill'>Работа в Photoshop</span>
      <span className='mark__skill'>Подготовка макетов</span>
      <span className='mark__skill'>Графический дизайн</span>
      <span className='mark__skill'>Web дизайн</span>
      <span className='mark__skill'>Дизайн сайтов</span>
      <p className='p__description'>При завершении очередного проекта над графикой, специалист всегда задает себе вопрос о дальнейших перспективах. Отличие профессиональных дизайнеров заключается в том, что они гибкие. Сегодня разрабатывается логотип новой компании, а завтра вполне можно переключиться на иллюстрацию культовой книги.</p>
    </>
  );
}

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
