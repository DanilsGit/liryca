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
import OpcPostList from "../components/OpcPostList";
import { usePost } from "../hooks/usePost";
import ScreenLoading from "@/modules/core/components/ScreenLoading";
import { useRouter } from "expo-router";

// Hooks

// Definitions

// Components

// Props

// Api

export default function Social() {
  const { theme } = useTheme();
  const styles = createStyles(themesText[theme]);
  const { followedArtist } = useMyArtist();
  const { posts, loading, handleLikePost } = usePost("all");
  const router = useRouter();

  const handlePress = () => {
    router.navigate("/writeAPost");
  };

  if (loading) return <ScreenLoading />;

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
          <Text style={styles.title_p}>Más recientes</Text>
          <OpcPostList data={posts} handleLike={handleLikePost} />
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
