// Expo
import { Tabs } from "expo-router";
// React

// React Native
import {
  BookshlfIcon,
  HomeIcon,
  SearchIcon,
} from "../../src/modules/core/components/Icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
// Hooks

// Definitions

// Components

//Apis

// Props

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          borderTopLeftRadius: 35,
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
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
              colors={["#0ff", "#f0f"]}
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
    </Tabs>
  );
}

// const styles = StyleSheet.create({

// });
