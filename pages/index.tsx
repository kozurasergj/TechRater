import { Htag } from '@/components';
import { Button } from '@/components';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'>Text</Htag>
      <Button apperance='primary'>Кнопка</Button>
      <Button apperance='ghost'>Кнопка</Button>
    </div>
  );
}
