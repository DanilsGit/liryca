import { Album, DataPlaylistCarousel } from "@/modules/core/lib/types";
import { useEffect, useState } from "react";
import { Track } from "react-native-track-player";
import { useDebouncedCallback } from "use-debounce";
import { getSearchResults } from "../api/search";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { userSearch } from "../components/UserSearchList";

export interface SearchResults {
  songs: Track[];
  albums: Album[];
  playlists: DataPlaylistCarousel[];
  artists: userSearch[];
  users: userSearch[];
}

export const useSearch = () => {
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SearchResults>(null);

  const handleSearch = (text: string) => {
    setLoading(true);
    setSearch(text);
    setResults(null);
  };

  const resultsSearch = useDebouncedCallback(async () => {
    setLoading(true);
    if (!search) return;
    if (search.length < 3) return;
    const res = await getSearchResults(user.token, search);
    const songs = res.data.songs.map((song) => ({
      ...song,
      id: song.id,
      artist: song.artist_name,
      title: song.title,
      image: song.album_image,
      url: song.url_song,
      time: song.duration,
      artist_id: song.artist_id,
    }));
    const albums = res.data.albums;
    const playlists = res.data.playlists.map((playlist) => ({
      id: playlist.id,
      title: playlist.name,
      icon: playlist.image,
    }));
    const artists = res.data.artists.map((artist) => ({
      id: artist.id,
      banner: artist.profile_banner,
      icon: artist.profile_picture,
      name: artist.username,
      count_tracks: artist.count_tracks || 0,
      followers: artist.follow,
      is_following: artist.follow,
    }));
    const users = res.data.users.map((user) => ({
      id: user.id,
      banner: user.profile_banner,
      icon: user.profile_picture,
      name: user.username,
      count_tracks: user.count_tracks || 0,
      followers: user.follow,
      is_following: user.follow,
    }));
    setResults({ songs, albums, playlists, artists, users });
    setLoading(false);
  }, 1000);

  useEffect(() => {
    resultsSearch();
  }, [resultsSearch, search]);

  return { search, handleSearch, loading, results };
};
