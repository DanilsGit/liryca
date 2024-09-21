// Expo
import { Stack, Redirect } from "expo-router";

// React
import { useState } from "react";

// React Native

// Hooks
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { View } from "react-native";
import ScreenLoading from "@/modules/core/components/ScreenLoading";

// Definitions

// Components

// Props

// Api

export default function AuthLayout() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <ScreenLoading />;
  if (user) return <Redirect href="/(tabs)" />;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

// const styles = StyleSheet.create({

// });
