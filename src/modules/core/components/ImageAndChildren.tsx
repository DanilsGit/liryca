// Expo

// React

// React Native
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import { fontSizes } from "@/constants/tokens";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

// Hooks

// Definitions

// Components

// Props
interface Props {
  children: React.ReactNode;
  image: string;
}
// Api

export default function ImageAndChildren({ children, image }: Props) {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);
  return (
    <View style={styles.header}>
      <View style={styles.header_icon}>
        <Image source={{ uri: image }} style={styles.header_icon_img} />
      </View>
      <View style={{ height: "100%" }}>{children}</View>
    </View>
  );
}

const createStyles = (colorText: ThemeText) =>
  StyleSheet.create({
    header: {
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
      marginTop: 20,
      marginHorizontal: 10,
    },
    header_icon: {
      width: 40,
      height: 40,
      borderRadius: 50,
      overflow: "hidden",
    },
    header_icon_img: {
      width: "100%",
      height: "100%",
    },
    title: {
      fontSize: fontSizes.xl2,
      color: colorText.secondary,
      fontFamily: "M-PLUS-2-ExtraBold",
    },
  });
