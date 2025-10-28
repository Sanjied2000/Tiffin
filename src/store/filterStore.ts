import { create } from "zustand";


//import { useFilterStore } from "@/store/filterStore";
//const { {for getting the value=>}price, vegeterian,{to Change=>} setPrice, toggleVegeterian } = useFilterStore();

interface FilterState {
  price: number;
  vegeterian: boolean;
  protin_rich: boolean;
  gluten_free: boolean;
  dairy: boolean;
  eggs: boolean;
  nuts: boolean;

  setPrice: (value: number) => void;
  toggleVegeterian: () => void;
  toggleProtinRich: () => void;
  toggleGlutenFree: () => void;
  toggleDairy: () => void;
  toggleEggs: () => void;
  toggleNuts: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  price: 100,
  vegeterian: false,
  protin_rich: false,
  gluten_free: false,
  dairy: false,
  eggs: false,
  nuts: false,

  setPrice: (value) => set({ price: value }),

  toggleVegeterian: () =>
    set((state) => ({ vegeterian: !state.vegeterian })),

  toggleProtinRich: () =>
    set((state) => ({ protin_rich: !state.protin_rich })),

  toggleGlutenFree: () =>
    set((state) => ({ gluten_free: !state.gluten_free })),

  toggleDairy: () =>
    set((state) => ({ dairy: !state.dairy })),

  toggleEggs: () =>
    set((state) => ({ eggs: !state.eggs })),

  toggleNuts: () =>
    set((state) => ({ nuts: !state.nuts })),
}));
