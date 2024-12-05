// Expo

// React

// React Native
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

// Hooks

// Definitions

// Components

// Props

// Api

export default function LoadingPlaylist() {
  const styles = createStyles();
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={styles.playing_animation}
        source={require("@/assets/animations/LoadingPlaylist.json")}
      />
      <LinearGradient
        colors={["transparent", "black"]}
        style={styles.gradiente}
      />
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      borderRadius: 10,
      height: 170,
      backgroundColor: "purple",
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 10,
      width: 160,
    },
    gradiente: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 100,
      borderRadius: 10,
    },
    playing_animation: {
      position: "absolute",
      width: 95,
      height: 95,
    },
  });
