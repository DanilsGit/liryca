// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ActionSheet, { SheetProps } from "react-native-actions-sheet";
import { useTranslation } from "react-i18next";


// Hooks

// Definitions

// Components

// Props

// Api

export default function PublicArtistOptionsSheet(
  props: SheetProps<"publicArtist-options-sheet">,
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
        <Pressable onPress={props.payload?.postPublicArtist}>
          <Text style={styles.text}>{t("optionsArtist.post")}</Text>
        </Pressable>
        <Pressable onPress={props.payload?.sharePublicArtist}>
          <Text style={styles.text}>{t("optionsArtist.share")}</Text>
        </Pressable>
        <Pressable onPress={props.payload?.followPublicArtist}>
          <Text style={styles.text}>{t("optionsArtist.follow")}</Text>
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
