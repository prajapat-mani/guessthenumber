import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Title from '../Components/Title'





function generateRandomNumberBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum = exclude) {
        return generateRandomNumberBetween(min, max, exclude)
    }
    else {
        return rndNum
    }
}



export default function GameScreen({userNumber}) {
    const initialGuess = generateRandomNumberBetween(1, 100,userNumber)

    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    return (
        <View style={styles.screen}>

            <Title>Opponent's Guess</Title>
            <Text></Text>
<View>
<Text>Higher or Lower?</Text>

</View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        // flex:1,
        padding: 24
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#4e0329",
        textAlign: "center",
        borderWidth: 2,
        padding: 12,
        borderColor: "#4e0329"
    }
})
