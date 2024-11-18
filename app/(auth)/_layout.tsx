// Expo
import { Stack, Redirect } from "expo-router";

// React

// React Native

// Hooks
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { SheetManager } from "react-native-actions-sheet";

// Definitions

// Components

// Props

// Api

export default function AuthLayout() {
  const { user } = useAuth();
  SheetManager.hide("listener-options-sheet");
  if (user) return <Redirect href="/(tabs)" />;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

// const styles = StyleSheet.create({

// });
