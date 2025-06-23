import React, { ReactNode } from 'react'
import { StyleSheet, useColorScheme, View, ViewProps } from 'react-native'

type ConotainerProps = {
    children: ReactNode;
} & ViewProps


const Container = ({ children, ...rest }: ConotainerProps) => {
    return (
        <View style={styleContainer.container} {...rest}>
            {children}
        </View>
    )
}


const styleContainer = StyleSheet.create({
    container: {
        paddingLeft: 50,
        paddingRight: 50,
    },
    dark:{
        backgroundColor:"#1e1e1e"
    },
});
export default Container