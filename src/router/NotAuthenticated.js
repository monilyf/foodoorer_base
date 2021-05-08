import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './routes';
import SignIn from '../screens/SignIn';
import IntroScreen from '../screens/IntroScreen'

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
        name={Routes.Auth}
        component={Auth}
        options={{headerShown:false}}
      />
  
    </Stack.Navigator>
  );
};

export default NonAuthenticated;
