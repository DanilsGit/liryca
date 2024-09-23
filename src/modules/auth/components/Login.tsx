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
      banner:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6699f2df-96dc-44e2-ad22-cd1ca9ab29ca/dfjjzid-6ef90540-fd47-41cf-a836-16425a4545b6.png/v1/fill/w_1600,h_676,q_80,strp/cat_banner_by_wholemleko_dfjjzid-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njc2IiwicGF0aCI6IlwvZlwvNjY5OWYyZGYtOTZkYy00NGUyLWFkMjItY2QxY2E5YWIyOWNhXC9kZmpqemlkLTZlZjkwNTQwLWZkNDctNDFjZi1hODM2LTE2NDI1YTQ1NDViNi5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._QbzyJs9gpb516G_oAbBiFtQCBOpZ5Tm-KLS-dOc51s",
      icon: "https://img-9gag-fun.9cache.com/photo/aGyDPdn_460s.jpg",
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
