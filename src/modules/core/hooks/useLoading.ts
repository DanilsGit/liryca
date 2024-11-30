import { create } from "zustand";
type Store = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const useLoading = create<Store>()((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
}));
