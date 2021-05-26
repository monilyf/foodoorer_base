import React, { Component } from 'react'
import { Text, View,TouchableHighlight, TouchableOpacity,Image } from 'react-native'
import Label from '../../ui/Label'
import Icon from 'react-native-vector-icons/FontAwesome'
import Color from '../../../utils/Color'

export const  ProfileNavItem=(props)=> {
  
    return (
      <TouchableHighlight
              activeOpacity={0.6}
              underlayColor={Color.HIGHLIGHT_COLOR}
              onPress={() => alert('Pressed!')}
              style={{ marginHorizontal: 30, padding: 12 }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {/* <Icon name="home" color={Color.DARK_GRAY} size={30} /> */}
                <Image
                  source={props.iconPath}
                />
                <Label  color={Color.PRIMARY} ms={25}>
                  {props.label}
                </Label>
              </View>
            </TouchableHighlight>
    )
  
}
//import kaha kiyab b vo dikha
//  ProfileNavItem
