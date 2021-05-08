import React, {Component} from 'react';
import {Alert, Image, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from '../router/routes'
import { CommonActions } from '@react-navigation/routers';

export class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
   
    };
  }

  componentDidMount() {
    const {email} = this.props.route.params;
    this.setState({email: email});



    this.checkAuthentication();
  }

  resetToAuth = CommonActions.reset({
    index:0,
    routes:[
      {name:Routes.Authenticated},
    ],
  });
 


  checkAuthentication = async () => {
    try {
      let user = await AsyncStorage.getItem('login_data');
      let parsed = JSON.parse(user);

      if (user!=null)
        // this.state.isAuthenticated=true;
        this.props.navigation.dispatch(this.resetToAuth);
      else {
        Alert.alert('Email or Password not valid');
        this.props.navigation.navigate(Routes.SignIn);
      }
    } catch (error) {
      alert("You don't have account!");
      this.props.navigation.navigate(Routes.SignIn);

      //
    }
  };

  render() {
    console.log('email render', this.state.email, '---');

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        {/* <Image source={require('../assets/images/error.jpg')}/> */}
      </View>
    );
  }
}

export default Auth;
