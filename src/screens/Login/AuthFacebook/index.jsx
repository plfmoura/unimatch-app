import React from 'react'
import { View } from 'react-native'
import CustomButton from '../../../components/CustomButton/index';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as WebBrowser from 'expo-web-browser'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../reducer/userReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

export default function AuthFacebook() {
  const navigation = useNavigation();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: "248010794749633",
  })

  useEffect(() => {
    if (response && response.type === 'success' && response.authentication) {
      (async () => {
        const userInfoResponse = await fetch(
          `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,email,picture.type(large)`
        );
        const userInfo = await userInfoResponse.json();
        await AsyncStorage.setItem('@user', JSON.stringify(userInfo));
        await AsyncStorage.setItem('@auth-token', JSON.stringify(response.authentication.accessToken));
        dispatch(setUser(userInfo));
      })();
    }
  }, [response])

  const handleAuthFacebook = async () => {
    const result = await promptAsync();
    if (result.type !== "success") {
      alert('Algo de inesperado aconteceu');
      return;
    } 
  }

  return (
    <View>
      <CustomButton
        onPress={() => handleAuthFacebook()}
        icon={<Icon name="facebook" size={30} color="#fff" />}
        bgColor={"#1976D2"}
        text={"ENTRAR COM FACEBOOK"}
        txColor={"#fff"}
      />
    </View>
  )
}
