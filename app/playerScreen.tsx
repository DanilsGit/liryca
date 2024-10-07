// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import LikeButton from "@/modules/core/components/LikeButton";
import PlayerControls from "@/modules/core/components/PlayerControls";
import PlayerProgressBar from "@/modules/core/components/PlayerProgressBar";
import RepeatButton from "@/modules/core/components/RepeatButton";
import { BlurView } from "@react-native-community/blur";
import { Image, ImageBackground } from "expo-image";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useActiveTrack } from "react-native-track-player";

// Hooks

// Definitions

// Components

// Props

// Api

export default function PlayerScreen() {
  const { top, bottom } = useSafeAreaInsets();
  const styles = createStyles({ top, bottom });
  const isLiked = false;

  const activeTrack = useActiveTrack();

  if (!activeTrack)
    return (
      <View style={styles.loading_track}>
        <ActivityIndicator size="large" color={colors.purple} />
      </View>
    );

  return (
    <ImageBackground
      source={{ uri: activeTrack.image }}
      style={styles.backgroundImage}
    >
      <BlurView style={styles.absolute} blurType="dark" blurAmount={10} />

      <View style={styles.overlay_container}>
        <View style={styles.header_container}>
          <Text>Player</Text>
          <Text>Current</Text>
          <Text>Options</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.image_container}>
            <View style={styles.image_shadow}>
              <Image
                source={{ uri: activeTrack.image }}
                contentFit="cover"
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.information_container}>
            <View style={styles.knowed_content}>
              <Text style={styles.information_text_title}>
                {activeTrack.title}
              </Text>
              <Text style={styles.information_text_artist}>
                {activeTrack.album}
              </Text>
            </View>
            <View style={styles.handle_cotrols}>
              <RepeatButton />
              <LikeButton isLiked={isLiked} />
            </View>
            <PlayerProgressBar
              style={{ marginTop: 20, height: 30, width: "100%" }}
            />
            <PlayerControls style={{ marginTop: 20 }} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const createStyles = ({ top, bottom }: { top: number; bottom: number }) =>
  StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: "repeat",
    },
    absolute: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    header_container: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 5,
    },
    loading_track: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    overlay_container: {
      flex: 1,
    },
    content: {
      flex: 1,
      paddingTop: top,
      paddingBottom: bottom,
    },
    image_container: {
      justifyContent: "center",
      alignItems: "center",
      height: "40%",
    },
    image_shadow: {
      height: "100%",
      aspectRatio: 1,
      shadowOpacity: 0.44,
      shadowRadius: 11.0,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      elevation: 10,
      shadowColor: colors.black,
      borderRadius: 1000,
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
      aspectRatio: 1,
      borderRadius: 1000,
    },
    information_container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 30,
      gap: 20,
    },
    knowed_content: {
      alignItems: "flex-start",
      width: "100%",
    },
    information_text_title: {
      color: colors.white,
      fontSize: fontSizes.xl2,
      fontFamily: "PlayfairDisplay-Regular",
      textAlign: "center",
    },
    information_text_artist: {
      color: colors.white,
      fontSize: fontSizes.lg,
      fontFamily: "M-PLUS-2-Regular",
    },
    handle_cotrols: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
  });
