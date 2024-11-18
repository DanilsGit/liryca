// Expo

// React

// React Native
import { genres } from "@/constants/data";
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import { colors } from "@/constants/tokens";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { Song } from "@/modules/core/lib/types";
import { Picker } from "@react-native-picker/picker";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

// Hooks

// Definitions

// Components

// Props
interface Props {
  songs: Song[];
  editSong: (id: string, key: string, value: string) => void;
  pickSong: (id: string) => void;
  loadingPickSong: boolean;
}
// Api

export default function ListAddSongs({
  songs,
  editSong,
  pickSong,
  loadingPickSong,
}: Props) {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);

  if (songs.length === 0) return null;

  return (
    <View style={{ gap: 30 }}>
      {songs.map((song) => (
        <View key={song?.id} style={styles.song_item}>
          <TextInput
            placeholder="Title"
            style={styles.input_text}
            placeholderTextColor={themesText[theme].secondary}
            value={song.title}
            onChangeText={(text) => editSong(song.id, "title", text)}
          />
          <Pressable
            onPress={loadingPickSong ? () => {} : () => pickSong(song.id)}
          >
            <View style={styles.input_text}>
              {song.song_uploaded !== "" ? (
                <Text style={styles.text}>{song.song_uploaded}</Text>
              ) : (
                <Text style={styles.text}>
                  {loadingPickSong ? "Loading..." : "Select a song"}
                </Text>
              )}
            </View>
          </Pressable>
          <TextInput
            placeholder="Time (select a song first)"
            style={styles.input_text}
            placeholderTextColor={themesText[theme].secondary}
            value={loadingPickSong ? "Loading..." : song.time}
            readOnly
          />
          <View style={styles.pickerGenre}>
            <Picker
              selectedValue={song.genre}
              onValueChange={(itemValue) =>
                editSong(song.id, "genre", itemValue)
              }
            >
              <Picker.Item
                label="Genre"
                value=""
                color={themesText[theme].secondary}
              />
              {genres.map((genre) => (
                <Picker.Item
                  color={themesText[theme].primary}
                  style={{
                    backgroundColor: colors.dark_purple,
                  }}
                  key={genre}
                  label={genre}
                  value={genre}
                />
              ))}
            </Picker>
          </View>
        </View>
      ))}
    </View>
  );
}

const createStyles = (colorText: ThemeText) =>
  StyleSheet.create({
    input_text: {
      height: 40,
      color: colorText.primary,
      borderColor: colorText.primary,
      borderBottomWidth: 1,
      marginVertical: 5,
      padding: 10,
      fontFamily: "M-PLUS-2-Regular",
    },
    song_item: {
      borderLeftWidth: 1,
      paddingLeft: 10,
      borderColor: colorText.secondary,
    },
    pickerGenre: {
      borderColor: colorText.primary,
      borderBottomWidth: 1,
      marginVertical: 5,
      padding: 10,
    },
    text: {
      color: colorText.secondary,
      fontFamily: "M-PLUS-2-Regular",
    },
  });
