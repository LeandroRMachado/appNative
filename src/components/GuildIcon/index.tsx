import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";

export function GuildIcon () {
  const uri ='https://cdn-icons-png.flaticon.com/512/2585/2585184.png'
  return (
    <Image 
     source={{ uri }}
     style={styles.Image}
     resizeMode="cover"
    />
  )
}