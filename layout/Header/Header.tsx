import { HeaderProps } from "./Header.props";
import cn from "classnames";
import styles from "./Header.module.css";

export const Header = ({ className }: HeaderProps): JSX.Element => {
  return (
    <header className={cn(className, styles.header)}>
      header
    </header>
  );
};

