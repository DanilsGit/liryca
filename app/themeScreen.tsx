// Expo

// React

// React Native
import { themesText } from "@/constants/themes";
import { Themes, ThemeText } from "@/constants/themesTypes";
import { fontSizes } from "@/constants/tokens";
import Screen from "@/modules/core/components/Screen";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SheetManager } from "react-native-actions-sheet";

// Hooks

// Definitions
// Components

// Props

// Api

export default function ThemeScreen() {
  const { theme, selectTheme } = useTheme();
  const styles = createStyles(themesText[theme]);
  const router = useRouter();
  const { t } = useTranslation();
  SheetManager.hide("listener-options-sheet");

  const data: Themes[] = ["light", "dark", "quiet"];

  const handleSelectTheme = (theme: Themes) => {
    router.back();
    selectTheme(theme);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.text_title}>Choose your theme</Text>
        <FlatList
          scrollEnabled={false}
          data={data}
          renderItem={({ item }) => (
            <Pressable
              style={styles.button}
              onPress={() => handleSelectTheme(item)}
            >
              <Text style={styles.text}>{t("theme." + item)}</Text>
            </Pressable>
          )}
        />
      </View>
    </Screen>
  );
}

const createStyles = (colorText: ThemeText) =>
  StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
    },
    text_title: {
      fontSize: fontSizes.xl,
      color: colorText.primary,
      fontFamily: "M-PLUS-2-Bold",
    },
    button: {
      padding: 15,
      borderBottomWidth: 2,
      borderBottomColor: colorText.secondary,
    },
    text: {
      fontSize: fontSizes.md,
      color: colorText.secondary,
      fontFamily: "M-PLUS-1p-Regular",
    },
  });
