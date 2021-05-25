import React from 'react'
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import Color from '../../../utils/Color'
import Icon  from 'react-native-vector-icons/Ionicons'

import Label from '../../ui/Label'

const Header = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <TouchableOpacity onPress={props.onPress}>
                    <Icon name='chevron-back' size={32} color={Color.WHITE}/>
                </TouchableOpacity>
                <Label color={Color.WHITE} mt={5} bolder>{props.headerText}</Label>
                <Icon name='cart' size={26} color={Color.WHITE}/>

            </View>
{/* <View style={{backgroundColor:'#fff',height:21,width:'90%',bottom:20,alignSelf:'center',borderRadius:10}}></View> */}

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        height:80,
        width:'100%',
        backgroundColor:Color.GRADIENT1,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
    
        
    },
    subContainer:{
        paddingHorizontal:15,
        paddingVertical:25,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})