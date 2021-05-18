import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './routes';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp'
import IntroScreen from '../screens/IntroScreen'
import ForgotPassword from '../screens/ForgotPassword'
import OtpScreen from '../screens/ForgotPassword/OtpScreen'
import ResetPassword from '../screens/ForgotPassword/ResetPassword';

import Auth from '../Authentication/Auth';

const Stack = createStackNavigator();

const NonAuthenticated = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen
      name={Routes.IntroScreen}
      component={IntroScreen}
      options={{headerShown: false}}

      />
      <Stack.Screen
        name={Routes.SignIn}
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.SignUp}
        component={SignUp}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name={Routes.ForgotPassword}
        component={ForgotPassword}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name={Routes.OtpScreen}
        component={OtpScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name={Routes.ResetPassword}
        component={ResetPassword}
        options={{headerShown:false}}
      />

      <Stack.Screen 
        name={Routes.Auth}
        component={Auth}
        options={{headerShown:false}}
      />
  
    </Stack.Navigator>
  );
};

export default NonAuthenticated;
