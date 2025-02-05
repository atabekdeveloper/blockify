import { create } from 'zustand';

interface IToggleState {
  isNavbar: boolean;
  toggleNavbar: () => void;
}

export const useToggleStore = create<IToggleState>((set) => ({
  isNavbar: false,
  toggleNavbar: () => set((state) => ({ isNavbar: !state.isNavbar })),
}));
