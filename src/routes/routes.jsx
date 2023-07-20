import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../screens/Login/index.jsx'
import Lobby from '../screens/Lobby/index.jsx'

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='login' screenOptions={{ headerShown: false}}>
            <Stack.Screen name='login' component={Login} />
            <Stack.Screen name='lobby' component={Lobby} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
