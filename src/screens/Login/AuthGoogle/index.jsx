import React, { useContext, useEffect } from 'react'
import { View } from 'react-native'
import CustomButton from './../../../components/CustomButton/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoadingContext } from './../../../contexts/LoadingContext';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../reducer/userReducer';

export default function AuthGoogle() {
  const { setLoading } = useContext(LoadingContext);
  const dispatch = useDispatch();

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "999021863841-i5srnh60tg789de16npkb4f0sc0olqc4.apps.googleusercontent.com",
    androidClientId: "999021863841-3trqgrkslhljc1cgdl8enl2qm3vslgf9.apps.googleusercontent.com",
    webClientId: "999021863841-i5srnh60tg789de16npkb4f0sc0olqc4.apps.googleusercontent.com",
  });

  const handleLogin = () => {
    promptAsync();
  }

  useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);

  const handleSignInWithGoogle = async () => {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      if(response?.type === 'success'){
        await getUserInfo(response.authentication.accessToken);
      }
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
      dispatch(setUser(user));
    }catch(error){
      console.log(error);
    }
  }

  return (
    <View>
      <CustomButton
        onPress={() => handleLogin()}
        icon={<Icon name="google" size={30} color="#fff" />}
        bgColor={"#DD4B39"}
        text={"ENTRAR COM GOOGLE"}
        txColor={"#fff"}
      />
    </View>
  )
}
