import { transform } from '@babel/core'
import React, { ReactNode } from 'react'
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native'

type ButtonProps = {
    children: ReactNode
} & PressableProps

export const Button = ({ children, ...rest }: ButtonProps) => {
    return (
        <Pressable
        
        className='bg-white px-7 py-12 text-center rounded-lg '
            style={({ pressed }) => [
                {
                    transform: [{ scale: pressed ? 0.95 : 1 }],
                }
            ]}
            {...rest}
        >
            {
                typeof children === "string" ?
                    <Text className='text-black font-semibold'>
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
        Button: {
            paddingHorizontal: 10,
            paddingVertical: 20,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            borderRadius: 12
        },
        Text: {
            fontWeight: "700",
            fontSize: 24,
            color:"#ffffff"
        },

    }
)