import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  getCommentsbyPostIdRequest,
  postCommentPostRequest,
  postLikeCommentRequest,
  postLikeRequest,
} from "../api/social";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { Post } from "./usePost";
import * as SecureStorage from "expo-secure-store";

type call = "call" | "no-call";

export interface Comment {
  id: number;
  content: string;
  likes: number;
  user_id: string;
  name: string;
  profile_picture: string;
  comment_at: string;
  liked: boolean;
}

export const useCommentPost = (call: call) => {
  const [post, setPost] = useState<Post>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const [commentContent, setCommentContent] = useState("");

  const handleCommentContentChange = (text: string) => {
    setCommentContent(text);
  };

  const handleLikePost = async () => {
    try {
      const newPost = {
        ...post,
        is_liked: !post.is_liked,
        like_count: post.is_liked ? post.like_count - 1 : post.like_count + 1,
      };
      setPost(newPost);
      await postLikeRequest(user.token, post.id);
    } catch (error) {
      console.log(error.response.data);
      const newPost = {
        ...post,
        is_liked: !post.is_liked,
        like_count: post.is_liked ? post.like_count + 1 : post.like_count - 1,
      };
      setPost(newPost);
    }
  };

  const handleCommentPost = async () => {
    setLoading(true);
    try {
      await postCommentPostRequest(user.token, {
        post_id: post.id,
        content: commentContent,
      });
      router.back();
    } catch (error) {
      console.log(error.response.data);
    }
    setLoading(false);
  };

  const handleLikeComment = async (id: number) => {
    try {
      const newComments = comments.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            liked: !comment.liked,
            likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
          };
        }
        return comment;
      });
      setComments(newComments);
      await postLikeCommentRequest(user.token, id);
    } catch (error) {
      const newComments = comments.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            liked: !comment.liked,
            likes: comment.liked ? comment.likes + 1 : comment.likes - 1,
          };
        }
        return comment;
      });
      setComments(newComments);
      console.log(error.response.data);
    }
  };

  const getCommentsAndPost = useCallback(async () => {
    setLoading(true);
    const saved = await SecureStorage.getItemAsync("commentsInPost");
    const data = JSON.parse(saved) as Post;
    setPost(data);

    const res = await getCommentsbyPostIdRequest(user.token, data.id);
    setComments(res.data);
    setLoading(false);
  }, [user.token]);

  const getPost = useCallback(async () => {
    setLoading(true);
    const saved = await SecureStorage.getItemAsync("postToComment");
    const data = JSON.parse(saved) as Post;
    setPost(data);
    setLoading(false);
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (call === "call") {
        getCommentsAndPost();
      } else {
        getPost();
      }
    }, [call, getCommentsAndPost, getPost]),
  );

  return {
    comments,
    post,
    loading,
    handleCommentPost,
    handleLikeComment,
    handleLikePost,
    handleCommentContentChange,
    commentContent,
  };
};
