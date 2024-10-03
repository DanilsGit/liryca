import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { getCountries } from "../api/apis";
import { Alert } from "react-native";

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
      name: credentials.name,
      email: credentials.email,
      banner: "https://i.redd.it/6uoazfklyo7b1.jpg",
      icon: "https://preview.redd.it/cat-standing-up-crying-v0-dtmdh6nbxsx81.png?auto=webp&s=a73aac17068f724773facf9a2ce54bc0342cf30e",
      followers: 2,
      following: 3,
      playlist: 10,
      liked: 3,
      role: "listener",
      token: "",
    };

    if (!user.name) {
      Alert.alert("Nombre no válido", "Por favor, introduce un nombre");
      return;
    }

    if (!user.email) {
      Alert.alert("Email no válido", "Por favor, introduce un email");
      return;
    }

    // Contiene mayúsculas, minúsculas, números y caracteres especiales
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.$@$!%*?&])[A-Za-z\d.$@$!%*?&]{8,}$/;

    if (!regex.test(credentials.password)) {
      Alert.alert(
        "Contraseña no válida",
        "La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial"
      );
      return;
    }

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

export const useAuthScren = () => {
  const [currentScreen, setCurrentScreen] = useState<AuthScreen>("welcome");

  const changeLogin = () => setCurrentScreen("login");
  const changeRegister = () => setCurrentScreen("register");
  const changeForgotPassword = () => setCurrentScreen("forgotPassword");
  const changeSetPassword = () => setCurrentScreen("setPassword");

  return {
    currentScreen,
    changeLogin,
    changeRegister,
    changeForgotPassword,
    changeSetPassword,
  };
};
