// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import { InputUserIcon } from "@/modules/core/components/Icons";
import { StyleSheet, TextInput, View } from "react-native";

// Hooks

// Definitions

// Components

// Props

// Api

export default function InputWithUserIcon() {
  const styles = createStyles();

  return (
    <View style={styles.input_container}>
      <InputUserIcon />
      <TextInput style={styles.input} placeholder="Correo electrónico" />
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
