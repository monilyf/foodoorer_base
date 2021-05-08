import React, { Component } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './style'

export class SubmitButton extends Component {
    render(props) {
        return (
          // <TouchableOpacity onPress={()=>Alert.alert('ed Successfully')}>
          <TouchableOpacity onPress={this.props.onPress} style={{alignItems:'center'}}>
          <LinearGradient
          // colors={['#00d2ff', '#3a7bd5']}
          colors={['#00d2ff', '#182b56']}
          style={styles.btnPrimary}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
     
  
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
            {this.props.buttonText}
          </Text>
  
        </LinearGradient>
      </TouchableOpacity>

          
        )
    }
}

export default SubmitButton
