// Expo

// React

// React Native
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import { colors, fontSizes } from "@/constants/tokens";
import ButtonRounded from "@/modules/auth/components/ButtonRounded";
import Screen from "@/modules/core/components/Screen";
import ScreenLoading from "@/modules/core/components/ScreenLoading";
import { useTheme } from "@/modules/core/hooks/useTheme";
import {
  TrackInPlaylists,
  useAddToPlaylist,
} from "@/modules/playlist/hooks/useAddToPlaylist";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

// Hooks

// Definitions

// Components

// Props

// Api

export default function AddToPlaylist() {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);
  const router = useRouter();
  const { playlist, loading, handleAdd, handleSubmit } = useAddToPlaylist();

  if (loading) return <ScreenLoading />;

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.text_title}>Choose an option</Text>

        <View style={{ gap: 10, paddingHorizontal: 10 }}>
          {playlist.map((item: TrackInPlaylists) => (
            <Pressable key={item.id} onPress={() => handleAdd(item.id)}>
              {({ pressed }) => (
                <View
                  key={item.id}
                  style={[styles.card, { opacity: pressed ? 0.5 : 1 }]}
                >
                  <View style={styles.image_container}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.text}>{item.name}</Text>
                  </View>

                  <View
                    style={
                      item.song_exists ? styles.inPlaylist : styles.noInPlaylist
                    }
                  />
                </View>
              )}
            </Pressable>
          ))}
        </View>

        <View style={{ alignItems: "center", gap: 20 }}>
          <ButtonRounded
            text="Save changes"
            handleClick={() => handleSubmit()}
            extraStyles={{ width: 350 }}
          />
          <ButtonRounded
            text="Discard changes"
            handleClick={() => router.back()}
            extraStyles={{ width: 350 }}
          />
        </View>
      </View>
    </Screen>
  );
}

const createStyles = (theme: ThemeText) =>
  StyleSheet.create({
    container: {
      paddingTop: 20,
      gap: 30,
    },
    text_title: {
      color: theme.primary,
      fontSize: fontSizes.xl2,
      fontFamily: "M-PLUS-2-Bold",
      paddingHorizontal: 10,
    },
    text: {
      color: colors.black,
      fontSize: fontSizes.lg,
      fontFamily: "M-PLUS-2-Regular",
    },
    card: {
      padding: 10,
      backgroundColor: colors.light_pink,
      borderRadius: 10,
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
    },
    image: { width: 50, height: 50, borderRadius: 10 },
    image_container: {
      backgroundColor: colors.purple,
      borderRadius: 10,
    },
    inPlaylist: {
      width: 30,
      height: 30,
      backgroundColor: colors.purple,
      borderRadius: 50,
    },
    noInPlaylist: {
      width: 30,
      height: 30,
      backgroundColor: colors.gray,
      borderRadius: 50,
    },
  });
