import React, { ReactNode } from "react";
import { Modal, View, ModalProps, TouchableWithoutFeedback } from "react-native";
import { Background } from "../Background";
import { styles } from "./styles";

type Props = ModalProps & {
  children: ReactNode,
  closeModal: () => void
}

export function ModalView ({children, closeModal, ...rest}: Props ) {
  return (
    <Modal
      transparent
      animationType='slide'
      {...rest}
      statusBarTranslucent
    >
      <TouchableWithoutFeedback onPress={closeModal} >
        <View style={styles.overLay}>
          <View style={styles.container} >
            <Background>
              <View style={styles.bar}/>
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}