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
import { UserLogin } from "../types/types";
import { useEffect, useState } from "react";
// Definitions

// Components

// Props

// Api

const useLogin = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { t } = useTranslation();
  const [credentials, setCredentials] = useState<UserLogin>({
    email: "",
    password: "",
    remember: true,
  });

  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 10000);
  }, [error]);

  const handleChange = (field, value) => {
    setCredentials((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleLogin = async () => {
    if (!credentials.email || !credentials.password) {
      return;
    }
    if (credentials.password.length < 8) {
      setError(t("auth.invalid_password"));
      return;
    }
    setLoading(true);
    const res = await login(credentials);
    setLoading(false);
    if (res !== "Unauthorized") setError("Credenciales incorrectas");
  };

  return { handleChange, handleLogin, credentials, loading, error };
};

export default function Login() {
  const height = Dimensions.get("window").height;
  const styles = createStyles(height);
  const { t } = useTranslation();
  const { handleChange, handleLogin, credentials, loading, error } = useLogin();

  return (
    <View style={styles.container}>
      <View style={styles.white_panel}>
        <LirycaIcon style={styles.liryca_icon} />
        <View>
          <View style={styles.overPanel}>
            <Text style={styles.title}>{t("auth.welcome")}</Text>
            {error && <Text style={styles.text_error}>{error}</Text>}
            <View style={styles.input_container}>
              <InputWithUserIcon
                handleType={handleChange}
                value={credentials.email}
              />
              <InputPassword
                handleType={handleChange}
                value={credentials.password}
              />
              <TextButton
                handleClick={handleLogin}
                text={t("auth.forgot_password")}
                textStyles={{ color: colors.dark_purple }}
              />
            </View>
            {loading ? (
              <ButtonRounded handleClick={() => {}} text={t("auth.loading")} />
            ) : (
              <ButtonRounded handleClick={handleLogin} text={t("auth.login")} />
            )}
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
      fontSize: fontSizes.xl3,
      fontFamily: "M-PLUS-2-Bold",
    },
    text_error: {
      color: colors.error,
      fontSize: fontSizes.sm,
      fontFamily: "M-PLUS-1p-Regular",
    },
    input_container: {
      flex: 1,
      justifyContent: "center",
      gap: 50,
    },
  });
