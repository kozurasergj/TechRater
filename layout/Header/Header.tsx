import { HeaderProps } from "./Header.props";
import cn from "classnames";
import styles from "./Header.module.css";

export const Header = (): JSX.Element => {
  return (
    <header className={cn(styles.header)}>
      header
    </header>
  );
};
