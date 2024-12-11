// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import { MusicIcon } from "@/modules/core/components/Icons";
import { t } from "i18next";
import { Pressable, StyleSheet, View, Text } from "react-native";

// Hooks

// Definitions

// Components

// Props
interface Props {
  onPress: () => void;
}
// Api

export default function ButtonToPost({ onPress }: Props) {
  const styles = createStyles();
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.icon_container}>
          <MusicIcon width={20} height={20} strokeWidth={4} />
        </View>
        <View style={styles.text_container}>
          <Text style={styles.text_btn}>{t("post.post")}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: colors.light_purple,
      width: "100%",
      height: 50,
      borderRadius: 10,
      gap: 10,
    },
    icon_container: {
      width: 40,
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    text_container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-start",
      height: "100%",
    },
    text_btn: {
      color: colors.dark_purple,
      fontFamily: "M-PLUS-2-Bold",
      fontSize: fontSizes.xl,
      lineHeight: 25,
    },
  });
