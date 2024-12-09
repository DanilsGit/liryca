import axios from "axios";
const API_URL = process.env.EXPO_PUBLIC_API_URL;

// Trae la ruta de la API del env
export const userPutRequest = async (token, data, id) =>
  axios.put(`${API_URL}/api/v1/user/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const playbackGetRequest = async (token) =>
  axios.get(`${API_URL}/api/v1/playbackhistory/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
