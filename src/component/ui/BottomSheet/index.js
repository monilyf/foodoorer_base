import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import ThemeUtils from '../../../utils/ThemeUtils';

const BottomSheet =(props)=>{
    return(
        <View style={styles.container}>
        <View style={styles.header}>
        <Image style={{height:ThemeUtils.relativeHeight(25),width:ThemeUtils.relativeWidth(36)}} source={require('../../../assets/images/foodoorer2.png')}/>

        </View>
        <View style={styles.subContainer}>
        </View>
        </View>
    )
}

export default BottomSheet;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1
    },
    subContainer:{
        // flex:3,
        backgroundColor:'#000'
    }
});