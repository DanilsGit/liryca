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
interface Props {
  handleType: (field, value) => void;
  value: string;
}
// Api

export default function InputWithUserIcon({ handleType, value }: Props) {
  const styles = createStyles();

  return (
    <View style={styles.input_container}>
      <InputUserIcon />
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        placeholder="Correo electrónico"
        onChangeText={(text) => handleType("email", text)}
        value={value}
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
