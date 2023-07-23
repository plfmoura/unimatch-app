import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../screens/Login/index.jsx'
import AuthScreen from '../screens/Login/AuthScreen/index.jsx';
import Loading from '../components/Loading/index.jsx';
import Lobby from '../screens/Lobby/index.jsx'
import Explore from '../screens/Explore/index.jsx';
import Profile from '../screens/Profile/index.jsx';
import { LoadingContext } from '../contexts/LoadingContext.jsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Connect from './../screens/Connect/index.jsx';
import IconF from 'react-native-vector-icons/FontAwesome.js'
import IconM from 'react-native-vector-icons/Ionicons.js'

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#000', padding: 5 }, tabBarLabel: () => null }}>
      <Tab.Screen name='lobby' component={Lobby}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconF name="home" color={focused ? "#DD4B39" : "#fff"} size={40} />)
        }}
      />
      <Tab.Screen name='explore' component={Explore}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconF name="group" color={focused ? "#DD4B39" : "#fff"} size={30} />)
        }}
      />
      <Tab.Screen name='connect' component={Connect}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconM name="chatbox" color={focused ? "#DD4B39" : "#fff"} size={40} />)
        }}
      />
      <Tab.Screen name='profile' component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconF name="user" color={focused ? "#DD4B39" : "#fff"} size={40} />)
        }}
      />
    </Tab.Navigator>
  )
}

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='login' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='login' component={Login} />
      <Stack.Screen name='login-autentication' component={AuthScreen} />
      <Tab.Screen name='lobby-routes' component={TabNavigation} />
    </Stack.Navigator>
  )
}

export default function Routes() {
  const { loading } = useContext(LoadingContext);

  return (
    <NavigationContainer>
      <StackNavigation />
      {loading && <Loading />}
    </NavigationContainer>
  )
}

