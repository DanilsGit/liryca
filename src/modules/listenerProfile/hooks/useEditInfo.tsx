import DocumentPicker from "react-native-document-picker";
import { useAuth, User } from "@/modules/auth/hooks/useAuth";
import { useState } from "react";
import { userPutRequest } from "../apis/user";
import { uploadMediaToFirebase } from "@/modules/core/utils/firebaseMedia";
import { useRouter } from "expo-router";

export interface UserDataToSave {
  username?: string;
  profile_banner: string;
  profile_picture: string;
}

export const useEditInfo = () => {
  const { user, updateUser } = useAuth();
  const [userEdit, setUserEdit] = useState<User>(user);
  const [bannerFile, setBannerFile] = useState<any>(null);
  const [profileIconFile, setProfileIconFile] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (key: string, value: string) => {
    setUserEdit({ ...userEdit, [key]: value });
  };

  const pickBanner = async () => {
    try {
      const file = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      const url = file[0].uri;
      setUserEdit({ ...userEdit, profile_banner: url });
      setBannerFile(file[0]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("Selección cancelada");
      } else {
        console.error(err);
      }
    }
  };

  const pickProfileIcon = async () => {
    try {
      const file = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      const url = file[0].uri;
      setUserEdit({ ...userEdit, profile_picture: url });
      setProfileIconFile(file[0]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("Selección cancelada");
      } else {
        console.error(err);
      }
    }
  };

  const saveChanges = async () => {
    setLoading(true);
    try {
      let dataToSave: UserDataToSave = {
        profile_banner: userEdit.profile_banner,
        profile_picture: userEdit.profile_picture,
      };
      if (user.username !== userEdit.username)
        dataToSave.username = userEdit.username;

      if (user.profile_banner !== userEdit.profile_banner) {
        const url = await uploadMediaToFirebase(
          bannerFile,
          "profileBanner",
          user.id
        );
        dataToSave.profile_banner = url;
      }

      if (user.profile_picture !== userEdit.profile_picture) {
        const url = await uploadMediaToFirebase(
          profileIconFile,
          "profileIcons",
          user.id
        );
        dataToSave.profile_picture = url;
      }
      const res_user = await userPutRequest(user.token, dataToSave, user.id);
      const user_data = res_user.data.data;
      updateUser({
        ...user,
        username: user_data.username,
        profile_banner: user_data.profile_banner,
        profile_picture: user_data.profile_picture,
      });
      router.back();
    } catch (error) {
      console.log(error.response.data);
    }
    setLoading(false);
  };

  return {
    userEdit,
    handleChange,
    pickBanner,
    pickProfileIcon,
    saveChanges,
    loading,
  };
};
