import React from 'react';
import {View,StyleSheet,StatusBar} from 'react-native'
import Color from '../../../utils/Color';

const StatusBars = (props) => {
    return (
        <StatusBar hidden={props.hidden} 
            // backgroundColor={Color.WHITE}
            // StatusBarStyle={props.statusBarStyle}
            barStyle = {props.barStyle}
            backgroundColor={props.backgroundColor}
        />
        )
}
export default StatusBars