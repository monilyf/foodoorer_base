import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {SubmitButton,Label,RoundButton} from '../../component'
import Routes from '../../router/routes'
import {CommonActions} from '@react-navigation/routers'

export class Home extends Component {

  resetStack = CommonActions.reset({
    index:0,
    routes:[
      {name:Routes.Splash}
    ],
  });
  removeAuthentication=async()=>{
    try{
      console.log('logout')
      await AsyncStorage.clear();
      this.props.navigation.dispatch(this.resetStack);
    }
    catch(e){
      console.log(e)
    }
  }

  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        {/* <Text> Home </Text> */}
        <Label  color='black' mt={20} bolder >Home screen.</Label>
        <SubmitButton buttonText='Logout' onPress={()=>this.removeAuthentication()}/>
        <RoundButton mt={20} backgroundColor='#a5a5a5' xsmall>Hello I'm Round Button</RoundButton>
      </View>
    )
  }
}

export default Home
