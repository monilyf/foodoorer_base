import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'
const ValueContainer = (props) => {
    return (
        <View style={styles.valueContainer}>
          <Text style={styles.label}>{props.label}</Text>
          <Text style={styles.value}>{props.labelValue}</Text>
        </View>
    )
}

export default ValueContainer

// const styles= StyleSheet.create({
//     valueContainer:{
//         marginVertical:10,
  
//       },
    
//     label:{
//         marginVertical:8,
        
//         fontSize:15,
//         color:'#a5a5a5'
//       },
//       value:{
//         fontSize:20,
//         paddingBottom:10,
//         borderBottomWidth:1,
//         color:'#fff',                       
//         borderBottomColor:'#dddddd'
  
//       },
// });