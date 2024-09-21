// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import { InputPasswordIcon } from "@/modules/core/components/Icons";
import { StyleSheet, Text, TextInput, View } from "react-native";

// Hooks

// Definitions

// Components

// Props

// Api

export default function InputPassword() {
  const styles = createStyles();

  return (
    <View style={styles.input_container}>
      <InputPasswordIcon />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
      />
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    input_container: {
      flexDirection: "row",
      borderBottomColor: colors.dark_purple,
      paddingBottom: 10,
      gap: 20,
      borderBottomWidth: 1,
    },
    input: {
      flex: 1,
      fontSize: fontSizes.md,
    },
  });
