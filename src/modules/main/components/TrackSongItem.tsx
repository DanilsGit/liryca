// Expo

// React

// React Native
import { Pressable, StyleSheet, Text, View } from "react-native";
import PinkDot from "./PinkDot";
import { colors, fontSizes } from "@/constants/tokens";
import { themesText } from "@/constants/themes";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { ThemeText } from "@/constants/themesTypes";
import { Image } from "expo-image";

// Hooks

// Definitions

// Components

// Props
interface Props {
  item: {
    id: number;
    title: string;
    album: string;
    image: string;
  };
}

// Api

export default function TrackSongItem({ item }: Props) {
  const { theme } = useTheme();
  const themeText = themesText[theme];
  const isActiveSong = false;
  const styles = createStyles(themeText);

  return (
    <Pressable key={item.id} onPress={() => alert("music")}>
      {({ pressed }) => (
        <View style={[styles.button_content, { opacity: pressed ? 0.6 : 1 }]}>
          <Image
            source={{ uri: item.image }}
            style={{ ...styles.image, opacity: isActiveSong ? 0.6 : 1 }}
          />

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
            <View style={{ gap: 6 }}>
              <PinkDot />
              <PinkDot />
            </View>
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
    image: { width: 55, height: 55, borderRadius: 5 },
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
