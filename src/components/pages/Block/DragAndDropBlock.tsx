import React, { useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { blockImages } from 'src/data'; // Массив изображений для отображения и перетаскивания
import { useDashboardsStore } from 'src/store'; // Состояние для управления слотами
import { createSwapy, Swapy } from 'swapy'; // Легковесная библиотека для drag-and-drop операций

interface ISlotItem {
  slot: string;
  item: string;
}

const DragAndDropBlock: React.FC = () => {
  const swapyRef = useRef<Swapy | null>(null); // Хранение экземпляра Swapy
  const containerRef = useRef<HTMLDivElement>(null); // Ссылка на контейнер блоков
  const [filteredSlots, setFilteredSlots] = useState<ISlotItem[]>([]); // Состояние для сохранённых слотов
  const [hasItemsInSlots, setHasItemsInSlots] = useState<boolean>(false); // Проверка наличия элементов в слотах
  const addFilteredSlots = useDashboardsStore((state) => state.addFilteredSlots); // Функция обновления стора

  const notify = () => toast.success('Saved successfully'); // Уведомление о сохранении

  useEffect(() => {
    if (containerRef.current) {
      // Инициализация swapy для drag-and-drop
      swapyRef.current = createSwapy(containerRef.current, { swapMode: 'drop' });

      // Обработка события завершения swap'а
      swapyRef.current.onSwapEnd((event) => {
        const slotsWithItems = event.slotItemMap.asArray.filter(({ slot }: { slot: string }) =>
          slot.startsWith('n'),
        );

        setFilteredSlots(slotsWithItems);
        setHasItemsInSlots(slotsWithItems.some(({ item }) => Boolean(item)));
      });
    }

    // Очистка swapy при размонтировании компонента
    return () => {
      swapyRef.current?.destroy();
    };
  }, []);

  const handleSave = () => {
    addFilteredSlots(filteredSlots); // Сохранение новых данных
    notify(); // Вызов уведомления
  };

  return (
    <div className="w-full flex flex-col gap-4" ref={containerRef}>
      <h2 className="text-white uppercase">Images</h2>
      <ul className="grid grid-cols-4 gap-4">
        {/* Отображение всех доступных для перемещения блоков */}
        {blockImages.map((el) => (
          <li
            key={el.id}
            data-swapy-slot={el.id}
            className="w-full h-10 border border-dashed rounded-lg border-gray-400"
          >
            <div className="w-full h-full cursor-move" data-swapy-item={el.id}>
              <img className="w-full h-full object-cover rounded-lg" src={el.img} alt={el.title} />
            </div>
          </li>
        ))}
      </ul>
      <h2 className="text-white uppercase">Block</h2>
      {/* Слоты для дропа элементов */}
      <div className="border border-dashed border-gray-400 rounded-lg flex flex-col gap-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 h-[200px] rounded-lg slot min-w-[200px]" data-swapy-slot="n1" />
          <div className="flex-1 h-[200px] rounded-lg slot min-w-[200px]" data-swapy-slot="n2" />
          <div className="flex-1 h-[200px] rounded-lg slot min-w-[200px]" data-swapy-slot="n3" />
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex-2 h-[200px] rounded-lg slot min-w-[300px]" data-swapy-slot="n4" />
          <div className="flex-1 h-[200px] rounded-lg slot min-w-[150px]" data-swapy-slot="n5" />
          <div className="flex-1 h-[200px] rounded-lg slot min-w-[150px]" data-swapy-slot="n6" />
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 h-[200px] rounded-lg slot min-w-[200px]" data-swapy-slot="n7" />
          <div className="flex-2 h-[200px] rounded-lg slot min-w-[300px]" data-swapy-slot="n8" />
        </div>
      </div>
      <ToastContainer /> {/* Контейнер для уведомлений */}
      <button
        className="bg-primary text-white py-2 rounded-lg cursor-pointer transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={!hasItemsInSlots} // Блокировка кнопки, если нет элементов
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export { DragAndDropBlock };
