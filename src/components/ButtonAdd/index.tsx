import React from "react";
import { RectButton, BaseButtonProps } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons'
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = BaseButtonProps

export function ButtonAdd({...rest}: Props) {
  return (
    <RectButton
     style={styles.container} 
     {...rest}
    >
     <AntDesign
      name="plus"
      color={theme.colors.heading}
      size={24}
     />
    </RectButton>
  )
}
