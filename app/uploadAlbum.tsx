// Expo

// React

// React Native
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import { fontSizes } from "@/constants/tokens";
import Screen from "@/modules/core/components/Screen";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { StyleSheet, Text, View } from "react-native";

// Hooks

// Definitions
import { useTranslation } from "react-i18next";
import LargeIconButton from "@/modules/core/components/LargeIconButton";
import { AddSquareIcon, UploadIcon } from "@/modules/core/components/Icons";
import { useUploadAlbumScreen } from "@/modules/artistProfile/hooks/useUploadAlbumScreen";
import LoadingUploadAlbum from "@/modules/artistProfile/components/LoadingUploadAlbum";
import InformationAndCover from "@/modules/artistProfile/components/InformationAndCover";
import ListAddSongs from "@/modules/artistProfile/components/ListAddSongs";
// Components

// Props

// Api

export default function UploadAlbumScreen() {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);
  const { t } = useTranslation();
  const {
    album,
    songs,
    updateAlbum,
    addSong,
    editSong,
    pickSong,
    loadingPickSong,
    pickAlbumCover,
    doneAndUpload,
    loadingUpload,
    handleDateChange,
  } = useUploadAlbumScreen();

  if (loadingUpload) {
    return <LoadingUploadAlbum />;
  }

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.text_title}>
          {t("profile_Artist.album_page.title")}
        </Text>

        <InformationAndCover
          album={album}
          updateAlbum={updateAlbum}
          pickAlbumCover={pickAlbumCover}
          handleDatePicker={handleDateChange}
        />

        <View style={{ gap: 20 }}>
          <Text style={styles.text_title}>
            {t("profile_Artist.album_page.songs")}
          </Text>

          <View style={{ gap: 20 }}>
            <ListAddSongs
              songs={songs}
              editSong={editSong}
              pickSong={pickSong}
              loadingPickSong={loadingPickSong}
            />
            <LargeIconButton
              onPress={() => addSong()}
              icon={<AddSquareIcon width={20} height={20} stroke="#000" />}
              text={t("profile_Artist.album_page.upload_song")}
            />
            {songs.length > 0 && (
              <LargeIconButton
                onPress={() => doneAndUpload()}
                icon={<UploadIcon width={20} height={20} stroke="#000" />}
                text={t("profile_Artist.album_page.done")}
              />
            )}
          </View>
        </View>
      </View>
    </Screen>
  );
}

const createStyles = (colorText: ThemeText) =>
  StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      gap: 20,
    },
    text_title: {
      fontSize: fontSizes.xl,
      color: colorText.primary,
      fontFamily: "M-PLUS-2-Bold",
    },
  });
