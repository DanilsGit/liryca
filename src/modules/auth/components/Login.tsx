// Expo

// React

// React Native
import { Dimensions, StyleSheet, Text, View } from "react-native";

// Hooks
import { useAuth } from "../hooks/useAuth";
import ButtonRounded from "./ButtonRounded";
import { useTranslation } from "react-i18next";
import { colors, fontSizes } from "@/constants/tokens";
import { LirycaIcon } from "@/modules/core/components/Icons";
import InputWithUserIcon from "./InputWithUserIcon";
import InputPassword from "./InputPassword";
import TextButton from "./TextButton";
// Definitions

// Components

// Props

// Api

export default function Login() {
  const height = Dimensions.get("window").height;
  const styles = createStyles(height);
  const { t } = useTranslation();
  const { login } = useAuth();

  const handleLogin = () => {
    const user = {
      id: 1,
      name: "Gato_feliz01421",
      email: "johndoe@gmail.com",
      banner: "https://i.redd.it/6uoazfklyo7b1.jpg",
      icon: "https://preview.redd.it/cat-standing-up-crying-v0-dtmdh6nbxsx81.png?auto=webp&s=a73aac17068f724773facf9a2ce54bc0342cf30e",
      followers: 2,
      following: 3,
      playlist: 10,
      liked: 3,
      role: "listener",
      token: "",
    };
    login(user);
  };

  return (
    <View style={styles.container}>
      <View style={styles.white_panel}>
        <LirycaIcon style={styles.liryca_icon} />
        <View>
          <View style={styles.overPanel}>
            <Text style={styles.title}>{t("auth.welcome")}</Text>
            <View style={styles.input_container}>
              {/* TODO: UTILIZAR CREDENCIALES */}
              <InputWithUserIcon />
              <InputPassword />
              <TextButton
                handleClick={handleLogin}
                text={t("auth.forgot_password")}
                textStyles={{ color: colors.dark_purple }}
              />
            </View>
            <ButtonRounded handleClick={handleLogin} text={t("auth.login")} />
          </View>
        </View>
      </View>
    </View>
  );
}

const createStyles = (height: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    white_panel: {
      backgroundColor: colors.white,
      zIndex: 1,
      borderRadius: 10,
      width: "80%",
      height: height * 0.5,
    },
    liryca_icon: {
      width: 180,
      height: 180,
      position: "absolute",
      top: "-30%",
      left: "50%",
      transform: [{ translateX: -90 }],
      zIndex: 0,
    },
    overPanel: {
      backgroundColor: colors.white,
      borderRadius: 10,
      width: "100%",
      height: "100%",
      padding: 20,
      justifyContent: "space-between",
    },
    title: {
      fontSize: fontSizes.xl2,
      fontFamily: "M-PLUS-2-Bold",
    },
    input_container: {
      flex: 1,
      justifyContent: "center",
      gap: 30,
    },
  });
