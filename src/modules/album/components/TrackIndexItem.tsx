// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import MovingText from "@/modules/core/components/MovingText";
import TrackOptionsMenu from "@/modules/core/components/TrackOptionsMenu";
import PinkDots from "@/modules/main/components/PinkDots";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Track, useActiveTrack } from "react-native-track-player";

// Hooks

// Definitions

// Components

// Props
interface Props {
  item: Track;
  index: number;
  onTrackSelect: (track: Track) => void;
}
// Api

export default function TrackIndexItem({ item, index, onTrackSelect }: Props) {
  const isActiveSong = useActiveTrack()?.url === item.url;
  const styles = createStyles();

  return (
    <Pressable key={item.id} onPress={() => onTrackSelect(item)}>
      {({ pressed }) => (
        <View style={[styles.container, { opacity: pressed ? 0.4 : 1 }]}>
          <View>
            <Text style={[styles.text, styles.text_index]}>{index + 1}</Text>
          </View>

          <View style={styles.texts}>
            <MovingText
              style={[
                styles.text,
                styles.text_title,
                isActiveSong && { color: colors.pink },
              ]}
              text={item.title}
              animationThreshold={30}
            />
            <Text style={styles.text}>{item.artist}</Text>
          </View>
          <Text style={[styles.text, styles.text_index]}>{item.time}</Text>
          <TrackOptionsMenu track={item} />
        </View>
      )}
    </Pressable>
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      gap: 20,
    },
    texts: {
      flex: 1,
      width: "100%",
      overflow: "hidden",
    },
    text: {
      color: "white",
      fontSize: fontSizes.md,
      fontFamily: "M-PLUS-2-Regular",
      textTransform: "capitalize",
    },
    text_index: {
      fontFamily: "M-PLUS-2-Bold",
    },
    text_title: {
      fontSize: fontSizes.lg,
      fontFamily: "M-PLUS-2-Bold",
      textTransform: "capitalize",
    },
    pressable_dots: {
      alignItems: "center",
      justifyContent: "center",
      padding: 15,
    },
  });
