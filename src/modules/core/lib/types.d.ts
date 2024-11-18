export interface DataPlaylistCarousel {
  id: number;
  title: string;
  image: string;
}
interface AlbumCreating {
  title: string;
  showDatePicker: boolean;
  relase_date: Date;
  description: string;
  icon: string;
  file: any;
}

export interface Album {
  id: number;
  title: string;
  artist_id: number;
  release_date: string;
  description: string;
  icon: string;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export interface Song {
  id: string;
  title: string;
  genre: string;
  song_uploaded: string;
  file: DocumentPickerResponse | null;
  time: string;
}
export interface PlayableSong {
  id: string;
  title: string;
  genre: string;
  time: string;
  url: string;
  image: string;
  artist: string;
}

export interface SvgIconProps {
  width: number;
  height: number;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  xmlns?: string;
}
