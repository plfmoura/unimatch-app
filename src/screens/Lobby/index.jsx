import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

export default function Lobby() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Lobby Screen</Text>
      <CustomButton text="Voltar para Login" bgColor={"#0085ff"} txColor={"#fff"} onPress={() => navigation.navigate('login')}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: '#111'
  }
})