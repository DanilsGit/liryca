// Expo

// React

// React Native
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { Image } from "expo-image";
import { Dimensions, StyleSheet, View } from "react-native";
import { colors } from "@/constants/tokens";
import { UserOptionsSheet } from "./UserOptionsSheet";

// Hooks

// Definitions

// Components

// Props
// Api

export default function HeaderProfiles() {
  const styles = createStyles();
  const { user } = useAuth();
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: user.profile_banner }}
        style={{ width: "100%", height: "100%" }}
      />

      <View style={[styles.header_icon, { left: width / 2 - 66 }]}>
        <Image
          source={{ uri: user.profile_picture }}
          style={styles.header_icon_img}
        />
      </View>

      {/* Options */}
      <View style={{ position: "absolute", bottom: 10, right: 10 }}>
        <UserOptionsSheet />
      </View>
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    header: {
      position: "relative",
      marginBottom: 75,
      height: 150,
    },
    header_icon: {
      position: "absolute",
      backgroundColor: colors.light_pink,
      width: 135,
      height: 135,
      borderRadius: 100,
      top: 80,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: colors.purple,
      shadowRadius: 30,
      shadowOpacity: 0.1,
      shadowOffset: { width: 5, height: 5 },
      elevation: 10,
    },
    header_icon_img: {
      width: 130,
      height: 130,
      borderRadius: 100,
    },
  });
