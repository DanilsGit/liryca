// Expo

// React
// React Native
import { themesText } from "@/constants/themes";
import { ThemeText } from "@/constants/themesTypes";
import { fontSizes } from "@/constants/tokens";
import Screen from "@/modules/core/components/Screen";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import ButtonRounded from "@/modules/auth/components/ButtonRounded";
import { SheetManager } from "react-native-actions-sheet";
import { useEditInfo } from "@/modules/listenerProfile/hooks/useEditInfo";
import ScreenLoading from "@/modules/core/components/ScreenLoading";

// Hooks

// Definitions

// Components

// Props

// Api

export default function EditUserInfo() {
  const { theme } = useTheme();
  SheetManager.hide("listener-options-sheet");
  const styles = createStyles(themesText[theme]);
  const {
    userEdit,
    handleChange,
    pickBanner,
    pickProfileIcon,
    saveChanges,
    loading,
  } = useEditInfo();

  if (loading) return <ScreenLoading />;

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.text_title}>Edita tu información</Text>
        <View style={{ gap: 10 }}>
          <Text style={styles.text}>Nombre de usuario</Text>
          <TextInput
            style={styles.input}
            value={userEdit.username}
            onChangeText={(text) => handleChange("username", text)}
          />
        </View>
        <View style={{ gap: 10 }}>
          <Text style={styles.text}>Imagen del banner</Text>
          <View style={{ alignItems: "center" }}>
            <Pressable onPress={pickBanner}>
              <Image
                source={{ uri: userEdit.profile_banner }}
                style={{ width: 350, height: 170 }}
              />
            </Pressable>
          </View>
        </View>
        <View style={{ gap: 10 }}>
          <Text style={styles.text}>Imagen de perfil</Text>
          <View style={{ alignItems: "center" }}>
            <Pressable onPress={pickProfileIcon}>
              <Image
                source={{ uri: userEdit.profile_picture }}
                style={{ width: 150, height: 150, borderRadius: 100 }}
              />
            </Pressable>
          </View>
        </View>
        <ButtonRounded
          text="Guardar cambios"
          handleClick={() => saveChanges()}
        />
      </View>
    </Screen>
  );
}

const createStyles = (theme: ThemeText) =>
  StyleSheet.create({
    container: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      gap: 50,
    },
    text_title: {
      fontSize: fontSizes.xl2,
      fontFamily: "M-PLUS-2-Bold",
      color: theme.primary,
    },
    text: {
      fontSize: fontSizes.lg,
      fontFamily: "M-PLUS-2-Bold",
      color: theme.primary,
    },
    input: {
      padding: 10,
      borderBottomWidth: 2,
      borderBottomColor: theme.secondary,
      color: theme.primary,
      fontFamily: "M-PLUS-2-Regular",
    },
  });
