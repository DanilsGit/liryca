// Expo

// React

// React Native
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import { fontSizes } from "@/constants/tokens";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import HeaderProfiles from "@/modules/core/components/HeaderProfiles";
import { AddSquareIcon } from "@/modules/core/components/Icons";
import LargeIconButton from "@/modules/core/components/LargeIconButton";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import AlbumList from "@/modules/core/components/AlbumList";
import { useArtistAlbums } from "../hooks/useArtistAlbums";

// Hooks

// Definitions

// Components

// Props

export default function ArtistProfile() {
  const { user } = useAuth();
  const { t } = useTranslation();
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);
  const router = useRouter();
  const { albums, handleAddAlbum } = useArtistAlbums();

  return (
    <View style={{ flex: 1 }}>
      <HeaderProfiles />
      <View style={{ gap: 20, paddingHorizontal: 20 }}>
        <Text style={styles.text_name}>{user.username}</Text>
        <LargeIconButton
          onPress={() => handleAddAlbum()}
          icon={<AddSquareIcon width={20} height={20} stroke="#000" />}
          text={t("profile_Artist.upload_Album")}
        />
        <Text style={styles.text_subTitle}>
          {t("profile_Artist.my_albums")}
        </Text>
        <AlbumList data={albums} />
      </View>
    </View>
  );
}

const createStyles = (colorText: ThemeText) =>
  StyleSheet.create({
    text_name: {
      color: colorText.primary,
      textAlign: "center",
      fontSize: fontSizes.xl,
      fontFamily: "M-PLUS-2-Bold",
    },
    text_subTitle: {
      color: colorText.primary,
      fontSize: fontSizes.xl,
      fontFamily: "M-PLUS-2-Bold",
    },
  });
