import React from 'react';
import { View, Text } from 'react-native';
import styles from './style'

const OrSection = () => {
    return (
        <View style={styles.container}>
            <View style={styles.line}></View>
            <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>OR</Text>
            <View style={styles.line}></View>
          </View>
    )
}

export default OrSection;
