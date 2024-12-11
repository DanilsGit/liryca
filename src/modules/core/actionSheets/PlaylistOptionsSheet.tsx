// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { useTranslation } from "react-i18next";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ActionSheet, { SheetProps } from "react-native-actions-sheet";

// Hooks

// Definitions

// Components

// Props

// Api

export default function PlaylistOptionsSheet(
  props: SheetProps<"playlist-options-sheet">
) {
  const styles = createStyles();
  const { t } = useTranslation();
  const { user } = useAuth();
  return (
    <ActionSheet
      gestureEnabled
      indicatorStyle={{ width: 50 }}
      containerStyle={styles.sheet}
    >
      <View style={styles.container}>
        {props.payload?.owner === user?.id && (
          <>
            <Pressable onPress={props.payload?.editPlaylist}>
              <Text style={styles.text}>{t("optionsArtist.edit")}</Text>
            </Pressable>
            <Pressable onPress={props.payload?.invitePlaylist}>
              <Text style={styles.text}>{t("optionsArtist.invite")}</Text>
            </Pressable>
          </>
        )}
        <Pressable onPress={props.payload?.postPlaylist}>
          <Text style={styles.text}>{t("optionsArtist.post")}</Text>
        </Pressable>
        <Pressable onPress={props.payload?.sharePlaylist}>
          <Text style={styles.text}>{t("optionsArtist.share")}</Text>
        </Pressable>
        <Pressable onPress={props.payload?.likePlaylist}>
          <Text style={styles.text}>{t("optionsArtist.like")}</Text>
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
