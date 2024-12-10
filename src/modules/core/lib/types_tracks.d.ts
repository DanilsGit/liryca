import { Track } from "react-native-track-player";

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
