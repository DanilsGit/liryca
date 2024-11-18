import { useState } from "react";
import { AuthScreen } from "../types/types";

export const useAuthScreen = () => {
  const [currentScreen, setCurrentScreen] = useState<AuthScreen>("welcome");

  const changeLogin = () => setCurrentScreen("login");
  const changeRegister = () => setCurrentScreen("register");
  const changeForgotPassword = () => setCurrentScreen("forgotPassword");
  const changeSetPassword = () => setCurrentScreen("setPassword");

  return {
    currentScreen,
    changeLogin,
    changeRegister,
    changeForgotPassword,
    changeSetPassword,
  };
};
