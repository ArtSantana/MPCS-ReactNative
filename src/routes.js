import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Home from './pages/Home';
import Characters from './pages/Characters';
import Register from './pages/Register';
import Login from './pages/Login';


export default function Routes() {
  const isSigned = false;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {
          isSigned ? (
            <>
              <Stack.Screen name="Characters" component={Characters} />
              <Stack.Screen name="Home" component={Home} />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}