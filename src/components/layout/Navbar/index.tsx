import clsx from 'clsx';
import React from 'react';
import { LuPanelRightOpen } from 'react-icons/lu';
import { Link, useLocation } from 'react-router-dom';
import { useResponsive } from 'src/hooks';
import { useDashboardsStore, useToggleStore } from 'src/store';
import { navLinks } from './links';

import divider from 'src/assets/images/divider.png';
import logo from 'src/assets/images/fido-biznes-logo.png';

// Определение функционального компонента Navbar
export const Navbar: React.FC = () => {
  const { pathname } = useLocation(); // Получение текущего пути маршрута
  const toggleNavbar = useToggleStore((state) => state.toggleNavbar); // Получение функции переключения состояния навбара из стора
  const { isMobile } = useResponsive(1024); // Определение, является ли устройство мобильным (ширина меньше 1024px)

  const filteredSlots = useDashboardsStore((state) => state.filteredSlots); // Получение фильтрованных слотов из состояния

  // Функция для отрисовки навигационной ссылки
  const renderNavLink = (title: string, link: string, icon: React.ReactNode) => (
    <Link
      key={link}
      to={link}
      onClick={toggleNavbar}
      className={clsx(
        'nav-item flex items-center gap-3 py-2 px-4 rounded-lg transition-all', // Общие стили для всех ссылок
        link === pathname ? 'shadow-md bg-primary text-white font-semibold' : 'text-primary', // Активный стиль для текущего маршрута
      )}
    >
      <span className="p-2">{icon}</span>
      <span>{`${title} ${link == '/' ? `(${filteredSlots.length})` : ''}`}</span>{' '}
      {/* Заголовок ссылки с количеством слотов */}
    </Link>
  );

  return (
    <div className="w-72 bg-white shadow-lg flex flex-col rounded-xl py-6 px-5 relative min-h-[calc(100vh-64px)]">
      <div className="flex lg:justify-center justify-between items-center">
        <img className="max-w-40" src={logo} alt="Logo" /> {/* Логотип */}
        {isMobile && (
          <button
            className="p-2 text-white bg-primary rounded-md cursor-pointer"
            onClick={toggleNavbar}
          >
            <LuPanelRightOpen className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="my-5">
        <img src={divider} alt="Divider" />
      </div>

      <nav className="flex flex-col">
        <h2 className="my-4 font-semibold">Main</h2>
        {navLinks.map(({ title, link, icon }) => renderNavLink(title, link, icon))}{' '}
      </nav>
    </div>
  );
};
