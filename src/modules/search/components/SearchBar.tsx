// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import { SearchIcon } from "@/modules/core/components/Icons";
import { useRef } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

// Hooks

// Definitions

// Components

// Props
interface Props {
  search: string;
  handleSearch: (text: string) => void;
}
// Api
export default function SearchBar({ search, handleSearch }: Props) {
  const styles = createStyles();

  return (
    <View style={styles.container}>
      <View>
        <SearchIcon color="#000" />
      </View>
      <TextInput
        placeholder="Búsqueda"
        style={styles.input}
        value={search}
        onChange={(e) => handleSearch(e.nativeEvent.text)}
      />
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 15,
      width: "100%",
      backgroundColor: colors.light_purple,
      padding: 10,
      borderRadius: 10,
    },
    input: { width: "100%", fontSize: fontSizes.lg, flex: 1 },
  });
