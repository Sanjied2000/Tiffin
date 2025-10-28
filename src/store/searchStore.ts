import { create } from "zustand";

type SearchState = {
  query: string;
  setQuery: (newQuery: string) => void;
  clearQuery: () => void;
};
export const useSearchStore = create<SearchState>()((set) => ({
  query: "",
  setQuery: (newQuery) => set({ query: newQuery }),
  clearQuery: () => set({ query: "" }),
}));