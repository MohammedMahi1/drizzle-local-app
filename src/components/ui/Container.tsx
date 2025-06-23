import React, { ReactNode } from 'react'
import { StyleSheet, useColorScheme, View, ViewProps } from 'react-native'

type ConotainerProps = {
    children: ReactNode;
} & ViewProps


const Container = ({ children, ...rest }: ConotainerProps) => {
    return (
        <View {...rest}>
            {children}
        </View>
    )
}

export default Container