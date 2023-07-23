import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../screens/Login/index.jsx'
import Lobby from '../screens/Lobby/index.jsx'
import AuthScreen from '../screens/Login/AuthScreen/index.jsx';
import Loading from '../components/Loading/index.jsx';
import { LoadingContext } from '../contexts/LoadingContext.jsx';

const Stack = createNativeStackNavigator();

export default function Routes() {
  const { loading } = useContext(LoadingContext);

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='login' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='login-autentication' component={AuthScreen} />
          <Stack.Screen name='lobby' component={Lobby} />
        </Stack.Navigator>
        {loading && <Loading />}
    </NavigationContainer>
  )
}
