import { useState } from "react";

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
