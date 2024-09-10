// Expo
import { Tabs } from "expo-router";
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
import { useTheme } from "@m/core/hooks/useTheme";
import { themesTab } from "@/constants/themes";
import { colors } from "@/constants/tokens";
import { useAuth } from "@/modules/core/hooks/useAuth";
// Hooks

// Definitions

// Components

//Apis

// Props

export default function TabsLayout() {
  const { theme } = useTheme();
  const { user } = useAuth();

  const themeTab = themesTab[theme];

  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          borderTopLeftRadius: 35,
        },
        tabBarActiveTintColor: colors.purple,
        tabBarInactiveTintColor: colors.pink,
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
          tabBarButton: (props) => <TouchableOpacity {...props} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => <SearchIcon color={color} />,
          tabBarButton: (props) => <TouchableOpacity {...props} />,
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
            return user?.role === "listener" ? (
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
            return user?.role === "artist" ? (
              <TouchableOpacity {...props} />
            ) : null;
          },
        }}
      />
    </Tabs>
  );
}

// const styles = StyleSheet.create({

// });
