// import { Htag } from '@/components';
import { Button } from '@/components';
import styles from '../styles/Home.module.css';
export default function Home(): JSX.Element {
  return (
    <div>
      <h1 className={styles.h1__header}>Hello1!</h1>
      <h2 className={styles.h2__header}>Hello2!</h2>
      <h3 className={styles.h3__header}>Hello3!</h3>
      <Button apperance='primary'>Кнопка</Button>
      <Button apperance='ghost'>Кнопка</Button>
    </div>
  );
}
