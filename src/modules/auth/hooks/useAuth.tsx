import { create } from "zustand";
import * as SecureStorage from "expo-secure-store";

interface User {
  id: number;
  name: string;
  email: string;
  banner: string;
  icon: string;
  followers: number;
  following: number;
  playlist: number;
  liked: number;
  role: "listener" | "artist";
  token: string;
}

type Store = {
  user: User | null;
  isLoading: boolean;
  loadAsyncUser: () => void;
  login: (user: any) => void;
  logout: () => void;
  register: (user: any) => void;
};

export const useAuth = create<Store>()((set) => ({
  // Get the user from the storage
  user: null,
  isLoading: false,
  login: async (user: User) => {
    set({ isLoading: true });
    // todo: call the login API
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Save the user to the store
    await SecureStorage.setItemAsync("user", JSON.stringify(user));
    set({ user });
    set({ isLoading: false });
  },
  loadAsyncUser: async () => {
    const user = await SecureStorage.getItemAsync("user");
    set({ user: user ? JSON.parse(user) : null });
  },
  logout: () => {
    SecureStorage.deleteItemAsync("user");
    set({ user: null });
  },
  register: (user: User) => {
    // Call the register API
    set({ user });
  },
}));
