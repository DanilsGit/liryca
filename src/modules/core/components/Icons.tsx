import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const HomeIcon = (props: any) => {
  return <AntDesign name="home" size={24} color="white" {...props} />;
};

export const CircleInfoIcon = (props: any) => {
  return <AntDesign name="infocirlceo" size={24} color="white" {...props} />;
};

export const SearchIcon = (props: any) => {
  return <AntDesign name="search1" size={24} color="white" {...props} />;
};

export const BookshlfIcon = (props: any) => {
  return (
    <MaterialCommunityIcons
      name="bookshelf"
      size={24}
      color="white"
      {...props}
    />
  );
};
