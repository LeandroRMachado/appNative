import React, { ReactNode } from 'react'
import { StatusBar } from 'react-native'

export function StatusBarComponent() {
  return(
    <>
    <StatusBar 
    barStyle='light-content'
    backgroundColor='transparent'
    translucent  
    />
    </>
  )
}