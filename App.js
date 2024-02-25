import { View, Text, StyleSheet, StatusBar ,ImageBackground, SafeAreaView} from 'react-native'
import React from 'react'
import { useState } from 'react'
import StartGameScreen from './Screens/StartGameScreen'
import GameScreen from './Screens/GameScreen'


export default function App() {

  const [userNumber,setUserNumber]=useState()

  const pickedNumberHndler=(pickedNumber)=>{
setUserNumber(pickedNumber)
  }

let screen=<StartGameScreen onPickNumber={pickedNumberHndler}/>
if(userNumber){
  screen=<GameScreen/>
}

  return (
    <View style={styles.rootContainer}>
      <ImageBackground source={require("../GameApp/assets/dice.jpg")} resizeMode='cover'
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
      >
        <SafeAreaView>
      {screen}
      </SafeAreaView>
      </ImageBackground>

    </View>
  )
}
const styles=StyleSheet.create({

rootContainer:{
  flex:1,
  backgroundColor:"#ddb52f",
  // alignItems:"center",
  // justifyContent:"center",


},
backgroundImage:{
  opacity:0.15
}
})

