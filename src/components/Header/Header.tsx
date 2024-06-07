import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <NavLink to='/' className='header__title'>
          F5
        </NavLink>
        <nav className='header__nav'>
          <a href='#quests' className='header__nav-item'>
            Квесты
          </a>
          <a href='#aboutUs' className='header__nav-item'>
            О нас
          </a>
          <a href='#contacts' className='header__nav-item'>
            Контакты
          </a>
          <a href='#feedbacks' className='header__nav-item'>
            Отзывы
          </a>
        </nav>
        <a href='tel:+375446666666' className='header__tel'>
          +375 (66) 666-66-66
        </a>
      </div>
    </header>
  );
};
