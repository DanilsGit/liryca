// Expo

// React

// React Native
import { Dimensions, Image, StyleSheet, View } from "react-native";

// Hooks

// Definitions
import { useState } from "react";
import Welcome from "../components/Welcome";
import Login from "../components/Login";
import { useTranslation } from "react-i18next";
import TextButton from "../components/TextButton";
import Register from "../components/Register";
import { useAuthScren } from "../hooks/custom-hooks";

// Components

// Props

// Api

export default function Auth() {
  const { currentScreen, changeLogin, changeRegister, changeForgotPassword } =
    useAuthScren();

  const { t } = useTranslation();

  const [width, height] = [
    Dimensions.get("window").width,
    Dimensions.get("window").height,
  ];

  const styles = createStyles(height);

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/liryca-c9f2e.appspot.com/o/auth%2Fspace.png?alt=media&token=fc1a9458-f62b-491c-a20e-2eb2d800731c",
        }}
        style={{ flex: 1, position: "absolute", width, height }}
        resizeMode="repeat"
      />
      {currentScreen === "welcome" && (
        <Welcome
          redirectLogin={changeLogin}
          redirectRegister={changeRegister}
        />
      )}
      {currentScreen === "login" && <Login />}
      {currentScreen === "register" && <Register />}
      {currentScreen === "forgotPassword" && <View />}

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
    </View>
  );
}

const createStyles = (height: number) =>
  StyleSheet.create({
    register_text: {
      position: "absolute",
      bottom: height * 0.05,
      width: "100%",
    },
  });
