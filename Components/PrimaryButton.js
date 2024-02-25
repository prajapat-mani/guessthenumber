import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function PrimaryButton({ children ,onPress}) {
    const PressHandler = () => {
        onPress()
    }


    return (
        <View style={style.buttonOuterContainer}>
            <Pressable style={({ pressed }) => pressed ? [style.buttonInnerContainer
                , style.pressed] : style.buttonInnerContainer} onPress={PressHandler}>

                <Text style={style.buttontext}>{children}</Text>
            </Pressable>

        </View>
    )
}
const style = StyleSheet.create({
    buttonOuterContainer: {
        // backgroundColor:"#72063c",
        borderRadius: 28,
        overflow: "hidden",

        margin: 4,
    },
    buttonInnerContainer: {
        backgroundColor: "#72063c",
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 2,

    },

    buttontext: {
        color: "white",
        textAlign: "center"
    },
    pressed: {
        opacity: 0.75
    }
})