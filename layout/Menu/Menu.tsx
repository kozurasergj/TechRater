import styles from "./Menu.module.css";
import cn from "classnames";
import { useContext } from 'react';
import { AppContext } from '@/context/app.context';
import Image from 'next/image';
import { FirstLevelMenuItem, PageItem } from '@/interface/menu.interface';
import { TopLevelCategory } from '@/interface/page.interface';

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <Image src="courses.svg" alt="courses" width="6" height="10" />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <Image src="services.svg" alt="services" width="6" height="10" />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <Image src="books.svg" alt="books" width="6" height="10" />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <Image src="products.svg" alt="products" width="6" height="10" />, id: TopLevelCategory.Products }
];

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(m => {
          <div key={m.route}>
            <a href={`/${m.route}`}>
              <div className={cn(styles.firstLeavel, {
                [styles.firstLeavelActive]: m.id == firstCategory
              })}>
                {m.icon}
                <span>{m.name}</span>
              </div>
            </a>
            {m.id == firstCategory && buildSecondLevel(m)}
          </div>;
        })}
      </>
    );
  };


  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div >
        {menu.map(m => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div className={cn(styles.secondLevelBlock, {
              [styles.secondLevelBlockOpened]: m.isOpened
            })}>
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      pages.map(p => (
        <a href={`/${route}/${p.alias}`} key={p.alias} className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: true
        })}>
          {p.category}
        </a>
      ))
    );
  };

  return (
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
  );
};
