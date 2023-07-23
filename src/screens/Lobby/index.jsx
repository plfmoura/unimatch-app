import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSession from 'expo-auth-session';

export default function Lobby() {
  const navigation = useNavigation();
  const [data, setData] = useState("Não chegou nada");

  const handleLogoutSession = async () => {
    const token = await AsyncStorage.getItem("@auth-token");
    if (token) {
      try {
        await AuthSession.revokeAsync({ token }, { revocationEndpoint: 'https://oauth2.googleapis.com/revoke' });
        await AsyncStorage.removeItem("@auth-token");
      } catch (error) {
        console.log('ERROR XXX', error)
      }
    }
  }

  useEffect(() => {
    const getUser = async () => {
      const user = await AsyncStorage.getItem("@user");
      if(!user){
        setData('Não chegou nada');
      }else {
        setData(JSON.parse(user));
        console.log('Tem algo no user')
      }
    }

    getUser();
  });

  return (
    <View style={styles.container}>
      <Text>Lobby Screen</Text>
      <Text style={{color: "#fff", margin: 20}}>{data}</Text>
      <CustomButton text="Voltar para Login" bgColor={"#0085ff"} txColor={"#fff"} onPress={() => navigation.navigate('login')}/>
      <CustomButton text="Encerrar Sessão" bgColor={"#0085ff"} txColor={"#fff"} onPress={() => navigation.navigate('login')}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: '#111',
    gap: 30
  }
})