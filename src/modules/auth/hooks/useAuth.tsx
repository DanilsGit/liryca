import { create } from "zustand";
import * as SecureStorage from "expo-secure-store";
import { getListOfErrors } from "@/modules/core/utils/miscellaneous";
import { loginRequest, registerRequest } from "../api/auth";
import { UserLogin, UserRegister } from "../types/types";

interface User {
  id: string;
  username: string;
  email: string;
  profile_banner: string;
  profile_picture: string;
  role: "user" | "artist";
  token: string;
  version?: number;
}

type Store = {
  user: User | null;
  loadAsyncUser: () => void;
  login: (user: UserLogin) => Promise<string>;
  logout: () => void;
  register: (user: any) => Promise<string>;
  updateV: (v: number) => void;
};

export const useAuth = create<Store>()((set) => ({
  // Get the user from the storage
  user: null,
  login: async (userLogin: UserLogin) => {
    try {
      const res = await loginRequest(userLogin);
      const user = res.data.user;
      const logged = {
        id: user.id,
        username: user.username,
        email: user.email,
        profile_banner: user.profile_banner,
        profile_picture: user.profile_picture,
        role: user.role,
        token: res.data.token,
      };
      console.log(logged);

      await SecureStorage.setItemAsync("user", JSON.stringify(logged));
      set({ user: logged });
      return "success";
    } catch (error) {
      const errorList = getListOfErrors(error.response.data);
      console.log(error.response.data);
      return errorList;
    }
  },
  loadAsyncUser: async () => {
    const user = await SecureStorage.getItemAsync("user");
    set({ user: user ? JSON.parse(user) : null });
  },
  logout: async () => {
    try {
      // token del usuario psarlo por parámetro
      // const token = useAuth.getState().user?.token;
      // await logoutRequest(token);
      await SecureStorage.deleteItemAsync("user");
      set({ user: null });
    } catch (error) {
      const errorList = getListOfErrors(error.response.data);
      console.log(error.response.data);
      return errorList;
    }
  },
  register: async (userRegister: UserRegister) => {
    try {
      const res = await registerRequest(userRegister);
      const user = res.data.user;
      const registered = {
        id: user.id,
        username: user.username,
        email: user.email,
        profile_banner: user.profile_banner,
        profile_picture: user.profile_picture,
        role: user.role,
        token: res.data.token,
      };
      await SecureStorage.setItemAsync("user", JSON.stringify(registered));
      set({ user: registered });
      return "success";
    } catch (error) {
      const errorList = getListOfErrors(error.response.data);
      console.log(error.response.data);
      return errorList;
    }
  },
  updateV: (v: number) => {
    set((state) => ({ user: { ...state.user, version: v } }));
  },
}));
