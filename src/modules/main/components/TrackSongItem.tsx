// Expo
import { Image } from "expo-image";

// React

// React Native
import { Pressable, StyleSheet, Text, View } from "react-native";

// Hooks
import { Track, useActiveTrack, useIsPlaying } from "react-native-track-player";

// Definitions
import { themesText } from "@/constants/themes";
import { colors, fontSizes } from "@/constants/tokens";
import { ThemeText } from "@/constants/themesTypes";
import { useTheme } from "@/modules/core/hooks/useTheme";

// Components
import PinkDots from "./PinkDots";
import LottieView from "lottie-react-native";
import { PlayTrackIcon } from "@/modules/core/components/Icons";

// Props
interface Props {
  item: Track;
  onTrackSelect: (track: Track) => void;
}

// Api

export default function TrackSongItem({
  item,
  onTrackSelect: handleTrackSelect,
}: Props) {
  const { theme } = useTheme();
  const themeText = themesText[theme];
  const { playing } = useIsPlaying();
  const isActiveSong = useActiveTrack()?.url === item.url;
  const styles = createStyles(themeText);

  return (
    <Pressable key={item.id} onPress={() => handleTrackSelect(item)}>
      {({ pressed }) => (
        <View style={[styles.button_content, { opacity: pressed ? 0.6 : 1 }]}>
          <View style={styles.image_container}>
            <Image
              source={{ uri: item.image }}
              style={{ ...styles.image, opacity: isActiveSong ? 0.4 : 1 }}
            />
            {isActiveSong &&
              (playing ? (
                <LottieView
                  autoPlay
                  style={styles.playing_animation}
                  source={require("@/assets/animations/PlayingTrack.json")}
                />
              ) : (
                <PlayTrackIcon style={styles.play_icon} />
              ))}
          </View>

          <View style={styles.text_container}>
            <Text
              style={[
                styles.text,
                { color: isActiveSong ? colors.pink : themeText.secondary },
              ]}
            >
              {item.title}
            </Text>
            <Text style={styles.textSm}>{item.album}</Text>
          </View>

          <Pressable
            onPress={() => alert("golaa")}
            style={styles.pressable_dots}
          >
            <PinkDots />
          </Pressable>
        </View>
      )}
    </Pressable>
  );
}

const createStyles = (colorText: ThemeText) =>
  StyleSheet.create({
    button_content: {
      flexDirection: "row",
      flex: 1,
      borderRadius: 15,
      justifyContent: "flex-start",
      padding: 6,
    },
    image_container: {
      position: "relative",
    },
    image: { width: 55, height: 55, borderRadius: 5 },
    playing_animation: {
      position: "absolute",
      width: 55,
      height: 55,
    },
    play_icon: {
      top: "25%",
      left: "25%",
      position: "absolute",
    },
    text_container: {
      justifyContent: "flex-start",
      flex: 1,
      marginLeft: 10,
      padding: 5,
    },
    text: {
      color: colorText.secondary,
      fontFamily: "M-PLUS-2-Bold",
      fontSize: fontSizes.md,
    },
    textSm: {
      color: colorText.primary,
      fontSize: fontSizes.sm,
      fontFamily: "M-PLUS-2-Regular",
    },
    pressable_dots: {
      alignItems: "center",
      justifyContent: "center",
      padding: 15,
    },
  });
