// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";

// Hooks

// Definitions

// Components

// Props
interface Props {
  onPress: () => void;
}
// Api

export default function PostItButton({ onPress }: Props) {
  const styles = createStyles();
  const { t } = useTranslation();

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{t("post.post_button")}</Text>
      </View>
    </Pressable>
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.purple,
      padding: 5,
      paddingHorizontal: 15,
      borderRadius: 20,
    },
    text: {
      color: colors.white,
      fontFamily: "M-PLUS-2-Bold",
      width: 80,
      textAlign: "center",
      fontSize: fontSizes.lg,
    },
  });
