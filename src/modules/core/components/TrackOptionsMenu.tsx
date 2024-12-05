// Expo
import * as SecureStorage from "expo-secure-store";
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
import { useRouter } from "expo-router";

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
  const router = useRouter();

  const handleAddTo = async () => {
    await SecureStorage.setItemAsync("trackToAdd", JSON.stringify(track));
    router.push("/addToPlaylist");
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

        <MenuOption onSelect={() => console.log("xd")}>
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
