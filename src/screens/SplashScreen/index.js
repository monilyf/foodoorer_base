// Splash Screen

import { CommonActions } from '@react-navigation/routers';
import React, { Component } from 'react';
import {
  Platform, StyleSheet, View, Text,
  Image,
} from 'react-native';
import Routes from '../../router/routes';
import styles from "./style";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Label } from '../../component';
import Color from '../../utils/Color';
import logo from '../../assets/images/foodoorer2.png'

class SplashScreen extends Component  {

 

  // Navigate to authenticated route
  resetToAuth = CommonActions.reset({
    index:0,
    routes:[
      {name:Routes.Authenticated},
    ],
  })

  // Navigate to NotAuthenticated route
  resetToNotAuth = CommonActions.reset({
    index:0,
    routes:[
      {name:Routes.NotAuthenticated},
    ],
  })

  componentDidMount() {
    console.log('Splash didMount');
    this.checkAuthentication();
  }

  checkAuthentication = async () => {
    let authenticated = await AsyncStorage.getItem('login_data');
    console.log('checkAuth Authenticated val - ', authenticated);
    if (authenticated != null) {
      // this.setState({ isAuthenticated: true });
      this.goTo(true);
    } else {
      // this.setState({ isAuthenticated: false });
      this.goTo(false);
    }
  };

  goTo = (value) => {
    if (value) {
        setTimeout(() => {
            this.props.navigation.dispatch(this.resetToAuth);
        }, 3000);
    } else {
        setTimeout(() => {
            this.props.navigation.dispatch(this.resetToNotAuth);
        }, 3000);
    }
}
render(){
    return (
      <View style={styles.SplashScreen_RootView}>
       
         <Image source={logo} style={styles.logo}/>
         
    
        <View style={styles.footer}>
          <Label color={Color.BLUE_MAGENTA}>{' '}By Team{"\n"}Foodoorer</Label>
        </View>
       
      </View>
    );
  }
}
export default SplashScreen;