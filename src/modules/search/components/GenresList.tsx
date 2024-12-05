// Expo

// React

// React Native
import { StyleSheet, View } from "react-native";
import GenreBox from "./GenreBox";
import { genres } from "@/constants/data";

// Hooks

// Definitions

// Components

// Props

// Api

export default function GenresList() {
  const styles = createStyles();

  return (
    <View style={styles.container}>
      {genres.map((genre, index) => {
        return (
          <View key={index}>
            <GenreBox text={genre} />
          </View>
        );
      })}
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: 20,
      width: "100%",
      flexWrap: "wrap",
    },
  });
