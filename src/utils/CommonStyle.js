// import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import Color from './Color'
import ThemeUtils from './ThemeUtils'

const styles = StyleSheet.create({
  container:{
    // flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',
  },
  // logo: {
  //   height: 110,
  //   width: '80%',
  // },
  tabScreen:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginBottom:15
  }  ,
  
  boxContainer:{
    // width:'100%', 
    marginTop:20,
    width:ThemeUtils.relativeWidth(95),
    paddingHorizontal:20,
    paddingVertical:20,
    backgroundColor:Color.WHITE,
    borderRadius:12,
    // marginHorizontal:20
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
  endLine: { 
    borderWidth:0.5,
    borderColor:Color.DARK_GRAY,
    marginVertical:3,
    opacity:0.5,
    marginHorizontal:30

    
 },

});

export default styles;
