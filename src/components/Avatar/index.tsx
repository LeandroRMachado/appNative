import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { Image } from "react-native";

type Props = {
  urlImage: string
}

export function Avatar({urlImage}: Props) {
  const { secondary30, secondary60 } = theme.colors

  return (
    <LinearGradient
    style={styles.container}
    colors={[secondary30, secondary60]}
    >
      <Image
      source={{uri: urlImage}}
      style={styles.avatar}
      />
    </LinearGradient>
  )
}