import React from 'react'
import { View } from 'react-native'
import CustomButton from '../../../components/CustomButton/index';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AuthPhone() {
    const navigation = useNavigation();

    const handleAuthPhone = () => {
        console.log('Login com Phone');
        navigation.navigate('login-autentication');

        try{

        }catch(error){
            console.log(error)
        }
    }


  return (
    <View>
      <CustomButton 
      onPress={() => handleAuthPhone()} 
      icon={<Icon name="cellphone" size={30} color="#fff" />} 
      bgColor={"#333"} 
      text={"ENTRAR COM CELULAR"} 
      txColor={"#fff"}
      />
    </View>
  )
}
