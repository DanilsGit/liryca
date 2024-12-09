// Expo

// React

// React Native
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import { fontSizes } from "@/constants/tokens";
import { useTheme } from "@/modules/core/hooks/useTheme";
import ArtistCarousel from "@/modules/main/components/ArtistCarousel";
import { useMyArtist } from "@/modules/main/hooks/useTopArtist";
import HeaderImageTitle from "@/modules/search/components/HeaderImageTitle";
import ButtonToPost from "@/modules/search/screen/ButtonToPost";
import { StyleSheet, Text, View } from "react-native";
import OpcPost from "../components/OpcPost";

// Hooks

// Definitions

// Components

// Props
const data = {
  post_id: "1",
  user_name: "user_name",
  action: "Ha recomendado",
  content: "content",
  image: "https://picsum.photos/200/300",
  artist_name: "artist_name",
  name_media: "name_media",
};
// Api

export default function Social() {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);
  const { followedArtist } = useMyArtist();

  const handlePress = () => {
    console.log("handlePress");
  };

  return (
    <View>
      <HeaderImageTitle>
        <Text style={styles.title}>Conversa y exprésate</Text>
      </HeaderImageTitle>
      <View style={styles.social_content}>
        <View style={{ paddingHorizontal: 15 }}>
          <ButtonToPost onPress={handlePress} />
        </View>
        <ArtistCarousel data={followedArtist} />

        <View style={{ gap: 15 }}>
          <Text style={styles.title_p}>Más relevantes</Text>
          <OpcPost data={data} />
        </View>
      </View>
    </View>
  );
}

const createStyles = (colorText: ThemeText) =>
  StyleSheet.create({
    container: {},
    title: {
      fontSize: fontSizes.xl2,
      color: colorText.secondary,
      fontFamily: "M-PLUS-2-ExtraBold",
    },
    social_content: { paddingVertical: 20, gap: 30 },
    title_p: {
      fontSize: fontSizes.xl2,
      color: colorText.secondary,
      fontFamily: "M-PLUS-2-ExtraBold",
      paddingHorizontal: 15,
    },
  });
