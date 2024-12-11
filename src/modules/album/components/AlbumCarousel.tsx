// Expo

// React

// React Native
import { FlatList } from "react-native";
import { useRouter } from "expo-router";
import NoListYet from "@/modules/core/components/NoListYet";
import { AlbumCarouselItem } from "./AlbumCarouselItem";
import { useTranslation } from "react-i18next";


// Hooks

// Definitions

// Components

// Props

export interface AmbumCarousel {
  id: number;
  title: string;
  icon: string;
}

interface Props {
  data: AmbumCarousel[];
}

// Api

export default function AlbumCarousel({ data }: Props) {
  const router = useRouter();
  const { t } = useTranslation();
  const handlePress = (id: number) => {
    router.push(`/album/${id}`);
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <AlbumCarouselItem item={item} handlePress={handlePress} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      ListEmptyComponent={
        <NoListYet>{t("search.no_results")}</NoListYet>
      }
    />
  );
}

// const styles = StyleSheet.create({

// });
