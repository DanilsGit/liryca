// Expo

// React

// React Native
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { userSearch } from "./UserSearchList";
import { Image } from "expo-image";
import FollowButton from "@/modules/artistPublicProfile/components/FollowButton";
import { formatMillionsToM_HundredsToK } from "@/modules/core/utils/miscellaneous";
import { colors, fontSizes } from "@/constants/tokens";

// Hooks

// Definitions

// Components
// Props
interface Props {
  item: userSearch;
  onUserSelect: (user: userSearch) => void;
}
// Api

export default function UserSearchItem({ item, onUserSelect }: Props) {
  const width = Dimensions.get("window").width;
  const styles = createStyles(width);
  return (
    <View style={styles.container}>
      <View style={styles.absolute_icon}>
        <Image source={{ uri: item.icon }} style={styles.icon} />
      </View>
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: item.banner }}
          style={styles.image}
          contentFit="cover"
        />
      </View>
      <View style={{ flex: 1.5 }}>
        <View style={styles.follow_container}>
          <FollowButton follow={true} handleFollow={() => console.log("xd")} />
        </View>
        <View style={{ paddingBottom: 0, paddingHorizontal: 10 }}>
          <Text style={styles.text_title}>{item.name}</Text>
          <Text style={styles.text}>
            {item.count_tracks} Canciones -{" "}
            {formatMillionsToM_HundredsToK(item.followers)} Seguidores
          </Text>
        </View>
      </View>
    </View>
  );
}

const createStyles = (width: number) =>
  StyleSheet.create({
    container: {
      width: width - 70,
      height: 190,
      marginRight: 10,
      borderRadius: 10,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: colors.medium_purple,
    },
    absolute_icon: {
      position: "absolute",
      borderRadius: 1000,
      bottom: "40%",
      left: 10,
      zIndex: 1,
      width: 80 + 10,
      height: 80 + 10,
      backgroundColor: colors.dark_purple,
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      width: 80,
      height: 80,
      borderRadius: 100,
    },
    image: {
      width: "100%",
      height: "100%",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    follow_container: {
      alignItems: "flex-end",
      padding: 5,
    },
    text_title: {
      fontSize: fontSizes.xl2,
      fontFamily: "M-PLUS-2-Bold",
      color: colors.white,
    },
    text: {
      fontSize: fontSizes.md,
      fontFamily: "M-PLUS-2-Regular",
      color: colors.white,
    },
  });
