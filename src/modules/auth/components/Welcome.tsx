// Expo

// React

// React Native
import { Image, StyleSheet, Text, View } from "react-native";

// Hooks

// Definitions
import ButtonRounded from "../components/ButtonRounded";
import ButtonShadow from "../components/ButtonShadow";
import { LirycaIcon } from "@/modules/core/components/Icons";
import { colors, fontSizes } from "@/constants/tokens";
import { useTranslation } from "react-i18next";

// Components

// Props
interface Props {
  redirectLogin: () => void;
  redirectRegister: () => void;
}
// Api

export default function Welcome({ redirectLogin, redirectRegister }: Props) {
  const styles = createStyles();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <LirycaIcon style={{ width: 70, height: 60 }} />
        <Text style={styles.text}>{t("auth.welcome") + ","}</Text>
        <Text style={styles.large_text}>{t("auth.user")}</Text>
      </View>
      <View style={styles.btn_container}>
        <ButtonShadow handleClick={redirectLogin} text={t("auth.login")} />
        <ButtonRounded handleClick={redirectRegister} text={t("auth.signup")} />
      </View>
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      gap: 80,
      justifyContent: "center",
      alignItems: "center",
    },
    welcome: {
      width: "80%",
    },
    btn_container: {
      width: "60%",
      gap: 20,
    },
    text: {
      color: colors.white,
      fontSize: fontSizes.lg,
      fontFamily: "M-PLUS-2-Regular",
    },
    large_text: {
      color: colors.white,
      fontSize: fontSizes.xl4,
      fontFamily: "PlayfairDisplay-Regular",
      marginLeft: 10,
      textShadowColor: "#fff",
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
    },
  });
