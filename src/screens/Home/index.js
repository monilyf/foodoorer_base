import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import {SubmitButton,Label,RoundButton,FloatingActionButton,Header} from '../../component'
import Routes from '../../router/routes'
import {CommonActions} from '@react-navigation/routers'
import Color from '../../utils/Color'

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
      <SafeAreaView >
      <Header headerText='Home'/>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        {/* <Text> Home </Text> */}
        <Label  color='black' mt={20} bolder >Home screen.</Label>
        <SubmitButton buttonText='Logout' onPress={()=>this.removeAuthentication()}/>
        {/* <RoundButton mt={20} backgroundColor={Color.BLUE_MAGENTA} btn_lg textColor={Color.ALICE_BLUE} onPress={()=>console.log('manya')}>Hello Round</RoundButton> */}
        {/* <FloatingActionButton color={Color.BLUE_MAGENTA} icon='architecture' left ms={50} onPress={()=>console.log('manva')} iconColor='#a5fd07' iconSize={40}/> */}
      </View>
      </SafeAreaView>
    )
  }
}

export default Home
