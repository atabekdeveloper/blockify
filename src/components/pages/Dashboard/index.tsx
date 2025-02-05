import React from 'react';
import { ISlotItem } from 'src/@types'; // Импорт интерфейса для описания элемента слота
import { blockImages } from 'src/data';
import { useDashboardsStore } from 'src/store'; // Подключение стора для работы с состоянием слотов

export const Dashboard: React.FC = () => {
  const filteredSlots = useDashboardsStore((state) => state.filteredSlots); // Получение фильтрованных слотов из состояния

  // Функция поиска элемента слота по его идентификатору
  const findSlotItem = (arr: ISlotItem[], slot: string) => {
    return arr.find((el) => el.slot === slot)?.item;
  };

  // Функция поиска изображения по идентификатору элемента
  const findBlockImage = (item: string) => {
    return blockImages.find((image) => image.id === item)?.img;
  };

  return (
    <>
      {filteredSlots.map((slot, index) => (
        <div className="flex flex-col gap-4" key={index}>
          <h2 className="pt-4 pb-2 font-medium text-black border-b border-gray-400 border-dashed">
            Dashboard {index + 1}
          </h2>

          {/* Первая строка слотов */}
          <div className="flex flex-wrap gap-4">
            <div
              className="flex-1 h-[200px] rounded-lg slot min-w-[200px] border border-dashed border-gray-400"
              data-swapy-slot="n1"
            >
              {/* Отображение изображения, если найден соответствующий элемент */}
              {findSlotItem(slot, 'n1') && (
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={findBlockImage(`${findSlotItem(slot, 'n1')}`)}
                  alt={`Block image ${index}`}
                />
              )}
            </div>
            <div
              className="flex-1 h-[200px] rounded-lg slot min-w-[200px] border border-dashed border-gray-400"
              data-swapy-slot="n2"
            >
              {findSlotItem(slot, 'n2') && (
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={findBlockImage(`${findSlotItem(slot, 'n2')}`)}
                  alt={`Block image ${index}`}
                />
              )}
            </div>
            <div
              className="flex-1 h-[200px] rounded-lg slot min-w-[200px] border border-dashed border-gray-400"
              data-swapy-slot="n3"
            >
              {findSlotItem(slot, 'n3') && (
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={findBlockImage(`${findSlotItem(slot, 'n3')}`)}
                  alt={`Block image ${index}`}
                />
              )}
            </div>
          </div>

          {/* Вторая строка слотов */}
          <div className="flex flex-wrap gap-4">
            <div
              className="flex-2 h-[200px] rounded-lg slot min-w-[300px] border border-dashed border-gray-400"
              data-swapy-slot="n4"
            >
              {findSlotItem(slot, 'n4') && (
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={findBlockImage(`${findSlotItem(slot, 'n4')}`)}
                  alt={`Block image ${index}`}
                />
              )}
            </div>
            <div
              className="flex-1 h-[200px] rounded-lg slot min-w-[150px] border border-dashed border-gray-400"
              data-swapy-slot="n5"
            >
              {findSlotItem(slot, 'n5') && (
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={findBlockImage(`${findSlotItem(slot, 'n5')}`)}
                  alt={`Block image ${index}`}
                />
              )}
            </div>
            <div
              className="flex-1 h-[200px] rounded-lg slot min-w-[150px] border border-dashed border-gray-400"
              data-swapy-slot="n6"
            >
              {findSlotItem(slot, 'n6') && (
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={findBlockImage(`${findSlotItem(slot, 'n6')}`)}
                  alt={`Block image ${index}`}
                />
              )}
            </div>
          </div>

          {/* Третья строка слотов */}
          <div className="flex flex-wrap gap-4">
            <div
              className="flex-1 h-[200px] rounded-lg slot min-w-[200px] border border-dashed border-gray-400"
              data-swapy-slot="n7"
            >
              {findSlotItem(slot, 'n7') && (
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={findBlockImage(`${findSlotItem(slot, 'n7')}`)}
                  alt={`Block image ${index}`}
                />
              )}
            </div>
            <div
              className="flex-2 h-[200px] rounded-lg slot min-w-[300px] border border-dashed border-gray-400"
              data-swapy-slot="n8"
            >
              {findSlotItem(slot, 'n8') && (
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={findBlockImage(`${findSlotItem(slot, 'n8')}`)}
                  alt={`Block image ${index}`}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
