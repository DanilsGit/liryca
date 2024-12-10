import { useCallback, useState } from "react";
import { postWritePostRequest } from "../api/social";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { useFocusEffect, useRouter } from "expo-router";
import * as SecureStorage from "expo-secure-store";

export type postAction = "recommended" | "shared" | "not_recommended";
export interface PostAttachment {
  id?: number;
  name?: string;
  image?: string;
  owner?: string;
  type: "song" | "album" | "artist" | "playlist" | "text";
}

export const useWriteAPost = () => {
  const [postContent, setPostContent] = useState("");
  const [action, setAction] = useState<postAction>("recommended");
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [attachment, setAttachment] = useState<PostAttachment | null>(null);

  const getAttachment = async () => {
    const data = await SecureStorage.getItemAsync("post_attachment");
    const attachment = JSON.parse(data);
    setAttachment(attachment);
    await SecureStorage.deleteItemAsync("post_attachment");
  };

  const handleWritePost = (content: string) => {
    setPostContent(content);
  };

  const handleActionChange = (action: postAction) => {
    setAction(action);
  };

  const handleSubmitPost = async () => {
    setLoading(true);
    try {
      const dataToSend = {
        content: postContent,
        id: attachment?.id || null,
        post_type: attachment?.type || "text",
        action_type: action,
      };
      await postWritePostRequest(user.token, dataToSend);
      router.navigate("/social");
    } catch (error) {
      console.log(error.response.data);
    }
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      getAttachment();
    }, [])
  );

  return {
    postContent,
    action,
    handleActionChange,
    handleWritePost,
    handleSubmitPost,
    attachment,
    loading,
  };
};
