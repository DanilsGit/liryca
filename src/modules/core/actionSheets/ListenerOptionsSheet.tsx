// Expo

// React

// React Native
import { colors } from "@/constants/tokens";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ActionSheet, { SheetProps } from "react-native-actions-sheet";

// Hooks

// Definitions

// Components

// Props

// Api

export default function ListenerOptionsSheet(
  props: SheetProps<"listener-options-sheet">,
) {
  const styles = createStyles();
  return (
    <ActionSheet
      gestureEnabled
      indicatorStyle={{ width: 50 }}
      containerStyle={styles.sheet}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
        <Pressable onPress={props.payload?.action}>
          <Text style={styles.text}>Action</Text>
        </Pressable>
      </View>
    </ActionSheet>
  );
}

const createStyles = () =>
  StyleSheet.create({
    sheet: {
      backgroundColor: colors.dark_purple,
      paddingVertical: 16,
    },
    container: {
      padding: 16,
      paddingVertical: 24,
      gap: 16,
    },
    text: {
      color: colors.white,
    },
  });
