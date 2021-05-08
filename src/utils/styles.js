// import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import COLOR from './Color'

const styles = StyleSheet.create({
  logo: {
    height: 110,
    width: '80%',
  },
 
 
  errorMsg: {
    color: COLOR.ERROR,
    fontStyle: 'italic',
    marginLeft: 23,
  },
  footer: {
    marginTop: 20,
    marginBottom: 20,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 16,
  },
  //   inputIcon: { marginTop: 15,marginLeft:20, position: 'absolute',fontSize:20,color:colors.primary, },
});

export default styles;
