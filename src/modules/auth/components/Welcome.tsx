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
      <Image source={require("assets/WavyUp.png")} style={styles.wavy_image} />
      <View style={styles.welcome}>
        <LirycaIcon style={{ width: 80, height: 70 }} />
        <Text style={styles.text}>{t("auth.welcome") + ","}</Text>
        <Text style={styles.large_text}>{t("auth.user")}</Text>
      </View>
      <View style={styles.btn_container}>
        <ButtonShadow handleClick={redirectLogin} text={t("auth.login")} />
        <ButtonRounded handleClick={redirectRegister} text={t("auth.signup")} />
        <Text style={styles.slogan_text}> ¿Quieres escuchar música? </Text>
      </View>
      <Image
        source={require("assets/WavyDown.png")}
        style={styles.wavy_image2}
      />
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      gap: 85,
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    wavy_image: {
      width: 400,
      height: 160,
    },
    wavy_image2: {
      width: 400,
      height: 170,
    },
    welcome: {
      width: "70%",
      gap: 5,
    },
    btn_container: {
      width: "70%",
      gap: 30,
    },
    text: {
      color: colors.white,
      fontSize: fontSizes.xl,
      fontFamily: "M-PLUS-2-Regular",
    },
    large_text: {
      color: colors.white,
      fontSize: fontSizes.xl4,
      fontFamily: "PlayfairDisplay-Regular",
      marginLeft: 0,
      marginTop: -10,
      textShadowColor: colors.white,
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 20,
    },
    slogan_text: {
      color: colors.white,
      fontSize: fontSizes.sm,
      fontFamily: "M-PLUS-2-Regular",
      letterSpacing: 1.5,
      textAlign: "center",
    },
  });
