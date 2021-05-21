import React, {Component} from 'react';
import {Alert, Image, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from '../router/routes'
import { CommonActions } from '@react-navigation/routers';
import {Loader} from '../component'

export class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:'',
   
    };
  }

  componentDidMount() {
    const {email,password} = this.props.route.params;
    this.setState({email: email,password:password});



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
      let user = await AsyncStorage.getItem('register_data');
      let parsed = JSON.parse(user);
      console.log(parsed.email,parsed.password)

      if (parsed.email===this.state.email )
        // this.state.isAuthenticated=true;
        this.props.navigation.dispatch(this.resetToAuth);
      else {
        alert("You don't have account");
        this.props.navigation.navigate(Routes.SignIn);
      }
    } catch (error) {
      // alert("You don't have account!");
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
        <Loader visible={true}/>
        {/* <Image source={require('../assets/images/error.jpg')}/> */}
      </View>
    );
  }
}

export default Auth;
