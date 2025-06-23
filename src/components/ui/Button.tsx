import React, { ReactNode } from 'react'
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native'

type ButtonProps = {
    children: ReactNode
} & PressableProps

export const Button = ({ children, ...rest }: ButtonProps) => {
    return (
        <Pressable style={ButtonStyle.Button} {...rest}>
            {
                typeof children === "string" ?
                    <Text>
                        {children}
                    </Text>
                    :
                    children
            }
        </Pressable>
    )
}

const ButtonStyle = StyleSheet.create(
    {
        Button:{
            paddingHorizontal:10,
            paddingVertical:20,
            alignItems:"center",
            justifyContent:"center"
        }
    }
)