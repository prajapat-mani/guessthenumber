import { View, Text ,StyleSheet} from 'react-native'
import React, { Children } from 'react'

export default function Title({children}) {
  return (
    
    <Text style={styles.title}>{children}</Text>

    
  )
}

const styles = StyleSheet.create({
    
    title:{
        fontSize:18,
        fontWeight:"bold",
        color:"#4e0329",
        textAlign:"center",
        borderWidth:2,
        padding:12,
        borderColor:"#4e0329"
    }
    })
    