import { Track } from "react-native-track-player";
import { Album } from "./types";

export interface Post {
  id: number;
  from: string;
  message: string;
  created_time: string;
  album_attachment?: Album;
  song_attachment?: Track;
  isLiked: boolean;
}

export interface Playlist {
  id: number;
  title: string;
  image: string;
  tracks: Track[];
}

export interface Artist {
  id: number;
  name: string;
  image: string;
  tracks: Track[];
}

export type TrackWithPlaylist = Track & { playlist?: string[] };
