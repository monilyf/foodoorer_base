// import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import Color from './Color'
import ThemeUtils from './ThemeUtils'

const styles = StyleSheet.create({
  logo: {
    height: 110,
    width: '80%',
  },
  boxContainer:{
    // width:'100%', 
    marginTop:50,
    width:ThemeUtils.relativeWidth(95),
    paddingHorizontal:20,
    paddingVertical:20,
    backgroundColor:Color.WHITE,
    borderRadius:12,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              },
   linearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.95,
        justifyContent: 'center',
        alignItems: 'center'
      },
  errorMsg: {
    color: Color.ERROR,
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
