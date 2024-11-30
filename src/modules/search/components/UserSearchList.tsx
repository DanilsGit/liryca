// Expo

// React

// React Native
import NoListYet from "@/modules/core/components/NoListYet";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-actions-sheet";
import UserSearchItem from "./UserSearchItem";

// Hooks

// Definitions

// Components

// Props
export interface userSearch {
  id: number;
  banner: string;
  icon: string;
  name: string;
  count_tracks: number;
  followers: number;
}
interface Props {
  data: userSearch[];
}
// Api onUserSelect: (user: userSearch) => void;

export default function UserSearchList({ data }: Props) {
  const styles = createStyles();

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
        ListEmptyComponent={<NoListYet>No users have found</NoListYet>}
      />
    </View>
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {},
  });
