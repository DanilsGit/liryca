// Expo

// React

// React Native
import { ImageBackground } from "expo-image";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useActiveTrack } from "react-native-track-player";

// Hooks

// Definitions

// Components

// Props
interface Props {
  children: React.ReactNode;
  backgroundImage: string;
}
// Api

export default function ScreenImage({ children, backgroundImage }: Props) {
  const activeTrack = useActiveTrack();
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      source={{ uri: backgroundImage }}
    >
      <ScrollView
        style={{ paddingTop: insets.top, backgroundColor: "rgba(0,0,0,0.8)" }}
      >
        <View style={{ flex: 1 }}>{children}</View>
        <View style={{ padding: activeTrack ? 85 : 55 }} />
      </ScrollView>
    </ImageBackground>
  );
}
