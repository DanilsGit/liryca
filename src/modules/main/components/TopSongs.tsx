// Expo

// React

// React Native
import { Image, Pressable, Text, View } from "react-native";

// Hooks
import { useTheme } from "@m/core/hooks/useTheme";

// Definitions
import { themesText } from "@/constants/themes";
import { fontSizes } from "@/constants/tokens";

// Components
import PinkDot from "./PinkDot";

// Props
interface Props {
  data: {
    id: number;
    title: string;
    album: string;
    image: string;
  }[];
}

// Api

export default function TopSongs({ data }: Props) {
  const { theme } = useTheme();
  const themeText = themesText[theme];

  return (
    <View style={{ padding: 10, gap: 15 }}>
      {data.map((item) => (
        <Pressable key={item.id} onPress={() => alert("music")}>
          {({ pressed }) => (
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                backgroundColor: pressed ? "#00000022" : "transparent",
                borderRadius: 10,
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: 70, height: 70, borderRadius: 10 }}
              />
              <View
                style={{ justifyContent: "center", flex: 1, marginLeft: 15 }}
              >
                <Text
                  style={{
                    color: themeText.secondary,
                    fontFamily: "M-PLUS-2-Bold",
                    fontSize: fontSizes.md,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: themeText.primary,
                    fontSize: fontSizes.sm,
                    fontFamily: "M-PLUS-2-Regular",
                  }}
                >
                  {item.album}
                </Text>
              </View>
              <Pressable
                onPress={() => alert("golaa")}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 10,
                }}
              >
                <View style={{ gap: 5 }}>
                  <PinkDot />
                  <PinkDot />
                </View>
              </Pressable>
            </View>
          )}
        </Pressable>
      ))}
    </View>
  );
}

// const styles = StyleSheet.create({

// });
