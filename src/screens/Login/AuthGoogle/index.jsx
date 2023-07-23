import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native'
import CustomButton from './../../../components/CustomButton/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AuthGoogle() {
  const [userInfo, setUserInfo] = useState(null);
  const navigation = useNavigation();

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "999021863841-i5srnh60tg789de16npkb4f0sc0olqc4.apps.googleusercontent.com",
    androidClientId: "999021863841-3trqgrkslhljc1cgdl8enl2qm3vslgf9.apps.googleusercontent.com",
    webClientId: "999021863841-i5srnh60tg789de16npkb4f0sc0olqc4.apps.googleusercontent.com",
  });

  useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);

  const handleSignInWithGoogle = async () => {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      if(response?.type === 'success'){
        await getUserInfo(response.authentication.accessToken);
        navigation.navigate('lobby');
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
  }

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem('@user', JSON.stringify(user));
      await AsyncStorage.setItem('@auth-token', JSON.stringify(token));
      setUserInfo(user);
    }catch(error){

    }
  }

  return (
    <View>
      <CustomButton
        onPress={() => promptAsync()}
        icon={<Icon name="google" size={30} color="#fff" />}
        bgColor={"#DD4B39"}
        text={"ENTRAR COM GOOGLE"}
        txColor={"#fff"}
      />
    </View>
  )
}
