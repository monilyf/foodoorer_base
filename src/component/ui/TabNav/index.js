import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Color from '../../../utils/Color'
import Label from '../TabNav'

const TabNav = () => {
    return (
        <View style={styles.tabScreen}>
        <Label bolder color={Color.DARK_MODERATE_BLUE} >Sign In</Label>
        <Label bolder color={Color.DARK_BLUE} >Sign Up</Label>
        {/* <View></View> */}
      </View>
    )
}

export default TabNav   

const styles=StyleSheet.create({
    tabScreen:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginBottom:15
      }  
});