import React from 'react';
import { LuPanelLeftOpen } from 'react-icons/lu';
import { Link, useLocation } from 'react-router-dom';

import { useToggleStore } from 'src/store';

import { navLinks } from '../Navbar/links';

import avatar from 'src/assets/images/avatar.png';

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  const toggleNavbar = useToggleStore((state) => state.toggleNavbar);

  // Получение заголовка страницы
  const currentTitle = navLinks.find((el) => el.link === pathname)?.title;

  return (
    <header className="flex items-center justify-between w-full py-4 text-white">
      <div className="flex gap-5 items-center">
        {/* Кнопка открытия навбара */}
        <button
          className="z-20 p-2 text-white bg-primary rounded-md lg:hidden cursor-pointer"
          onClick={toggleNavbar}
        >
          <LuPanelLeftOpen className="w-5 h-5" />
        </button>

        {/* Навигационные пути и заголовки */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-200">
              Main
            </Link>
            {currentTitle && (
              <>
                <span>/</span>
                <span>{currentTitle}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Профиль */}
      <button className="flex items-center gap-2">
        <span>James Blackwell</span>
        <img className="max-w-10" src={avatar} alt="John Smith" />
      </button>
    </header>
  );
};
