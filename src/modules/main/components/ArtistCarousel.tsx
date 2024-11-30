// Expo

// React

// React Native
import { FlatList } from "react-native";
import { ArtistIcon } from "./ArtistIcon";
import { PublicArtist } from "@/modules/core/lib/types";
import { useRouter } from "expo-router";
// Hooks

// Definitions

// Components

// Props

interface Props {
  data: PublicArtist[];
}

// Api

export default function ArtistCarousel({ data }: Props) {
  const router = useRouter();

  const handlePress = (id: string) => {
    router.push(`/artistPublicProfile/${id}`);
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <ArtistIcon item={item} index={index} handlePress={handlePress} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}

// const styles = StyleSheet.create({

// });
