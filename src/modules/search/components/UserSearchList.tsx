// Expo

// React

// React Native
import NoListYet from "@/modules/core/components/NoListYet";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-actions-sheet";
import UserSearchItem from "./UserSearchItem";
import { useTranslation } from "react-i18next";


// Hooks

// Definitions

// Components

// Props
export interface userSearch {
  id: string;
  banner: string;
  icon: string;
  name: string;
  count_tracks: number;
  followers: number;
  is_following: boolean;
  role?: string;
}
interface Props {
  data: userSearch[];
}
// Api onUserSelect: (user: userSearch) => void;

export default function UserSearchList({ data }: Props) {
  const styles = createStyles();
  const { t } = useTranslation();
  const handleUserSelect = (user: userSearch) => {
    console.log(user);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <UserSearchItem item={item} onUserSelect={handleUserSelect} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        ListEmptyComponent={<NoListYet>{t("search.no_results")}</NoListYet>}
      />
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {},
  });
