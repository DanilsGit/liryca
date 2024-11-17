import { Track } from "react-native-track-player";

export interface DataPlaylistCarousel {
  id: number;
  title: string;
  image: string;
}

export interface Album {
  id: number;
  from?: string;
  title: string;
  year: number;
  image: string;
  type: string;
}

export interface Post {
  isLiked: boolean;
  id: number;
  from: string;
  message: string;
  created_time: string;
  album_attachment?: Album;
  song_attachment?: Track;
}

export interface SvgIconProps {
  width: number;
  height: number;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  xmlns?: string;
}
