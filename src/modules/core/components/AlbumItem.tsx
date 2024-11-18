// Expo

// React

// React Native
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Album } from "../lib/types";
import { Image } from "expo-image";
import { fontSizes } from "@/constants/tokens";
import { ThemeText } from "@/constants/themesTypes";
import { useTheme } from "../hooks/useTheme";
import { themesText } from "@/constants/themes";

// Hooks

// Definitions

// Components

// Props

interface Props {
  item: Album;
  onAlbumSelect: (album: Album) => void;
}

// Api

export default function AlbumItem({ item, onAlbumSelect }: Props) {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);
  return (
    <Pressable
      onPress={() => onAlbumSelect(item)}
      style={styles.pressable_container}
    >
      {({ pressed }) => (
        <>
          <View
            style={[styles.image_container, { opacity: pressed ? 0.5 : 1 }]}
          >
            <Image source={{ uri: item.icon }} style={styles.image} />
          </View>
          <View style={styles.info_container}>
            <Text style={styles.info_text_title}>{item.title}</Text>
            <Text style={styles.info_text}>{item.release_date}</Text>
          </View>
        </>
      )}
    </Pressable>
  );
}

const createStyles = (colorText: ThemeText) =>
  StyleSheet.create({
    pressable_container: {
      width: "100%",
      flexDirection: "row",
      paddingBottom: 15,
    },
    image_container: {
      width: 90,
      height: 90,
      backgroundColor: "gray",
      borderRadius: 20,
    },
    image: {
      width: "100%",
      height: "100%",
      borderRadius: 20,
    },
    info_container: {
      flex: 1,
      justifyContent: "center",
      marginLeft: 15,
      gap: 5,
    },
    info_text_title: {
      fontSize: fontSizes.lg,
      color: colorText.secondary,
      fontFamily: "M-PLUS-2-Bold",
    },
    info_text: {
      fontSize: fontSizes.sm,
      color: colorText.primary,
      fontFamily: "M-PLUS-2-Regular",
    },
  });
