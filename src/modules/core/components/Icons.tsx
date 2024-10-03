import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { Image } from "react-native";

export const HomeIcon = (props: any) => {
  return <AntDesign name="home" size={24} color="#fff" {...props} />;
};

export const CircleInfoIcon = (props: any) => {
  return <AntDesign name="infocirlceo" size={24} color="#fff" {...props} />;
};

export const SearchIcon = (props: any) => {
  return <AntDesign name="search1" size={24} color="#fff" {...props} />;
};

export const BookshlfIcon = (props: any) => {
  return (
    <MaterialCommunityIcons
      name="bookshelf"
      size={24}
      color="#fff"
      {...props}
    />
  );
};

export const StarIcon = (props: any) => {
  return <AntDesign name="staro" size={24} color="#fff" {...props} />;
};

export const PersonIcon = (props: any) => {
  return <Octicons name="person" size={24} color="#fff" {...props} />;
};

export const LirycaIcon = (props: any) => {
  return (
    <Image
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/liryca-c9f2e.appspot.com/o/icons%2FlirycaIcon.png?alt=media&token=155f0a93-91c3-4a6a-bd7f-2b20ba6a3b78",
      }}
      style={{ width: 24, height: 24 }}
      resizeMode="contain"
      {...props}
    />
  );
};

export const InputUserIcon = (props: any) => {
  return (
    <Image
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/liryca-c9f2e.appspot.com/o/icons%2FinputUserIcon.png?alt=media&token=c729152b-38d9-46dd-813e-7b7daedbc684",
      }}
      style={{ width: 24, height: 24 }}
      resizeMode="contain"
      {...props}
    />
  );
};

export const InputPasswordIcon = (props: any) => {
  return (
    <Image
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/liryca-c9f2e.appspot.com/o/icons%2FinputPasswordIcon.png?alt=media&token=fdaae440-92b2-45e9-ab3c-fb4cd727fa5e",
      }}
      style={{ width: 24, height: 24 }}
      resizeMode="contain"
      {...props}
    />
  );
};
