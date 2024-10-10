// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import { Image } from "expo-image";
import { Pressable, StyleSheet, View, ViewProps } from "react-native";
import { useActiveTrack } from "react-native-track-player";
import PlayPauseButton from "./PlayPauseButton";
import SkipToNextButton from "./SkipToNextButton";
import { useLastActiveTrack } from "../hooks/useLastActiveTrack";
import { LinearGradient } from "expo-linear-gradient";
import MovingText from "./MovingText";
import { useRouter } from "expo-router";

// Hooks

// Definitions

// Components

// Props

// Api

export default function FloatingPlayer({ style }: ViewProps) {
  const styles = createStyles();
  // Apertura para la card
  const router = useRouter();

  // Utilidades para las tracks
  const activeTrack = useActiveTrack();
  const lastActiveTrack = useLastActiveTrack();

  const displayedTrack = activeTrack ?? lastActiveTrack;

  if (!displayedTrack) return null;

  const handlePress = () => {
    router.navigate("/playerScreen");
  };

  return (
    <Pressable style={[style]} onPress={handlePress}>
      <LinearGradient
        colors={[colors.pink, colors.purple, colors.light_blue]}
        start={{ x: 0, y: -1.5 }}
        end={{ x: 0, y: 1 }}
        locations={[0, 0.5, 1]}
        style={styles.pressable}
      >
        <Image
          source={{ uri: displayedTrack.image }}
          style={{ ...styles.image }}
        />
        <View style={styles.title_container}>
          <MovingText
            style={styles.title}
            animationThreshold={32}
            text={displayedTrack.title}
          />
        </View>

        <View style={styles.controllers_container}>
          <PlayPauseButton size={24} />
          <SkipToNextButton size={24} />
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const createStyles = () =>
  StyleSheet.create({
    pressable: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 8,
      backgroundColor: colors.pink,
      borderRadius: 12,
      paddingVertical: 10,
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 5,
    },
    title_container: {
      overflow: "hidden",
      marginLeft: 10,
      flex: 1,
    },
    title: {
      fontSize: fontSizes.xl,
      fontWeight: "bold",
      paddingLeft: 10,
      color: colors.white,
    },
    controllers_container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingRight: 10,
    },
  });
