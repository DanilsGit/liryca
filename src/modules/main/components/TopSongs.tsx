// Expo

import { themesText } from "@/constants/themes";
import { fontSizes } from "@/constants/tokens";
import { useTheme } from "@m/core/hooks/useTheme";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import PinkDot from "./PinkDot";

// React

// React Native

// Hooks

// Definitions

// Components

// Props

// Api

export default function TopSongs() {
  const { theme } = useTheme();
  const themeText = themesText[theme];

  const data = [
    {
      id: 1,
      title: "Cancion 1",
      album: "Artista 1",
      image:
        "https://www.billboard.com/wp-content/uploads/media/tyler-the-creator-igor-album-art-2019-billboard-embed.jpg?w=600",
    },
    {
      id: 2,
      title: "Cancion 2",
      album: "Artista 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF3_2_mVdY5B9Tgh96dj3iJ_r66xhP0di7g&s",
    },
    {
      id: 3,
      title: "Cancion 3",
      album: "Artista 3",
      image:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/04/18/USAT/73369581007-001-taylor-swift-2006.jpeg?width=700&height=700&fit=crop&format=pjpg&auto=webp",
    },
    {
      id: 4,
      title: "Cancion 4",
      album: "Artista 4",
      image:
        "https://design-assets.adobeprojectm.com/content/download/express/public/urn:aaid:sc:VA6C2:7c3b1fb9-cb85-556e-bc39-b03fc1648116/component?assetType=TEMPLATE&etag=504d5d0336ae43219f94cf4659869a24&revision=c96797a5-5486-4e7c-9413-01b6ab631f29&component_id=2935aeda-9179-4584-902d-4f16d2cbff55",
    },
  ];

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
                    fontWeight: "bold",
                    fontSize: fontSizes.md,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{ color: themeText.primary, fontSize: fontSizes.sm }}
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

const styles = StyleSheet.create({
  primaryButton: {},
});
