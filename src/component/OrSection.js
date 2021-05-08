import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import styles from '../styles/index'

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

const styles = StyleSheet.create({
    container:{
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: { 
        height: 1,
        width:'43%',
        backgroundColor: '#a5a5a5' },
});