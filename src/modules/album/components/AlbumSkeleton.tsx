// Expo

// React

// React Native
import { colors, fontSizes } from "@/constants/tokens";
import HeaderBackTitleOptions from "@/modules/core/components/HeaderBackTitleOptions";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";

// Hooks

// Definitions

// Components
// Props

// Api

export default function AlbumSkeleton() {
  const styles = createStyles();

  return (
    <View style={styles.overlay_container}>
      <HeaderBackTitleOptions title="................." />

      <View style={styles.presentation}>
        <View style={styles.presentation_header}>
          <View style={styles.presentation_header_image} />
          <View>
            <Text style={styles.title_presentation_header}>............</Text>
            <Text style={styles.text_presentation_header}>............</Text>
          </View>
        </View>
      </View>

      <View style={{ paddingTop: 20 }}>
        <ActivityIndicator size="large" color={colors.light_purple} />
      </View>
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    overlay_container: {
      flex: 1,
      backgroundColor: colors.dark_purple,
    },
    text: {
      color: colors.light_pink,
      fontSize: fontSizes.md,
      fontFamily: "M-PLUS-2-Bold",
      textTransform: "capitalize",
    },
    presentation: {
      padding: 20,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: colors.light_purple,
    },
    presentation_header: {
      flexDirection: "row",
      alignItems: "center",
    },
    presentation_header_image: {
      width: 110,
      height: 110,
      borderRadius: 10,
      marginRight: 20,
      backgroundColor: colors.light_pink,
    },
    title_presentation_header: {
      fontSize: fontSizes.xl,
      fontFamily: "M-PLUS-2-Bold",
      color: colors.light_purple,
      width: 200,
      textTransform: "capitalize",
    },
    text_presentation_header: {
      color: colors.white,
      fontSize: fontSizes.lg,
      fontFamily: "M-PLUS-2-Regular",
    },
    presentation_controls: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
      paddingHorizontal: 10,
    },
    presentation_controls_like: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    presentation_controls_share: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
  });
