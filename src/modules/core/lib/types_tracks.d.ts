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

export interface shared {
  id: string;
  username: string;
  profile_picture: string;
}
export interface Playlist {
  id: number;
  name: string;
  image: string;
  user_id: string;
  profile_picture: string;
  created_at: string;
  description: string;
  isActive: boolean;
  shared_with: shared[];
  privacy: string;
}

export interface Artist {
  id: number;
  name: string;
  image: string;
  tracks: Track[];
}

export type TrackWithPlaylist = Track & { playlist?: string[] };
