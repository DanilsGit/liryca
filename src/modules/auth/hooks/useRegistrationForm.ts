import { useAuth } from "./useAuth";
import { Alert } from "react-native";
import { useEffect, useState } from "react";
import { UserRegister } from "../types/types";

export const useRegistrationForm = () => {
  const { register } = useAuth();
  const [credentials, setCredentials] = useState<UserRegister>({
    username: "",
    birthday: new Date(),
    country: "",
    email: "",
    description: "",
    password: "",
    password_confirmation: "",
    profile_picture:
      "https://firebasestorage.googleapis.com/v0/b/liryca-c9f2e.appspot.com/o/profileIcons%2Fdefault-avatar.png?alt=media&token=09e84995-6605-4b4f-9131-5b99ace4395d",
    profile_banner:
      "https://firebasestorage.googleapis.com/v0/b/liryca-c9f2e.appspot.com/o/profileBanner%2FbannerDefault.png?alt=media&token=aa685868-63c2-46fe-b73c-aa91c26d6c19",
    showDatePicker: false,
    role: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 10000);
  }, [error]);

  const handleChange = (field, value) => {
    setCredentials((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleDateChange = (_, selectedDate) => {
    const currentDate = selectedDate || credentials.birthday;
    setCredentials((prevState) => ({
      ...prevState,
      birthday: currentDate,
      showDatePicker: false,
    }));
  };

  const handleRegister = async () => {
    if (!credentials.username || !credentials.email || !credentials.password) {
      Alert.alert("Faltan campos por llenar");
      return;
    }

    // Contiene mayúsculas, minúsculas, números y caracteres especiales
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.$@$!%*?&])[A-Za-z\d.$@$!%*?&]{8,}$/;

    if (!regex.test(credentials.password)) {
      Alert.alert(
        "Contraseña no válida",
        "La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial",
      );
      return;
    }

    if (credentials.password !== credentials.password_confirmation) {
      Alert.alert("Las contraseñas no coinciden");
      return;
    }
    const credentialsToSend = {
      ...credentials,
      birthday: credentials.birthday.toISOString().split("T")[0],
      role: credentials.role ? "artist" : "user",
    };
    setLoading(true);
    const res = await register(credentialsToSend);
    if (res !== "success") setError(res);
    setLoading(false);
  };

  return {
    credentials,
    handleChange,
    handleDateChange,
    handleRegister,
    loading,
    error,
  };
};
