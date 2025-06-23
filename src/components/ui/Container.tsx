import React, { ReactNode } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

type ConotainerProps = {
    children:ReactNode;
} & ViewProps


const Container = ({children,...rest}:ConotainerProps) => {
  return (
    <View style={styleContainer.container} {...rest}>
        {children}
    </View>
  )
}


const styleContainer = StyleSheet.create({
  container: {
    paddingLeft:50 ,
    paddingRight:50
  },
});
export default Container