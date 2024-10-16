import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { Image } from "react-native";
import Svg, { Circle, Path, Rect } from "react-native-svg";
import { SvgIconProps } from "../lib/types";
import { colors } from "@/constants/tokens";

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

export const PlayTrackIcon = (props: any) => {
  return <AntDesign name="caretright" size={24} color="#fff" {...props} />;
};

export const PauseTrackIcon = (props: any) => {
  return <AntDesign name="pause" size={24} color="#fff" {...props} />;
};

export const PausePlayerIcon = (props: SvgIconProps) => {
  return (
    <Svg
      width={183}
      height={183}
      viewBox="0 0 183 183"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={91.5} cy={91.5} r={91.5} fill="#fff" />
      <Rect x={62} y={58} width={23} height={70} rx={5} fill="#2C2135" />
      <Rect x={97} y={58} width={23} height={70} rx={5} fill="#2C2135" />
    </Svg>
  );
};

export const PlayPlayerIcon = (props: SvgIconProps) => {
  return (
    <Svg
      width={183}
      height={183}
      viewBox="0 0 183 183"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={91.5} cy={91.5} r={91.5} fill="#fff" />
      <Path
        d="M129.725 90.725L77.382 48a1 1 0 00-1.632.775v85.45a1 1 0 001.632.775l52.343-42.725a1 1 0 000-1.55z"
        fill="#2C2135"
        stroke="#fff"
        strokeWidth={8}
      />
    </Svg>
  );
};

export const SkipToNextTrackIcon = (props: any) => {
  return <AntDesign name="stepforward" size={24} color="#fff" {...props} />;
};

export const SkipToPreviousTrackIcon = (props: any) => {
  return <AntDesign name="stepbackward" size={24} color="#fff" {...props} />;
};

export const DownArrowIcon = (props: SvgIconProps) => {
  return (
    <Svg
      viewBox="0 0 93 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23.25 34.875l23.25 23.25 23.25-23.25"
        stroke={props.stroke ?? "#fff"}
        strokeWidth={props.strokeWidth ?? 5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const DotsIcon = (props: SvgIconProps) => {
  return (
    <Svg
      viewBox="0 0 59 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={6} cy={6} r={6} fill="#fff" />
      <Circle cx={30} cy={6} r={6} fill="#fff" />
      <Circle cx={53} cy={6} r={6} fill="#fff" />
    </Svg>
  );
};

export const HeartIcon = (props: SvgIconProps) => {
  return (
    <Svg viewBox="0 0 65 58" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M32.097 17.009h.5c0-4.628 1.792-8.673 4.596-11.646C40.083 2.385 43.889.5 48.146.5c4.34 0 8.143 1.886 10.948 4.858 2.81 3.063 4.6 7.11 4.6 11.65 0 4.63-1.792 8.676-4.597 11.649l-27 28.614-26.994-28.61c-.001 0-.002 0-.003-.002C2.29 25.597.5 21.55.5 17.01c0-4.628 1.792-8.673 4.596-11.646C7.986 2.385 11.792.5 16.049.5c4.339 0 8.143 1.886 10.948 4.858 2.81 3.063 4.6 7.11 4.6 11.65h.5z"
        stroke={props.stroke ?? "#fff"}
        strokeWidth={props.strokeWidth ?? 1}
      />
    </Svg>
  );
};

export const ShareIcon = (props: SvgIconProps) => {
  return (
    <Svg
      viewBox="0 0 58 58"
      fill={colors.light_pink}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20.76 32.65l16.505 9.618m-.024-26.535L20.759 25.35M50.75 12.084a7.25 7.25 0 11-14.5 0 7.25 7.25 0 0114.5 0zM21.75 29a7.25 7.25 0 11-14.5 0 7.25 7.25 0 0114.5 0zm29 16.917a7.25 7.25 0 11-14.5 0 7.25 7.25 0 0114.5 0z"
        stroke={props.stroke ?? "#A985C5"}
        strokeWidth={props.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const RepeatIcon = (props: any) => {
  return <AntDesign name="retweet" size={24} color="#fff" {...props} />;
};

export const NoRepeatIcon = (props: any) => {
  return (
    <MaterialCommunityIcons
      name="repeat-off"
      size={24}
      color="#fff"
      {...props}
    />
  );
};

export const RepeatOnceIcon = (props: any) => {
  return (
    <MaterialCommunityIcons
      name="repeat-once"
      size={24}
      color="#fff"
      {...props}
    />
  );
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
