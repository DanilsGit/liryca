// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import { useTranslation } from "react-i18next";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ActionSheet, { SheetProps } from "react-native-actions-sheet";

// Hooks

// Definitions

// Components

// Props

// Api

export default function ListenerOptionsSheet(
  props: SheetProps<"listener-options-sheet">,
) {
  const styles = createStyles();
  const { t } = useTranslation();
  return (
    <ActionSheet
      gestureEnabled
      indicatorStyle={{ width: 50 }}
      containerStyle={styles.sheet}
    >
      <View style={styles.container}>
        <Pressable onPress={props.payload?.goToEditProfile}>
          <Text style={styles.text}>Editar perfil</Text>
        </Pressable>
        <Pressable onPress={props.payload?.goToLanguageScreen}>
          <Text style={styles.text}>{t("optionsSheet.language")}</Text>
        </Pressable>
        <Pressable onPress={props.payload?.goToThemeScreen}>
          <Text style={styles.text}>{t("optionsSheet.theme")}</Text>
        </Pressable>
        <Pressable onPress={props.payload?.logout}>
          <Text style={styles.text}>{t("optionsSheet.logout")}</Text>
        </Pressable>
      </View>
    </ActionSheet>
  );
}

const createStyles = () =>
  StyleSheet.create({
    sheet: {
      backgroundColor: colors.dark_purple,
      paddingVertical: 16,
    },
    container: {
      padding: 16,
      paddingVertical: 10,
      gap: 25,
    },
    text: {
      color: colors.white,
      fontFamily: "M-PLUS-2-Regular",
      fontSize: fontSizes.md,
    },
  });
