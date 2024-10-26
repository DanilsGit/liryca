// Expo

// React

// React Native
import { StyleSheet, View } from "react-native";

// Hooks

// Definitions
import Welcome from "../components/Welcome";
import Login from "../components/Login";
import { useTranslation } from "react-i18next";
import TextButton from "../components/TextButton";
import Register from "../components/Register";
import { ImageBackground } from "expo-image";
import { useKeyboard } from "../hooks/useActiveKeyboard";
import { useAuthScreen } from "../hooks/useAuthScreen";

// Components
// Props

// Api

export default function Auth() {
  const { currentScreen, changeLogin, changeRegister, changeForgotPassword } =
    useAuthScreen();

  const { keyboardVisible } = useKeyboard();

  const { t } = useTranslation();

  const styles = createStyles(keyboardVisible);

  return (
    <ImageBackground
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/liryca-c9f2e.appspot.com/o/auth%2Fspace.png?alt=media&token=fc1a9458-f62b-491c-a20e-2eb2d800731c",
      }}
      style={{ flex: 1, position: "absolute", width: "100%", height: "100%" }}
    >
      {currentScreen === "welcome" && (
        <Welcome
          redirectLogin={changeLogin}
          redirectRegister={changeRegister}
        />
      )}
      {currentScreen === "login" && <Login />}
      {currentScreen === "register" && <Register />}
      {currentScreen === "forgotPassword" && <View />}

      {/* Texto flotante en la parte de abajo de las vistas */}
      <TextButton
        text={
          (currentScreen === "login" && t("auth.new_user")) ||
          (currentScreen === "register" && t("auth.have_account")) ||
          ""
        }
        handleClick={
          (currentScreen === "login" && changeRegister) ||
          (currentScreen === "register" && changeLogin) ||
          (() => {})
        }
        containerStyles={styles.register_text}
      />
    </ImageBackground>
  );
}

const createStyles = (keyboardVisible: boolean) =>
  StyleSheet.create({
    register_text: {
      display: keyboardVisible ? "none" : "flex",
      width: "100%",
      position: "absolute",
      bottom: 40,
    },
  });
