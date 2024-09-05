// Expo

import { useTranslation } from "react-i18next";
import { Text, TextStyle, View } from "react-native";

// React

// React Native

// Hooks

// Definitions

// Components

// Props

// Api

export default function HiText({ style }: { style: TextStyle | TextStyle[] }) {
  const { t } = useTranslation();

  const date = new Date();
  const text =
    date.getHours() < 12
      ? t("main.title_morning")
      : date.getHours() < 18
        ? t("main.title_afternoon")
        : t("main.title_evening");
  return (
    <View>
      <Text style={style}>{text}</Text>
    </View>
  );
}

// const styles = StyleSheet.create({});
