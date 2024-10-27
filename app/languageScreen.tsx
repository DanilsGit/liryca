// Expo

// React

// React Native
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import { fontSizes } from "@/constants/tokens";
import Screen from "@/modules/core/components/Screen";
import { useTheme } from "@/modules/core/hooks/useTheme";
import i18next, { LanguageResources } from "@/services/i18next";
import { useRouter } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SheetManager } from "react-native-actions-sheet";

// Hooks

// Definitions
import languagesList from "@/services/languagesList.json";
// Components

// Props

// Api

export default function LanguageScreen() {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);
  const router = useRouter();
  SheetManager.hide("listener-options-sheet");

  const handleSelectLanguage = (language: string) => {
    i18next.changeLanguage(language);
    router.back();
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.text_title}>Choose your language</Text>
        <FlatList
          style={{ marginVertical: 10 }}
          scrollEnabled={false}
          data={Object.keys(LanguageResources)}
          renderItem={({ item }) => (
            <Pressable
              style={styles.button}
              onPress={() => handleSelectLanguage(item)}
            >
              <Text style={styles.text}>{languagesList[item].name}</Text>
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
