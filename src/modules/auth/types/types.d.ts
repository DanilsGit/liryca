export type AuthScreen =
  | "welcome"
  | "login"
  | "register"
  | "forgotPassword"
  | "setPassword";

export interface UserRegister {
  username: string;
  birthday: Date;
  country: string;
  email: string;
  description: string;
  password: string;
  password_confirmation: string;
  profile_picture: string;
  profile_banner: string;
  showDatePicker: boolean;
  role: boolean;
}

export interface UserLogin {
  email: string;
  password: string;
  remember: boolean;
}
