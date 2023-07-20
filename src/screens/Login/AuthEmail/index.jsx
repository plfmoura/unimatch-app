import React from 'react'
import { View } from 'react-native'
import CustomButton from '../../../components/CustomButton/index';
import { useNavigation } from '@react-navigation/native';

export default function AuthGoogle() {
    const navigation = useNavigation();

    const handleAuthGoogle = () => {
        console.log('Login com google')
        try{

        }catch(error){
            console.log(error)
        }
    }


  return (
    <View>
      <CustomButton 
      onPress={() => handleAuthGoogle()} 
      icon={"google"} 
      bgColor={"#DD4B39"} 
      text={"ENTRAR COM O GOOGLE"} 
      txColor={"#fff"}
      />
    </View>
  )
}
