// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import { useTranslation } from "react-i18next";
import {
  Button,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ButtonRounded from "./ButtonRounded";
import { useCountries, useRegistrationForm } from "../hooks/custom-hooks";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

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

  const { credentials, handleChange, handleDateChange, handleRegister } =
    useRegistrationForm();

  const [settingPassword, setSettingPassword] = useState(false);

  return (
    <View style={styles.container}>
      {settingPassword ? (
        <View style={styles.white_panel}>
          <View style={{ gap: 20 }}>
            <Text style={styles.title}>{t("auth.register_password")}</Text>
            <Text style={styles.subTitle}>
              {t("auth.register_password_add")}
            </Text>
          </View>
          <View style={styles.input_container_password}>
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry
              value={credentials.password}
              onChangeText={(text) => handleChange("password", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmar contraseña"
              secureTextEntry
              value={credentials.confirmPassword}
              onChangeText={(text) => handleChange("confirmPassword", text)}
            />
          </View>
          <ButtonRounded
            handleClick={handleRegister}
            text={t("auth.end_register")}
          />
        </View>
      ) : (
        <View style={styles.white_panel}>
          <Text style={styles.title}>{t("auth.register_title")}</Text>
          <View style={styles.input_container}>
            <TextInput
              style={styles.input}
              placeholder="Usuario"
              value={credentials.name}
              onChangeText={(text) => handleChange("name", text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={credentials.email}
              onChangeText={(text) => handleChange("email", text)}
              keyboardType="email-address"
            />

            <View>
              <Pressable onPress={() => handleChange("showDatePicker", true)}>
                <View style={styles.input}>
                  <Text>{credentials.birthdate.toLocaleDateString()}</Text>
                </View>
              </Pressable>
            </View>

            {credentials.showDatePicker && (
              <DateTimePicker
                value={credentials.birthdate}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}

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
  });
