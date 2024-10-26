// Expo

import { colors } from "@/constants/tokens";
import { useEffect, useState } from "react";
import { getColors } from "react-native-image-colors";

// React

// React Native

// Hooks

// Definitions

// Components

// Props

// Api
export const useImageColors = (imageUri: string | undefined) => {
  const [colorsImg, setColorsImg] = useState(null);

  useEffect(() => {
    if (imageUri) {
      getColors(imageUri, {
        fallback: colors.pink,
        cache: true,
        key: imageUri, // Caching key
      }).then(setColorsImg);
    }
  }, [imageUri]);

  return colorsImg;
};
