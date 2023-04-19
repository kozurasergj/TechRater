import { FirstLevelMenuItem } from '@/interface/menu.interface';
import { TopLevelCategory } from '@/interface/page.interface';
import Image from 'next/image';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <Image src="/courses.svg" alt="photo" width="25" height="20" />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: < Image src="/services.svg" alt="photo" width="25" height="20" />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: < Image src="/books.svg" alt="photo" width="25" height="20" />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: < Image src="/product.svg" alt="photo" width="25" height="20" />, id: TopLevelCategory.Products }
];

export const priceRu = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat('₽');
};
