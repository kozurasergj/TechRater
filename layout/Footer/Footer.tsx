import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";
import Link from 'next/link';


export const Footer = ({ className }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} >
      <div className={styles.law}>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</div>
      <Link href="#" target="_blank" className={styles.agreed}>Пользовательское соглашение</Link>
      <Link href="#" target="_blank" className={styles.privacy}>Политика конфиденциальности</Link>
    </footer >
  );
};
