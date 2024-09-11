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
    <View style={{ paddingHorizontal: 20, gap: 15, borderRadius: 15 }}>
      {data.map((item) => (
        <Pressable key={item.id} onPress={() => alert("music")}>
          {({ pressed }) => (
            <View
              style={{
                flexDirection: "row",
                opacity: pressed ? 0.5 : 1,
                flex: 1,
                backgroundColor: themeText.primary,
                borderRadius: 15,
                justifyContent: "flex-end",
                padding: 8,
                shadowColor: "#201536",
                shadowRadius: 10,
                shadowOpacity: 0.1,
                shadowOffset: { width: 0, height: 5 },
                elevation: 1,
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: 60, height: 60, borderRadius: 10 }}
              />
              <View
                style={{
                  justifyContent: "center",
                  flex: 1,
                  marginLeft: 15,
                  padding: 5,
                }}
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
                    color: themeText.secondary,
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
                  padding: 15,
                }}
              >
                <View style={{ gap: 6 }}>
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
