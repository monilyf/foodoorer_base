import React, { Component } from 'react'
import { Text, View,TouchableHighlight, TouchableOpacity } from 'react-native'
import {Label} from '../../ui/Label'
import Icon from 'react-native-vector-icons/FontAwesome'
import Color from '../../../utils/Color'

class ProfileNavItem extends Component {
  render() {
    return (
      <TouchableOpacity
      // activeOpacity={0.6}
      // underlayColor="#DDDDDD"
      onPress={() => alert('Pressed!')} 
      style={{marginHorizontal:30,padding:12}}>
      <View >
        <Icon name="home" color={Color.DARK_GRAY} size={30} />
        <Label small color={Color.PRIMARY} ms={25}>
        hello
        </Label>
      </View>
    </TouchableOpacity>
    )
  }
}

export default ProfileNavItem