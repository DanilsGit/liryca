import axios from "axios";
const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const publicArtistGetRequest = (token, id) =>
  axios.get(`${API_URL}/api/v1/artist/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const publicListAlbumGetRequest = (token, id) =>
  axios.get(`${API_URL}/api/v1/album/by-user-id/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// TODO: OTRA CARPETA PARA SEGUIR USUARIO

export const publicFollowUserGetRequest = (token, user_id) =>
  axios.get(`${API_URL}/api/v1/follow/followUnit/${user_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const publicFollowUserPostRequest = (token, user_id) =>
  axios.post(
    `${API_URL}/api/v1/follow`,
    {
      following_id: user_id,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const publicUnfollowUserDeleteRequest = (token, user_id) =>
  axios.delete(`${API_URL}/api/v1/follow/${user_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// export const publicFollowersFollowing = (token) =>
//   axios.get(`${API_URL}/api/v1/follow/get_follows`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
