// Expo
import { Tabs } from "expo-router";
// React

// React Native
import {
  BookshlfIcon,
  HomeIcon,
  SearchIcon,
  StarIcon,
} from "@/modules/core/components/Icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { themesTab } from "@/constants/themes";
import { ThemeTab, ThemeTabKey } from "@/constants/themesTypes";
import { colors } from "@/constants/tokens";
// Hooks

// Definitions

// Components

//Apis

// Props

export default function TabsLayout() {
  const { theme } = useTheme();

  const themeTab = themesTab[theme as ThemeTabKey] as ThemeTab;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          borderTopLeftRadius: 35,
        },
        tabBarActiveTintColor: colors.pink,
        tabBarInactiveTintColor: colors.purple,
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
        name="home"
        options={{
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => <SearchIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="social"
        options={{
          tabBarIcon: ({ color }) => <StarIcon color={color} />,
        }}
      />
    </Tabs>
  );
}

// const styles = StyleSheet.create({

// });
