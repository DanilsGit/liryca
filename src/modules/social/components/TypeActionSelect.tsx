// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import { DownArrowIcon } from "@/modules/core/components/Icons";
import { StyleSheet, Text } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import { postAction } from "../hooks/useWriteAPost";

// Hooks

// Definitions

// Components

// Props
interface Props {
  action: string;
  changeAction: (action: postAction) => void;
}
// Api

export default function TypeActionSelect({ action, changeAction }: Props) {
  const styles = createStyles();
  return (
    <Menu>
      <MenuTrigger style={styles.action_container}>
        <Text style={styles.text_action}>
          {action === "recommended"
            ? "Recomendar"
            : action === "shared"
              ? "Compartir"
              : "No recomendar"}
        </Text>
        <DownArrowIcon width={20} height={20} stroke={colors.dark_purple} />
      </MenuTrigger>

      <MenuOptions
        customStyles={{
          optionsContainer: { backgroundColor: colors.semi_dark_purple },
        }}
      >
        <MenuOption onSelect={() => changeAction("recommended")}>
          <Text style={styles.text}>Recomendar</Text>
        </MenuOption>

        <MenuOption onSelect={() => changeAction("shared")}>
          <Text style={styles.text}>Compartir</Text>
        </MenuOption>

        <MenuOption onSelect={() => changeAction("not_recommended")}>
          <Text style={styles.text}>No recomendar</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}

const createStyles = () =>
  StyleSheet.create({
    action_container: {
      flexDirection: "row",
      borderRadius: 20,
      paddingVertical: 2,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: colors.dark_purple,
      width: 150,
      justifyContent: "space-between",
    },
    text: {
      color: colors.white,
      fontFamily: "M-PLUS-2-Regular",
      fontSize: fontSizes.md,
    },
    text_action: {
      color: colors.dark_purple,
      fontFamily: "M-PLUS-2-Regular",
      fontSize: fontSizes.md,
    },
  });
