import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { getPostRequest, postLikeRequest } from "../api/social";
import { useAuth } from "@/modules/auth/hooks/useAuth";

export type PostType = "playlist" | "text" | "album" | "artist" | "song";

export interface Post_Playlist {
  id: number;
  user_id: string;
  profile_picture: string;
  username: string;
  action_type: string;
  content: string;
  type: PostType;
  playlist_id: number;
  name: string;
  owner_id: string;
  owner_name: string;
  description: string;
  image: string;
  released_at: string;
}

export interface Post_Song {
  id: number;
  user_id: string;
  profile_picture: string;
  username: string;
  action_type: string;
  content: string;
  type: PostType;
  title: string;
  duration: string;
  genre: string;
  url_song: string;
  album_id: number;
  album_title: string;
  icon: string;
  artist_id: string;
  artist_name: string;
  released_at: string;
}

export interface Post_Album {
  id: number;
  user_id: string;
  profile_picture: string;
  username: string;
  action_type: string;
  content: string;
  type: PostType;
  album_id: number;
  title: string;
  description: string;
  icon: string;
  artist_id: string;
  artist_name: string;
  released_at: string;
}

export interface Post_Artist {
  id: number;
  user_id: string;
  profile_picture: string;
  username: string;
  action_type: string;
  content: string;
  type: PostType;
  artist_id: number;
  name: string;
  about: string;
  artist_profile_picture: string;
  artist_profile_banner: string;
  released_at: string;
}

export interface Post_Text {
  id: number;
  user_id: string;
  profile_picture: string;
  username: string;
  action_type: string;
  content: string;
  type: PostType;
  released_at: string;
  is_liked: boolean;
  like_count: number;
  comment_count: number;
}

export interface Post {
  id: number;
  user_id: string;
  profile_picture: string;
  username: string;
  action_type: string;
  content: string;
  type: PostType;
  image?: string;
  attachment_id?: string;
  name_attachment?: string;
  owner_name?: string;
  artist_id?: string;
  released_at: string;
  is_liked: boolean;
  like_count: number;
  comment_count: number;
}

export const usePost = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const getPost = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getPostRequest(user.token);
      const post = res.data.data.map((postR: any) => {
        const type: PostType = postR.type;
        return {
          id: postR.id,
          user_id: postR.user_id,
          profile_picture: postR.profile_picture,
          username: postR.username,
          action_type: postR.action_type,
          content: postR.content,
          type: postR.type,
          image:
            type === "artist"
              ? postR.artist_profile_picture
              : type === "playlist"
                ? postR.image
                : type === "text"
                  ? postR.profile_picture
                  : postR.icon,
          attachment_id:
            type === "artist"
              ? postR.artist_id
              : type === "playlist"
                ? postR.playlist_id
                : type === "album"
                  ? postR.album_id
                  : type === "song"
                    ? postR.album_id
                    : undefined,
          name_attachment:
            type === "artist"
              ? postR.name
              : type === "playlist"
                ? postR.name
                : type === "album"
                  ? postR.title
                  : type === "song"
                    ? postR.title
                    : undefined,
          owner_name:
            type === "playlist"
              ? postR.owner_name
              : type === "album"
                ? postR.artist_name
                : undefined,
          released_at: postR.released_at,
          is_liked: postR.is_liked,
          like_count: postR.like_count,
          comment_count: postR.comment_count,
          artist_id: postR.artist_id,
        };
      });
      setPosts(post);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data);
    }
  }, [user.token]);

  const handleLikePost = async (postId: number) => {
    try {
      const newPosts = posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            is_liked: !post.is_liked,
            like_count: post.is_liked
              ? post.like_count - 1
              : post.like_count + 1,
          };
        }
        return post;
      });
      setPosts(newPosts);
      await postLikeRequest(user.token, postId);
    } catch (error) {
      console.log(error.response.data);
      const newPosts = posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            is_liked: !post.is_liked,
            like_count: post.is_liked
              ? post.like_count + 1
              : post.like_count - 1,
          };
        }
        return post;
      });
      setPosts(newPosts);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getPost();
    }, [getPost]),
  );

  return { posts, loading, handleLikePost };
};
