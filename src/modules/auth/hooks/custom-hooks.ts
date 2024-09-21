import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { getCountries } from "../api/apis";

export const useRegistrationForm = () => {
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    birthdate: new Date(),
    showDatePicker: false,
  });

  const handleChange = (field, value) => {
    setCredentials((prevState) => ({
      ...prevState,
      [field]: value,
    }));
    console.log(credentials);
  };

  const handleDateChange = (_, selectedDate) => {
    const currentDate = selectedDate || credentials.birthdate;
    handleChange("birthdate", currentDate);
    handleChange("showDatePicker", false);
  };

  const handleRegister = () => {
    const user = {
      id: 1,
      name: "Gato_feliz01421",
      email: "johndoe@gmail.com",
      banner: "https://i.redd.it/6uoazfklyo7b1.jpg",
      icon: "https://preview.redd.it/cat-standing-up-crying-v0-dtmdh6nbxsx81.png?auto=webp&s=a73aac17068f724773facf9a2ce54bc0342cf30e",
      followers: 2,
      following: 3,
      playlist: 10,
      liked: 3,
      role: "listener",
      token: "",
    };
    login(user);
  };

  return {
    credentials,
    handleChange,
    handleDateChange,
    handleRegister,
  };
};

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCountriesData = async () => {
    setLoading(true);
    try {
      const res = await getCountries();
      const data = res.data;
      const countries = data
        .map((country: any) => ({
          name: country.name.common,
          code: country.cca2,
        }))
        .sort((a, b) => a.name.localeCompare(b.name));
      setCountries(countries);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  return { countries, loading };
};
