// Expo

// React

// React Native

// Hooks

// Definitions

// Components
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SheetManager } from "react-native-actions-sheet";
import Screen from "@/modules/core/components/Screen";
import ScreenLoading from "@/modules/core/components/ScreenLoading";
import { Image } from "expo-image";
import { ThemeText } from "@/constants/themesTypes";
import { fontSizes } from "@/constants/tokens";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { themesText } from "@/constants/themes";
import { TextInput } from "react-native-gesture-handler";
import { usePlaylistToEdit } from "@/modules/playlist/hooks/usePlaylistToEdit";
import LargeIconButton from "@/modules/core/components/LargeIconButton";
import { UploadIcon } from "@/modules/core/components/Icons";
import { CheckBox } from "react-native-elements";

// Props

// Api

export default function EditPlaylistScreen() {
  SheetManager.hide("playlist-options-sheet");
  const { playlist, loading, editValue, pickPlaylistCover, updatePlaylist } =
    usePlaylistToEdit();
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);

  if (loading) return <ScreenLoading />;

  return (
    <Screen>
      <View style={styles.container}>
        <View style={{ gap: 20 }}>
          <Text style={styles.text_title}>Personaliza tu playlist</Text>
          <Text style={styles.text}>Portada</Text>
          <Pressable onPress={() => pickPlaylistCover()}>
            <View style={{ alignItems: "center" }}>
              {playlist.image ? (
                <Image
                  source={{
                    uri: playlist.image,
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

        <View style={{ gap: 20 }}>
          <Text style={styles.text}>Título y descripción</Text>
          <TextInput
            placeholder="Playlist Title"
            style={styles.input_text}
            placeholderTextColor={themesText[theme].secondary}
            value={playlist.name}
            onChangeText={(text) => editValue("name", text)}
          />
          <TextInput
            placeholder="Playlist Description"
            multiline
            style={styles.input_textArea}
            placeholderTextColor={themesText[theme].secondary}
            value={playlist.description}
            onChangeText={(text) => editValue("description", text)}
          />
        </View>

        <CheckBox
          title={<Text style={{ marginLeft: 10 }}>¿Playlist pública?</Text>}
          checked={playlist.privacy}
          onPress={() => editValue("privacy", !playlist.privacy)}
        />

        <LargeIconButton
          text="Guardar cambios"
          onPress={() => updatePlaylist()}
          icon={<UploadIcon width={20} height={20} />}
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
      gap: 20,
    },
    text_title: {
      fontSize: fontSizes.xl,
      color: colorText.primary,
      fontFamily: "M-PLUS-2-Bold",
    },
    text: {
      fontSize: fontSizes.lg,
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
