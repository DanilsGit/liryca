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
import MovingText from "@/modules/core/components/MovingText";
import TrackOptionsMenu from "@/modules/core/components/TrackOptionsMenu";

// Props
interface Props {
  item: Track;
  onTrackSelect: (track: Track) => void;
}

// Api

export default function TrackSongItem({ item, onTrackSelect }: Props) {
  const { theme } = useTheme();
  const themeText = themesText[theme];
  const { playing } = useIsPlaying();
  const isActiveSong = useActiveTrack()?.url === item.url;
  const styles = createStyles(themeText);

  return (
    <View style={{ flexDirection: "row" }}>
      <Pressable
        key={item.id}
        onPress={() => onTrackSelect(item)}
        style={{ flex: 1 }}
      >
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
              <MovingText
                style={[
                  styles.text,
                  { color: isActiveSong ? colors.pink : themeText.secondary },
                ]}
                text={item.title}
                animationThreshold={30}
              />
              <Text style={styles.textSm}>{item.artist}</Text>
            </View>
          </View>
        )}
      </Pressable>
      <TrackOptionsMenu track={item} />
    </View>
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
    image: { width: 45, height: 45, borderRadius: 5 },
    playing_animation: {
      position: "absolute",
      width: 45,
      height: 45,
    },
    play_icon: {
      top: "25%",
      left: "25%",
      position: "absolute",
    },
    text_container: {
      justifyContent: "flex-start",
      overflow: "hidden",
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
  });
