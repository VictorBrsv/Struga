import React from 'react';
import styles from './Header.module.scss';
import logo from './../../assets/logo.png';

type NavElementProps = {
  title: string;
};

const NavElement: React.FC<NavElementProps> = ({ title }) => {
  return (
    <div className={styles.nav_element}>
      <span>{title}</span>
    </div>
  );
};

const NavElements = [
  'О НАС',
  'КАТАЛОГ',
  'ОТЗЫВЫ',
  'ОПЛАТА И ДОСТАВКА',
  'КОНТАКТЫ',
];

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {NavElements.map((title, index) => (
          <React.Fragment key={title}>
            {index === 3 && (
              <div className={styles.logo}>
                <img src={logo} alt='logo' />
              </div>
            )}
            <NavElement title={title} />
            {index !== NavElements.length - 1 && index !== 2 && (
              <div className={styles.ellipse}></div>
            )}
          </React.Fragment>
        ))}
      </nav>
    </header>
  );
};
