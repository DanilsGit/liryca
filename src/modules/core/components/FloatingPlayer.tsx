// Expo

// React

// React Native
import React from "react";
import { colors, fontSizes } from "@/constants/tokens";
import { Image } from "expo-image";
import { Pressable, StyleSheet, View, ViewProps } from "react-native";
import { useActiveTrack } from "react-native-track-player";
import PlayPauseButton from "./PlayPauseButton";
import SkipToNextButton from "./SkipToNextButton";
import { useLastActiveTrack } from "../hooks/useLastActiveTrack";
import MovingText from "./MovingText";
import { useRouter } from "expo-router";

// Hooks
import { useImageColors } from "../hooks/useImageColors";

// Definitions

// Components

// Props

// Api

export default function FloatingPlayer({ style }: ViewProps) {
  // Apertura para la card
  const router = useRouter();

  // Utilidades para las tracks
  const activeTrack = useActiveTrack();
  const lastActiveTrack = useLastActiveTrack();

  // Para el color de fondo

  const displayedTrack = activeTrack ?? lastActiveTrack;

  const imageColors = useImageColors(displayedTrack?.image);
  const styles = createStyles(imageColors);

  if (!displayedTrack) return null;

  const handlePress = () => {
    router.navigate("/playerScreen");
  };

  return (
    <Pressable style={style} onPress={handlePress}>
      <View style={styles.pressable}>
        <View
          style={{
            position: "absolute",
            backgroundColor: colors.black,
            width: "200%",
            height: "200%",
            opacity: 0.2,
            borderRadius: 20,
          }}
        />
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
          <MovingText
            style={styles.subtitle}
            animationThreshold={32}
            text={displayedTrack.artist}
          />
        </View>

        <View style={styles.controllers_container}>
          <PlayPauseButton size={24} />
          <SkipToNextButton size={24} />
        </View>
      </View>
    </Pressable>
  );
}

const createStyles = (imageColors: any) =>
  StyleSheet.create({
    pressable: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      overflow: "hidden",
      padding: 15,
      borderRadius: 20,
      paddingVertical: 12,
      backgroundColor: imageColors?.dominant || colors.purple,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 100,
    },
    title_container: {
      overflow: "hidden",
      marginLeft: 10,
      flex: 1,
    },
    title: {
      fontSize: fontSizes.lg,
      fontWeight: "bold",
      paddingLeft: 6,
      color: colors.light_purple,
      textTransform: "capitalize",
    },
    subtitle: {
      fontSize: fontSizes.md,
      fontWeight: "semibold",
      paddingLeft: 6,
      color: colors.white,
      opacity: 0.7,
    },
    controllers_container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingRight: 10,
      gap: 5,
    },
  });
