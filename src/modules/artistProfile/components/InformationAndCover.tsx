// Expo

// React

// React Native
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import { fontSizes } from "@/constants/tokens";
import DatePicker from "@/modules/core/components/DatePicker";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { AlbumCreating } from "@/modules/core/lib/types";
import { Image } from "expo-image";
import { useTranslation } from "react-i18next";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

// Hooks

// Definitions

// Components

// Props
interface Props {
  album: AlbumCreating;
  updateAlbum: (key: string, value: string | boolean) => void;
  pickAlbumCover: () => void;
  handleDatePicker: (_, selectedDate) => void;
}
// Api

export default function InformationAndCover({
  album,
  updateAlbum,
  pickAlbumCover,
  handleDatePicker,
}: Props) {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);
  const { t } = useTranslation();

  return (
    <View style={{ gap: 20 }}>
      <View style={{ gap: 20 }}>
        <Text style={styles.text_title}>
          {t("profile_Artist.album_page.cover")}
        </Text>
        <Pressable onPress={() => pickAlbumCover()}>
          <View style={{ alignItems: "center" }}>
            {album.icon ? (
              <Image
                source={{
                  uri: album.icon,
                }}
                style={styles.album_icon}
                contentFit="contain"
              />
            ) : (
              <Image
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/liryca-c9f2e.appspot.com/o/albumCover%2FaddImage.jpg?alt=media&token=2f6602e6-575d-4447-aef5-be316abec973",
                }}
                style={styles.album_icon}
              />
            )}
          </View>
        </Pressable>
      </View>

      <View>
        <Text style={styles.text_title}>
          {t("profile_Artist.album_page.information")}
        </Text>
        <TextInput
          placeholder="Album Title"
          style={styles.input_text}
          placeholderTextColor={themesText[theme].secondary}
          value={album.title}
          onChangeText={(text) => updateAlbum("title", text)}
        />
        <TextInput
          placeholder="Album Description"
          multiline
          style={styles.input_textArea}
          placeholderTextColor={themesText[theme].secondary}
          value={album.description}
          onChangeText={(text) => updateAlbum("description", text)}
        />

        <DatePicker
          handlePress={() => {
            updateAlbum("showDatePicker", true);
          }}
          text={album.relase_date.toLocaleDateString()}
          showPicker={album.showDatePicker}
          pickerValue={album.relase_date}
          handleDateChange={(_, select) => {
            handleDatePicker(_, select);
          }}
          styles={{ marginTop: 10 }}
          styles_text={styles.input_text}
        />
      </View>
    </View>
  );
}

const createStyles = (colorText: ThemeText) =>
  StyleSheet.create({
    text_title: {
      fontSize: fontSizes.xl,
      color: colorText.primary,
      fontFamily: "M-PLUS-2-Bold",
    },
    album_icon: {
      width: 200,
      height: 200,
      borderWidth: 1,
      backgroundColor: colorText.secondary,
    },
    input_textArea: {
      height: 80,
      textAlignVertical: "bottom",
      color: colorText.primary,
      borderColor: colorText.primary,
      borderBottomWidth: 1,
      marginVertical: 5,
      padding: 10,
      fontFamily: "M-PLUS-2-Regular",
    },
    input_text: {
      height: 40,
      color: colorText.primary,
      borderColor: colorText.primary,
      borderBottomWidth: 1,
      marginVertical: 5,
      padding: 10,
      fontFamily: "M-PLUS-2-Regular",
    },
  });
