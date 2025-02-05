import { ISlotItem } from 'src/@types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FilteredSlotsState {
  filteredSlots: ISlotItem[][];
  addFilteredSlots: (newSlots: ISlotItem[]) => void;
}

export const useDashboardsStore = create(
  persist<FilteredSlotsState>(
    (set) => ({
      filteredSlots: [],
      addFilteredSlots: (newSlots) =>
        set((state) => ({
          filteredSlots: [...state.filteredSlots, newSlots],
        })),
    }),
    { name: 'filteredSlots' },
  ),
);
