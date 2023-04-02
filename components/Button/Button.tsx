import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";
import Image from 'next/image';

export const Button = ({ apperance, children, arrow = 'none', className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button className={cn(styles.button, className, {
      [styles.primary]: apperance == 'primary',
      [styles.ghost]: apperance == 'ghost',
    }
    )}
      {...props}
    >
      {children}
      {arrow != 'none' && <span className={cn(styles.arrow, {
        [styles.down]: arrow == 'down',
        [styles.right]: arrow == 'right',
      })}>
        <Image src="arrow.svg" alt="arrow" width="6" height="10"/>  
      </span>}
    </button>
  );
};
