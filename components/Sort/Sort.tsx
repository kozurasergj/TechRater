import { SortEnum, SortProps } from "./Sort.props";
import styles from "./Sort.module.css";
import cn from "classnames";
import Image from 'next/image';

export const Sort  = ({ sort, setSort, className }: SortProps): JSX.Element => {
  return (
    <div className={cn(styles.sort, className)}>
      <span
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.sortActive]: sort === SortEnum.Rating,
        })}>
        <Image src="/sort.svg" className={styles.sortIcon} alt="photo" width="20" height="15" />
        По рейтингу
      </span>
      <span
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [styles.sortActive]: sort === SortEnum.Price, 
        })}>
        <Image src="/sort.svg" className={styles.sortIcon} alt="photo" width="20" height="20" />
        По цене 
      </span>
    </div>
  );
};
