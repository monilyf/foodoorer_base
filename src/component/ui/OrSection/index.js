import React from 'react';
import { View,Text } from 'react-native';
import styles from './style'
import Label from '../Label'
import Color from '../../../utils/Color';

const OrSection = () => {
    return (
        <View style={styles.container}>
            <View style={styles.line}></View>
            {/* <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>OR</Text> */}
            <Label bolder  color={Color.BLACK} ms={5} me={5} xsmall>OR</Label>
            <View style={styles.line}></View>
          </View>
    )
}

export default OrSection;
