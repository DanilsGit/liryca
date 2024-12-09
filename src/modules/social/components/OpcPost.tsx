// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

// Hooks

// Definitions

// Components

// Props
interface Props {
  data: {
    post_id: string;
    user_name: string;
    action: string;
    content: string;
    image?: string;
    artist_name?: string;
    name_media?: string;
  };
}
// Api

export default function OpcPost({ data }: Props) {
  const styles = createStyles();
  return (
    <View style={styles.container}>
      <View>
        <View style={{ padding: 5, flexDirection: "row" }}>
          <Text style={styles.header_text_1}>@{data.user_name}</Text>
          <Text style={styles.header_text_2}> {data.action}</Text>
        </View>
        <View style={{ flex: 0, flexDirection: "row" }}>
          <View style={styles.image_container}>
            <Image source={{ uri: data.image }} style={styles.image} />
          </View>
          <View></View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.footer_text_1}>{data.name_media}</Text>
          <Text style={styles.footer_text_2}> {data.artist_name}</Text>
        </View>
      </View>
      <View></View>
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.semi_dark_purple,
      height: 250,
      width: "95%",
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      paddingLeft: 30,
    },
    header_text_1: {
      color: colors.purple,
      fontSize: fontSizes.md,
      fontFamily: "M-PLUS-2-Bold",
    },
    header_text_2: {
      color: colors.purple,
      fontSize: fontSizes.md,
      fontFamily: "M-PLUS-2-Regular",
    },
    footer_text_1: {
      color: colors.light_purple,
      fontSize: fontSizes.md,
      fontFamily: "M-PLUS-2-Bold",
    },
    footer_text_2: {
      color: colors.light_purple,
      fontSize: fontSizes.md,
      fontFamily: "M-PLUS-2-Regular",
    },
    image_container: {
      backgroundColor: colors.white,
      width: 85,
      height: 85,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
    },
    image: {
      height: 80,
      width: 80,
      borderRadius: 100,
    },
  });
