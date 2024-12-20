// Expo
import { Redirect, Tabs, useRouter } from "expo-router";
// React

// React Native
import {
  HomeIcon,
  PersonIcon,
  SearchIcon,
  StarIcon,
} from "@m/core/components/Icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { themesTab } from "@/constants/themes";
import { colors } from "@/constants/tokens";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import FloatingPlayer from "@/modules/core/components/FloatingPlayer";
import { useEffect } from "react";
import { useKeyboard } from "@/modules/auth/hooks/useActiveKeyboard";
// Hooks

// Definitions

// Components

//Apis

// Props

export default function TabsLayout() {
  const { theme } = useTheme();
  const { user } = useAuth();
  const themeTab = themesTab[theme];
  const router = useRouter();
  const { keyboardVisible } = useKeyboard();

  useEffect(() => {
    if (user && user.role === "artist") {
      router.push("artistProfile");
    }
  }, [user, router]);
  if (!user) return <Redirect href="/(auth)" />;

  return (
    <>
      <Tabs
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            display: !keyboardVisible ? "flex" : "none",
            position: "absolute",
            borderTopWidth: 1,
            borderColor: themeTab.top,
            borderTopLeftRadius: 35,
          },
          tabBarActiveTintColor: colors.light_pink,
          tabBarInactiveTintColor: colors.light_purple,
          tabBarLabel: () => null,
          tabBarBackground: () => (
            <View
              style={{
                flex: 1,
                borderTopLeftRadius: 35,
                overflow: "hidden",
                ...StyleSheet.absoluteFillObject,
              }}
            >
              <LinearGradient
                colors={[themeTab.top, themeTab.bottom]}
                style={{ flex: 1, overflow: "hidden" }}
              />
            </View>
          ),
        }}
      >
        <Tabs.Screen
          name="(home)"
          options={{
            tabBarIcon: ({ color }) => <HomeIcon color={color} />,
            tabBarButton: (props) =>
              user.role === "user" && <TouchableOpacity {...props} />,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ color }) => <SearchIcon color={color} />,
            tabBarButton: (props) =>
              user.role === "user" && <TouchableOpacity {...props} />,
          }}
        />
        <Tabs.Screen
          name="social"
          options={{
            tabBarIcon: ({ color }) => <StarIcon color={color} />,
            tabBarButton: (props) => <TouchableOpacity {...props} />,
          }}
        />

        <Tabs.Screen
          name="listenerProfile"
          options={{
            tabBarIcon: ({ color }) => <PersonIcon color={color} />,
            tabBarButton: (props) => {
              return user.role === "user" ? (
                <TouchableOpacity {...props} />
              ) : null;
            },
          }}
        />

        <Tabs.Screen
          name="artistProfile"
          options={{
            tabBarIcon: ({ color }) => <PersonIcon color={color} />,
            tabBarButton: (props) => {
              return user.role === "artist" ? (
                <TouchableOpacity {...props} />
              ) : null;
            },
          }}
        />

        <Tabs.Screen
          name="artistPublicProfile"
          options={{
            tabBarButton: () => null,
          }}
        />
        <Tabs.Screen
          name="myPlaylist"
          options={{
            tabBarButton: () => null,
          }}
        />
      </Tabs>
      <FloatingPlayer
        style={{
          position: "absolute",
          bottom: 60,
          left: 8,
          right: 8,
        }}
      />
    </>
  );
}

// const styles = StyleSheet.create({

// });
