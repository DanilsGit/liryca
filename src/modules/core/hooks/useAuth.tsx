import { create } from "zustand";

type Store = {
  user: any;
  login: (user: any) => void;
  logout: () => void;
  register: (user: any) => void;
};

export const useAuth = create<Store>()((set) => ({
  user: {
    id: 1,
    name: "Gato_feliz01421",
    email: "johndoe@gmail.com",
    banner: "https://i.redd.it/6uoazfklyo7b1.jpg",
    icon: "https://preview.redd.it/cat-standing-up-crying-v0-dtmdh6nbxsx81.png?auto=webp&s=a73aac17068f724773facf9a2ce54bc0342cf30e",
    followers: 100,
    following: 200,
    playlist: 10,
    liked: 3,
    role: "listener",
    token: "",
  },
  login: (user: any) => {
    // Call the login API
    set({ user });
  },
  logout: () => {
    set({ user: null });
  },
  register: (user: any) => {
    // Call the register API
    set({ user });
  },
}));
