import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import CustomHeader from '../../components/CustomHeader';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../reducer/userReducer';

export default function Lobby() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const checkUser = async () => {
    if (!user.user) {
      navigation.navigate('login');
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  const handleLogoutSession = async () => {
    dispatch(deleteUser());
    navigation.navigate('login');
  }

  return (
    <View style={styles.container}>
      {user.user &&
        <>
          <CustomHeader variant="user-header" userImage={user.user.picture} />
          <View style={styles.main_content}>
            <View style={styles.greetings}>
              <Text style={styles.greetings_text}>
                Poxa {user.user.given_name}, você não tem conexões novas por aqui,
                mas isso não é problema né, partiu conectar!
              </Text>
              <CustomButton
                text="COMEÇAR A CONECTAR"
                bgColor={"#DD4B39"}
                txColor={"#fff"}
                onPress={() => navigation.navigate('login')}
              />
            </View>
            <View style={styles.greetings}>
              <Text style={styles.greetings_text}>
                Vamos continuar editando seu perfil, deixando
                ele bem completo temos mais chances de conexões!
              </Text>
              <CustomButton
                text="EDITAR PERFIL"
                bgColor={"#FFF"}
                txColor={"#333"}
                onPress={() => navigation.navigate('login')}
              />
            </View>
            <CustomButton text="Encerrar Sessão" bgColor={"#f00"} txColor={"#fff"} onPress={() => handleLogoutSession()} />
          </View>
        </>
      }
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
  greetings_text: {
    color: "#fff",
    textAlign: 'center',
  }
})