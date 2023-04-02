import { Button } from '@/components';
export default function Home(): JSX.Element {
  return (
    <div>
      <h1 className="h1__header">Курсы по Photoshop</h1>
      <h2 className="h2__header">Вакансии - Photoshop</h2>
      <h3 className="h3__header">Профессия дизайнер от 0 до PRO</h3>
      <Button apperance='primary' arrow='right'>Кнопка</Button>
      <Button apperance='ghost' arrow='down'>Кнопка</Button>
    </div>
  );
}
