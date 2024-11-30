// Expo

// React

// React Native
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import { colors, fontSizes } from "@/constants/tokens";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { useTranslation } from "react-i18next";
import { Pressable, StyleSheet, Text, View } from "react-native";

// Hooks

// Definitions

// Components

// Props
interface Props {
  follow: boolean;
  handleFollow: () => void;
}
// Api

export default function FollowButton({ follow, handleFollow }: Props) {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);
  const { t } = useTranslation();
  return (
    <Pressable onPress={handleFollow}>
      {follow ? (
        <View style={styles.stats_followTrue}>
          <Text style={styles.stats_follow_textTrue}>
            {t("artist_public_profile.following")}
          </Text>
        </View>
      ) : (
        <View style={styles.stats_follow}>
          <Text style={styles.stats_follow_text}>
            {t("artist_public_profile.follow")}
          </Text>
        </View>
      )}
    </Pressable>
  );
}

const createStyles = (colorText: ThemeText) =>
  StyleSheet.create({
    stats_follow_text: {
      color: colorText.primary,
      fontSize: fontSizes.md,
      fontFamily: "M-PLUS-2-Bold",
    },
    stats_follow: {
      borderWidth: 2,
      borderColor: colorText.primary,
      height: 35,
      width: 110,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
      borderRadius: 100,
    },
    stats_followTrue: {
      borderWidth: 2,
      backgroundColor: colorText.secondary,
      borderColor: colorText.secondary,
      height: 30,
      width: 110,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
      borderRadius: 100,
    },
    stats_follow_textTrue: {
      color: colors.black,
      fontSize: fontSizes.md,
      fontFamily: "M-PLUS-2-Bold",
    },
  });
