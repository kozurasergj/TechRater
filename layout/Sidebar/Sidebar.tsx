import { Menu } from '../Menu/Menu';
import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import Image from 'next/image';

export const Sidebar = (): JSX.Element => {
  return (
    <aside className={cn(styles.sidebar)}>
      <Image src="/logo.svg" className={styles.logo} alt="logo" width="160" height="43" />
      <div>Поиск</div>
      <Menu />
    </aside>
  );
};
