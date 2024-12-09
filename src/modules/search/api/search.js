import axios from "axios";
const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const getSearchResults = async (token, searchTerm) =>
  axios.get(`${API_URL}/api/v1/search/${searchTerm}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
