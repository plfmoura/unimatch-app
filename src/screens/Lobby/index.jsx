import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSession from 'expo-auth-session';
import CustomHeader from '../../components/CustomHeader';

export default function Lobby() {
  const navigation = useNavigation();
  const [data, setData] = useState(null);

  const getUser = async () => {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      setData(null);
    } else {
      setData(JSON.parse(user));
    }
  }

  const handleLogoutSession = async () => {
    const token = await AsyncStorage.getItem("@auth-token");
    if (token) {
      try {
        await AsyncStorage.removeItem("@auth-token");
        await AsyncStorage.removeItem("@user");
        navigation.navigate('login');
        setData(null);
      } catch (error) {
        console.log('ERROR XXX', error)
      }
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      {data && <CustomHeader variant="user-header" userImage={data.picture} />}
      <View style={styles.main_content}>
          {data &&
            <>
              <View style={styles.greetings}>
                <Text style={{ color: "#fff", textAlign: 'center', }}>Poxa {data.given_name}, você não tem conexões novas por aqui, mas isso não é problema né, partiu conectar!</Text>
                <CustomButton text="COMEÇAR A CONECTAR" bgColor={"#DD4B39"} txColor={"#fff"} onPress={() => navigation.navigate('login')} />
              </View>
              <View style={styles.greetings}>
                <Text style={{ color: "#fff", textAlign: 'center', }}>Vamos continuar editando seu perfil, deixando ele bem completo temos mais chances de conexões!</Text>
                <CustomButton text="EDITAR PERFIL" bgColor={"#FFF"} txColor={"#333"} onPress={() => navigation.navigate('login')} />
              </View>
            </>
          }
        <CustomButton text="Encerrar Sessão" bgColor={"#f00"} txColor={"#fff"} onPress={() => handleLogoutSession()} />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#111',
  },
  main_content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 30
  },
  greetings: {
    alignItems: 'center',
    gap: 30,
    width: '80%'
  },
})