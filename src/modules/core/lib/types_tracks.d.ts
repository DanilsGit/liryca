import { Track } from "react-native-track-player";

export interface Post {
  id: number;
  from: string;
  message: string;
  created_time: string;
  album_attachment?: Album;
  song_attachment?: Track;
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
