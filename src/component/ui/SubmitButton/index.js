import React, { Component } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './style'
import Color from '../../../utils/Color'

const SubmitButton=(props)=> {
    // console.log(typeof (Color.PURE_CYAN),Color.WHITE )
        return (
          // <TouchableOpacity onPress={()=>Alert.alert('ed Successfully')}>
          <TouchableOpacity onPress={props.onPress} style={{alignItems:'center'}}>
          <LinearGradient
          // colors={['#00d2ff', '#3a7bd5']}
          // colors={['#002dff','#182b56']}
          colors={[Color.GRADIENT1, Color.GRADIENT2]}

          style={styles.btnPrimary}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
     
  
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
            {props.buttonText}
          </Text>
  
        </LinearGradient>
      </TouchableOpacity>

          
        )
    
}

export default SubmitButton