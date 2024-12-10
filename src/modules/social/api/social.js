import axios from "axios";
const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const getPostRequest = (token) =>
  axios.get(`${API_URL}/api/v1/post`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const postLikeRequest = (token, postId) =>
  axios.post(`${API_URL}/api/v1/postlike/${postId}`, null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const postWritePostRequest = (token, data) =>
  axios.post(`${API_URL}/api/v1/post`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getCommentsbyPostIdRequest = (token, postId) =>
  axios.get(`${API_URL}/api/v1/comment/post/${postId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const postLikeCommentRequest = (token, commentId) =>
  axios.post(`${API_URL}/api/v1/commentlike/${commentId}`, null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const postCommentPostRequest = (token, data) =>
  axios.post(`${API_URL}/api/v1/comment`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
