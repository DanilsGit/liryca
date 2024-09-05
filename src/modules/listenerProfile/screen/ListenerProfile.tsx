// Expo

import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

// React

// React Native

// Hooks
import { useAuth } from "@/modules/core/hooks/useAuth";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { themesText } from "@/constants/themes";
import { fontSizes } from "@/constants/tokens";
import { useTranslation } from "react-i18next";

// Definitions

// Components

// Props

// Api

export default function ListenerProfile() {
  const { user } = useAuth();
  const { theme } = useTheme();
  const { t } = useTranslation();

  const width = Dimensions.get("window").width;
  const themeText = themesText[theme];
  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: user?.banner }}
          style={{ width: width, height: "100%" }}
        />

        <View style={[styles.header_icon, { left: width / 2 - 75 }]}>
          <Image
            source={{ uri: user?.icon }}
            style={{
              width: 145,
              height: 145,
              borderRadius: 100,
            }}
          />
        </View>

        <Pressable
          onPress={() => alert("options")}
          style={{ position: "absolute", bottom: 10, right: 10 }}
        >
          <Text style={{ color: "white" }}>Options</Text>
        </Pressable>
      </View>

      {/* Stats and Name */}
      <View style={{ alignItems: "center" }}>
        <View style={styles.starts}>
          <Text
            style={{
              color: themeText.primary,
              fontSize: fontSizes.lg,
              fontWeight: "bold",
            }}
          >
            {user?.name}
          </Text>
          {/* Stats */}
          <View style={styles.starts_stats}>
            {/* Followers */}
            <View style={styles.stats_number_container}>
              <Text
                style={{
                  color: themeText.secondary,
                  fontSize: fontSizes.xl,
                  fontWeight: "bold",
                }}
              >
                {user?.followers}
              </Text>
              <Text
                style={{ color: themeText.primary, fontSize: fontSizes.sm }}
              >
                {t("profile.followers")}
              </Text>
            </View>
            {/* Likes */}
            <View style={styles.stats_number_container}>
              <Text
                style={{
                  color: themeText.secondary,
                  fontSize: fontSizes.xl,
                  fontWeight: "bold",
                }}
              >
                {user?.liked}
              </Text>
              <Text
                style={{ color: themeText.primary, fontSize: fontSizes.sm }}
              >
                {t("profile.likes")}
              </Text>
            </View>
            {/* Playlist */}
            <View style={styles.stats_number_container}>
              <Text
                style={{
                  color: themeText.secondary,
                  fontSize: fontSizes.xl,
                  fontWeight: "bold",
                }}
              >
                {user?.playlist}
              </Text>
              <Text
                style={{ color: themeText.primary, fontSize: fontSizes.sm }}
              >
                {t("profile.playlists")}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "relative",
    marginBottom: 50,
    height: 200,
  },
  header_icon: {
    position: "absolute",
    backgroundColor: "#fff",
    width: 150,
    height: 150,
    borderRadius: 100,
    top: 90,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowRadius: 10,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    elevation: 10,
  },
  starts: {
    width: "80%",
    alignItems: "center",
    gap: 5,
  },
  starts_stats: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingTop: 10,
    borderColor: "#00000022",
    borderTopWidth: 1,
  },
  stats_number_container: {
    alignItems: "center",
  },
});
