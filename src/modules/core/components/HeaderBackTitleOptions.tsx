// Expo

// React

// React Native
import { StyleSheet, View } from "react-native";
import DownArrowButton from "./DownArrowButton";
import MovingText from "./MovingText";
import { colors, fontSizes } from "@/constants/tokens";
import { useRouter } from "expo-router";
import DotsButton from "./DotsButton";

// Hooks

// Definitions

// Components

// Props
interface Props {
  title: string;
  dotsAction: () => void;
}
// Api

export default function HeaderBackTitleOptions({ title, dotsAction }: Props) {
  const styles = createStyles();
  const router = useRouter();
  return (
    <View style={styles.header_container}>
      <DownArrowButton action={() => router.back()} />
      <View style={styles.movingText_container}>
        <MovingText
          animationThreshold={35}
          text={title}
          style={styles.header_text}
        />
      </View>
      <DotsButton action={dotsAction} />
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    header_container: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 5,
    },
    movingText_container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      marginHorizontal: 20,
    },
    header_text: {
      color: colors.white,
      fontSize: fontSizes.xl,
      fontFamily: "M-PLUS-2-Regular",
      textAlign: "center",
      width: "100%",
    },
  });
