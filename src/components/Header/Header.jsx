import Menu from '../Menu/Menu';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Button from '../Button/Button';
import { useResize } from '../../hooks/useResize';
import { useEffect, useState } from 'react';
import Burger from '../Burger/Burger';

export default function Header() {
  const navigate = useNavigate();
  const { isScreenMd } = useResize();
  const [isDesktop, setDesktop] = useState(isScreenMd);
  useEffect(() => {
    setDesktop(isScreenMd);
  }, [isScreenMd]);
  return (
    <header className="header">
      <div className="logo">Aleksandr Varvarin</div>
      {isDesktop && <Menu />}
      {!isDesktop && <Burger />}
      <Button className="button-contact" onClick={() => navigate('contacts')} label="Контакты" />
    </header>
  );
}
