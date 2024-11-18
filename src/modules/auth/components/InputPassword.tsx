// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import { InputPasswordIcon } from "@/modules/core/components/Icons";
import { StyleSheet, TextInput, View } from "react-native";

// Hooks

// Definitions

// Components

// Props
interface Props {
  handleType: (field, value) => void;
  value: string;
}
// Api

export default function InputPassword({ handleType, value }: Props) {
  const styles = createStyles();

  return (
    <View style={styles.input_container}>
      <InputPasswordIcon />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={(text) => handleType("password", text)}
        value={value}
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
