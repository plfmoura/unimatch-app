import React from 'react'
import { View } from 'react-native'
import CustomButton from './../../../components/CustomButton/index';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AuthGoogle() {
    const navigation = useNavigation();

    const handleAuthGoogle = () => {
        console.log('Login com google');
        navigation.navigate('lobby');
        
        try{

        }catch(error){
            console.log(error)
        }
    }


  return (
    <View>
      <CustomButton 
      onPress={() => handleAuthGoogle()} 
      icon={<Icon name="google" size={30} color="#fff" />} 
      bgColor={"#DD4B39"} 
      text={"ENTRAR COM GOOGLE"} 
      txColor={"#fff"}
      />
    </View>
  )
}
