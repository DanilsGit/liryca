// Expo

// React

// React Native
import PinkDots from "@/modules/main/components/PinkDots";
import { Track } from "react-native-track-player";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { StyleSheet, View, Text } from "react-native";
import { colors, fontSizes } from "@/constants/tokens";

// Hooks

// Definitions

// Components

// Props
interface Props {
  track: Track;
}
// Api

export default function TrackOptionsMenu({ track }: Props) {
  const styles = createStyles();

  const handleAddTo = () => {
    console.log("Add to");
  };

  return (
    <Menu>
      <MenuTrigger>
        <View style={styles.pressable_dots}>
          <PinkDots />
        </View>
      </MenuTrigger>

      <MenuOptions
        customStyles={{
          optionsContainer: { backgroundColor: colors.semi_dark_purple },
        }}
      >
        <MenuOption onSelect={handleAddTo}>
          <Text style={styles.text}>Add to</Text>
        </MenuOption>

        <MenuOption onSelect={handleAddTo}>
          <Text style={styles.text}>Post it</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}

const createStyles = () =>
  StyleSheet.create({
    pressable_dots: {
      alignItems: "center",
      justifyContent: "center",
      padding: 15,
    },
    text: {
      fontFamily: "M-PLUS-2-Regular",
      fontSize: fontSizes.md,
      color: colors.light_purple,
    },
  });
