import { TopLevelCategory, TopPageModel } from '@/interface/page.interface';
import { ProductModel } from '@/interface/product.interface';

export interface TopPageComponentProps  {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
