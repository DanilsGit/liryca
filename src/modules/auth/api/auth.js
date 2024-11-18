import axios from "axios";
const API_URL = process.env.EXPO_PUBLIC_API_URL;

// Trae la ruta de la API del env
export const registerRequest = (data) =>
  axios.post(`${API_URL}/api/v1/auth/register`, data);

export const loginRequest = (data) =>
  axios.post(`${API_URL}/api/v1/auth/login`, data);

export const logoutRequest = (token) =>
  axios.get(`${API_URL}/api/v1/auth/logout`, null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
