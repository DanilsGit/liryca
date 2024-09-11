// Expo

// React

// React Native
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

// Hooks
import { useTheme } from "@m/core/hooks/useTheme";

// Definitions
import { themesText } from "@/constants/themes";
import { fontSizes } from "@/constants/tokens";

// Components
import PinkDot from "./PinkDot";
import { ThemeText } from "@/constants/themesTypes";

// Props
interface Props {
  data: {
    id: number;
    title: string;
    album: string;
    image: string;
  }[];
}

// Api

export default function TopSongs({ data }: Props) {
  const { theme } = useTheme();
  const themeText = themesText[theme];
  const styles = createStyles(themeText);

  return (
    <View style={styles.songs_container}>
      {data.map((item) => (
        <Pressable key={item.id} onPress={() => alert("music")}>
          {({ pressed }) => (
            <View
              style={[styles.button_content, { opacity: pressed ? 0.6 : 1 }]}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.text_container}>
                <Text style={styles.text}>{item.title}</Text>
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
      ))}
    </View>
  );
}

const createStyles = (colorText: ThemeText) =>
  StyleSheet.create({
    songs_container: { paddingHorizontal: 20, gap: 15, borderRadius: 15 },
    button_content: {
      flexDirection: "row",
      flex: 1,
      backgroundColor: colorText.primary,
      borderRadius: 15,
      justifyContent: "flex-end",
      padding: 8,
      shadowColor: "#201536",
      shadowRadius: 10,
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 5 },
      elevation: 1,
    },
    image: { width: 60, height: 60, borderRadius: 10 },
    text_container: {
      justifyContent: "center",
      flex: 1,
      marginLeft: 15,
      padding: 5,
    },
    text: {
      color: colorText.secondary,
      fontFamily: "M-PLUS-2-Bold",
      fontSize: fontSizes.md,
    },
    textSm: {
      color: colorText.secondary,
      fontSize: fontSizes.sm,
      fontFamily: "M-PLUS-2-Regular",
    },
    pressable_dots: {
      alignItems: "center",
      justifyContent: "center",
      padding: 15,
    },
  });
