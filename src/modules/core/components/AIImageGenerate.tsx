// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useTheme } from "../hooks/useTheme";
import { themesText } from "@/constants/themes";
import TextButton from "@/modules/auth/components/TextButton";
import { ThemeText } from "@/constants/themesTypes";

// Hooks

// Definitions

// Components

// Props
interface Props {
  prompt: string;
  setPrompt: (text: string) => void;
  generateImageAI: () => void;
  loadingAI: boolean;
}
// Api

export default function AIImageGenerate({
  prompt,
  setPrompt,
  generateImageAI,
  loadingAI,
}: Props) {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);
  return (
    <View style={styles.AI_container}>
      <Text style={styles.AI_button_text}>
        Ahora puedes generar portadas con IA
      </Text>
      <TextInput
        placeholder="Write a prompt"
        style={styles.AI_text_area}
        placeholderTextColor={colors.white}
        value={prompt}
        multiline
        onChangeText={(text) => setPrompt(text)}
      />
      <View style={styles.AI_button}>
        <TextButton
          text={loadingAI ? "Generando..." : "Generar imagen"}
          handleClick={loadingAI ? () => {} : generateImageAI}
          textStyles={styles.AI_button_text}
        />
      </View>
    </View>
  );
}

const createStyles = (colorText: ThemeText) =>
  StyleSheet.create({
    AI_text: {
      fontSize: fontSizes.lg,
      color: colorText.secondary,
      fontFamily: "M-PLUS-2-Bold",
    },
    AI_container: {
      backgroundColor: colors.medium_purple,
      padding: 10,
      borderRadius: 10,
    },
    AI_text_area: {
      height: 80,
      textAlignVertical: "bottom",
      borderColor: colorText.primary,
      borderBottomWidth: 1,
      marginVertical: 5,
      padding: 10,
      fontFamily: "M-PLUS-2-Regular",
      color: colors.white,
    },
    AI_button: {
      backgroundColor: colors.dark_purple,
      padding: 10,
      borderRadius: 10,
    },
    AI_button_text: {
      fontSize: fontSizes.md,
      color: colors.white,
      fontFamily: "M-PLUS-2-Bold",
    },
  });
