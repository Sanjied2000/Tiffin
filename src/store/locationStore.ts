import { create } from "zustand";
import { persist } from "zustand/middleware";

type LocationState = {
  location: string | null;
  setLocation: (newLocation: string) => void;
  clearLocation: () => void;
};

export const useLocationStore = create<LocationState>()(
  persist(
    (set) => ({
      location: null,
      setLocation: (newLocation) => set({ location: newLocation }),
      clearLocation: () => set({ location: null }),
    }),
    {
      name: "location-storage",
    }
  )
);
