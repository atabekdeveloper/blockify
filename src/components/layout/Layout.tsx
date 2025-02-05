import React from 'react';
import { Outlet } from 'react-router-dom';

import { useToggleStore } from 'src/store'; // Импорт состояния управления видимостью Navbar

import { Header } from './Header';
import { Navbar } from './Navbar';

import bg from 'src/assets/images/bg.png'; // Импорт фонового изображения

export const Layout: React.FC = () => {
  const isNavbar = useToggleStore((state) => state.isNavbar); // Чтение состояния видимости Navbar

  return (
    <div className="relative flex min-h-full px-5 py-7">
      {/* Верхний фиксированный блок с фоновым изображением */}
      <div
        className="fixed top-0 left-0 w-full h-[50vh] bg-[#3182CE] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }} // Инлайновое указание фонового изображения
      ></div>

      {/* Нижний фиксированный блок с белым фоном */}
      <div className="fixed bottom-0 left-0 w-full h-[50vh] bg-[#f7fafc]"></div>

      {/* Боковой Navbar, который можно показать/скрыть через состояние */}
      <div
        className={`fixed top-[30px] left-0 transform transition-transform duration-300 ease-in-out z-30 overflow-y-scroll h-screen rounded-xl not-scroll
        ${isNavbar ? 'translate-x-5' : '-translate-x-full'} lg:translate-x-5`} // Анимация появления/скрытия Navbar
      >
        <Navbar />
      </div>

      {/* Основной контент страницы */}
      <main className="relative transition-all duration-[0.2s] w-full min-h-full grow flex flex-col ml-0 lg:ml-[308px]">
        <Header /> {/* Заголовок страницы */}
        <Outlet /> {/* Вложенный маршрут, где рендерятся дочерние компоненты */}
      </main>
    </div>
  );
};
