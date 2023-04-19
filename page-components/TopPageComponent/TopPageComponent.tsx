import { TopPageComponentProps } from './TopPageComponent.props';
import styles from "./TopPageComponent.module.css";
import Image from 'next/image';
import { HhData } from '@/interface/page.interface';
import { priceRu } from '@/Helpers/Helpers';
import { Sort } from '@/components';
import { SortEnum } from '@/components/Sort/Sort.props';
import { useReducer } from 'react';
import { sortReducer } from './sort.reducer';

export const TopPageComponent = ({ page, products }: TopPageComponentProps, { juniorSalary, middleSalary, seniorSalary }: HhData): JSX.Element => {

  if (!page) {
    return <h2 > Not found</h2 >;
  }

  const [{ products: sortedProducts, sort }, dispathSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

  const setSort = (sort: SortEnum) => {
    dispathSort({ type: sort });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1 className="h1__header">{page.title}</h1>
        {products && <span className='mark__number__course'>{products.length}</span>}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts && sortedProducts.map(p => (<div key={p._id}>{p.title}</div>))}
      </div>
      <div className={styles.hhTitle}>
        <h2 className="h2__header">Вакансии - {page.category}</h2>
        <span className='mark__name__site'>hh.ru</span>
      </div>
      <div className={styles.hh}>
        <div className={styles.cardInfo}>
          <div className={styles.hhInfoTitle}>Всего вакансий </div>
          <div className={styles.hhInfoValue}>{page.hh && page.hh.count}</div>
        </div>
        <div className={styles.wrapperSalary}>
          <div className={styles.cardSalary}>
            <div className={styles.hhSalaryTitle}>Начальный </div>
            <div className={styles.hhSalaryCount}>{page.hh?.juniorSalary && priceRu(page.hh?.juniorSalary)}</div>
            <div className={styles.hhSalaryRate}>
              <Image src="/starMod.svg" alt="photo" width="20" height="20" />
              <Image src="/star.svg" alt="photo" width="20" height="20" />
              <Image src="/star.svg" alt="photo" width="20" height="20" />
            </div>
          </div>
          <div className={styles.cardSalary}>
            <div className={styles.hhSalaryTitle}>Средний</div>
            <div className={styles.hhSalaryCount}>{page.hh?.middleSalary && priceRu(page.hh?.middleSalary)}</div>
            <div className={styles.hhSalaryRate}>
              <Image src="/starMod.svg" alt="photo" width="20" height="20" />
              <Image src="/starMod.svg" alt="photo" width="20" height="20" />
              <Image src="/star.svg" alt="photo" width="20" height="20" />
            </div>
          </div>
          <div className={styles.cardSalary}>
            <div className={styles.hhSalaryTitle}>Профессионал</div>
            <div className={styles.hhSalaryCount}>{page.hh?.seniorSalary && priceRu(page.hh?.seniorSalary)}</div>
            <div className={styles.hhSalaryRate}>
              <Image src="/starMod.svg" alt="photo" width="20" height="20" />
              <Image src="/starMod.svg" alt="photo" width="20" height="20" />
              <Image src="/starMod.svg" alt="photo" width="20" height="20" />
            </div>
          </div>
        </div>
      </div>
      <h4 className="h4__header">Преимущества</h4>
      {page.advantages && page.advantages.length >= 1 && page.advantages.map(a => (
        <div key={a._id} className={styles.advantage}>
          <Image src="/check.svg" alt="photo" width="50" height="50" />
          <div className={styles.titleAdvantage}>{a.title}</div>
          <hr className={styles.lineAdvantage} />
          <div>{a.description}</div>
        </div>
      ))}
      {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }}></div>}
      <h4 className="h4__header">Получаемые навыки</h4>
      <div className={styles.wrapperSkills}>
        {page.tags.map(t => <span key={t} className={styles.skill}>{t}</span>)}
      </div>
    </div>
  );
};

