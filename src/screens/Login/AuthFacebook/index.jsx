import React from 'react'
import { View } from 'react-native'
import CustomButton from '../../../components/CustomButton/index';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AuthFacebook() {
    const navigation = useNavigation();

    const handleAuthFacebook = () => {
        console.log('Login com Facebook');
        navigation.navigate('lobby');

        try{

        }catch(error){
            console.log(error)
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
