import axios from "axios";

export const getCountries = async () =>
  await axios.get("https://restcountries.com/v3.1/all");
