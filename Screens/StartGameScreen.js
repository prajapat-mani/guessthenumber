import { View, Text, TextInput, StyleSheet,Alert } from 'react-native'
import React from 'react'
import { useState } from 'react'
import PrimaryButton from '../Components/PrimaryButton'

export default function StartGameScreen({onPickNumber}) {

    const [enteredNumber, setEnteredNumber] = useState("")

    function resetInputHandler(){
        setEnteredNumber('')
        
    }

    function numberinputHandler(enteredText){
setEnteredNumber(enteredText)
    }
    function confirmInputHandler(){
        const ChooseNumber=parseInt(enteredNumber)
        if(isNaN(ChooseNumber)||ChooseNumber<=0||ChooseNumber>=99){
            Alert.alert("Inavalid Number!",
            "Number Has To Be a Number between 1 and 99",
            [{text:"Okay" , style:"destructive",onPress:resetInputHandler}]
            )
        }
     onPickNumber(ChooseNumber)
        
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad'
            onChangeText={numberinputHandler}
            value={enteredNumber}
            />
            <View style={styles.buttonContainer}>

                <View style={styles.buttonContainer1}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>

                </View>
                <View style={styles.buttonContainer1}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>

                </View>
            </View>




        </View>
    )
}

const styles = StyleSheet.create({

    inputContainer: {
        alignItems: "center",
        justifyContent: "center",
        //   flex:1,
        padding: 16,
        marginTop: 100,
        backgroundColor: "#4e0329",
        borderRadius: 8,
        marginHorizontal: 24,
        elevation: 10,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: { height: 2, width: 0 },
        shadowRadius: 6

    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: "bold", textAlign: "center"

    },
    buttonContainer: {
        flexDirection: "row"
    },

    buttonContainer1: {
        flex: 1
    }

})