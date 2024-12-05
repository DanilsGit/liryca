// Expo

// React

// React Native
import { shared } from "@/modules/core/lib/types_tracks";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

// Hooks

// Definitions

// Components

// Props
interface Props {
  owner_picture: string;
  partners: shared[];
}
// Api

export default function OwnerAndPartners({ owner_picture, partners }: Props) {
  const styles = createStyles();
  if (!partners.length) return null;
  return (
    <View style={styles.owner_and_partners}>
      <Image source={{ uri: owner_picture }} style={styles.image} />
      {partners.map((partner) => (
        <Image
          key={partner.id}
          source={{ uri: partner.profile_picture }}
          style={styles.image}
        />
      ))}
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    owner_and_partners: {
      marginVertical: 10,
      flexDirection: "row",
      justifyContent: "flex-end",
      gap: 5,
    },
    image: {
      width: 30,
      height: 30,
      borderRadius: 100,
    },
  });
