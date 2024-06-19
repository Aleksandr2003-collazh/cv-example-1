import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
  const MENU = [
    { title: 'На главную', to: '/' },
    { title: 'Работы', to: '/works' },
    { title: 'Отзывы', to: '/testimonials' },
    { title: 'Блог', to: '/blog' },
  ];
  return (
    <ul className="menu">
      {MENU.map(({ title, to }, i) => (
        <Link key={`${i}-menu-item`} to={to}>
          {title}
        </Link>
      ))}
    </ul>
  );
}
