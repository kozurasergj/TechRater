import { Menu } from '../Menu/Menu';
import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";

export const Sidebar = ({ className }: SidebarProps): JSX.Element => {
  return (
    <aside className={cn(className, styles.sidebar)}>
      <Menu/>
    </aside>
  );
};
