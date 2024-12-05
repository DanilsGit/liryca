// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import { useTranslation } from "react-i18next";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ButtonRounded from "./ButtonRounded";

import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { CheckBox } from "react-native-elements";
import { useCountries } from "@/modules/core/hooks/useCountries";
import { useRegistrationForm } from "../hooks/useRegistrationForm";
import DatePicker from "@/modules/core/components/DatePicker";

// Hooks

// Definitions

// Components

// Props

// Api
export default function Register() {
  const height = Dimensions.get("window").height;
  const { t } = useTranslation();
  const styles = createStyles(height);

  const { countries, loading } = useCountries();

  const {
    credentials,
    handleChange,
    handleDateChange,
    handleRegister,
    error,
    loading: loadingRegister,
  } = useRegistrationForm();

  const [settingPassword, setSettingPassword] = useState(false);

  return (
    <View style={styles.container}>
      {settingPassword ? (
        <View style={styles.white_panel}>
          <View style={{ gap: 10 }}>
            <Text style={styles.title}>{t("auth.register_password")}</Text>
            <Text style={styles.subTitle}>
              {t("auth.register_password_add")}
            </Text>
            {error && <Text style={styles.text_error}>{error}</Text>}
          </View>
          <View style={styles.input_container_password}>
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry={true}
              value={credentials.password}
              onChangeText={(text) => handleChange("password", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmar contraseña"
              secureTextEntry={true}
              value={credentials.password_confirmation}
              onChangeText={(text) =>
                handleChange("password_confirmation", text)
              }
            />
          </View>
          <ButtonRounded
            handleClick={() => setSettingPassword(false)}
            text={t("auth.back_register")}
          />
          {loadingRegister ? (
            <ButtonRounded handleClick={() => {}} text={t("auth.loading")} />
          ) : (
            <ButtonRounded
              handleClick={handleRegister}
              text={t("auth.end_register")}
            />
          )}
        </View>
      ) : (
        <View style={styles.white_panel}>
          <Text style={styles.title}>{t("auth.register_title")}</Text>
          <View style={styles.input_container}>
            <TextInput
              style={styles.input}
              placeholder="Usuario"
              value={credentials.username}
              onChangeText={(text) => handleChange("username", text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={credentials.email}
              onChangeText={(text) => handleChange("email", text)}
              keyboardType="email-address"
            />

            <DatePicker
              handlePress={() => {
                handleChange("showDatePicker", true);
              }}
              text={credentials.birthday.toLocaleDateString()}
              showPicker={credentials.showDatePicker}
              pickerValue={credentials.birthday}
              handleDateChange={(_, select) => {
                handleDateChange(_, select);
              }}
              styles={styles.input}
            />

            {loading ? (
              <TextInput
                style={styles.input}
                placeholder="País"
                editable={false}
              />
            ) : (
              <View style={styles.picker}>
                <Picker
                  selectedValue={credentials.country}
                  onValueChange={(itemValue) =>
                    handleChange("country", itemValue)
                  }
                >
                  <Picker.Item label="País" value="" />
                  {countries.map((country) => (
                    <Picker.Item
                      key={country.code}
                      label={country.name}
                      value={country.name}
                    />
                  ))}
                </Picker>
              </View>
            )}

            <CheckBox
              title={
                <Text style={styles.label_checkbox}>¿Deseas ser artista?</Text>
              }
              checked={credentials.role}
              onPress={() => handleChange("role", !credentials.role)}
            />
          </View>
          <ButtonRounded
            handleClick={() => setSettingPassword(true)}
            text={t("auth.next")}
          />
        </View>
      )}
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
      borderRadius: 10,
      width: "80%",
      height: height * 0.7,
      padding: 30,
      gap: 20,
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
    input_container_password: {
      flex: 1,
      justifyContent: "center",
      gap: 100,
    },
    label: {
      marginVertical: 10,
    },
    label_checkbox: {
      fontFamily: "M-PLUS-2-Regular",
      marginLeft: 10,
    },
    input: {
      borderBottomWidth: 2,
      borderBottomColor: colors.dark_purple,
      paddingBottom: 10,
    },
    picker: {
      borderBottomWidth: 2,
      borderBottomColor: colors.dark_purple,
    },
    subTitle: {
      fontSize: fontSizes.sm,
      fontFamily: "M-PLUS-2-Regular",
    },
    text_error: {
      color: colors.error,
      fontSize: fontSizes.sm,
      fontFamily: "M-PLUS-2-Regular",
    },
  });
