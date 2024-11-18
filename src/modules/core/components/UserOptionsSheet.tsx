// Expo

// React

// React Native
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SheetManager } from "react-native-actions-sheet";
import { DotsIcon } from "./Icons";

// Hooks

// Definitions

// Components

// Props

// Api

export const UserOptionsSheet = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const showListenerOptions = () => {
    SheetManager.show("listener-options-sheet", {
      payload: {
        goToLanguageScreen: () => router.navigate("/languageScreen"),
        goToThemeScreen: () => router.navigate("/themeScreen"),
        logout,
      },
    });
  };

  return (
    <Pressable onPress={showListenerOptions}>
      <View>
        <DotsIcon width={25} height={25} />
      </View>
    </Pressable>
  );
};
