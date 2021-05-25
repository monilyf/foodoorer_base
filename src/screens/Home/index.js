import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import {SubmitButton,Label,RoundButton,FloatingActionButton,Header, ToastMessage, StatusBars} from '../../component'
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
      <SafeAreaView>
      <StatusBars
        hidden={false}
        barStyle="dark-content"
        backgroundColor={Color.WHITE}
      />
      <View style={styles.container}>
      
      </View>
      </SafeAreaView>
    )
  }
}

export default Home
