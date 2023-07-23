import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import AppLogo from '../../../components/AppLogo';
import CustomHeader from '../../../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../../components/CustomButton';

export default function AuthScreen() {
  const [controller, setController] = useState(true);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CustomHeader goBack={() => navigation.goBack()} />
      <View style={styles.logo_container}>
        <AppLogo title={true} />
      </View>
      <View style={styles.content}>
        {controller ?
          <>
            <View style={styles.input_container}>
              <CustomInput maxLength={2} placeholder={"DDD"} />
              <CustomInput maxLength={9} placeholder={"Seu Número "} />
            </View>
            <Text style={styles.about_text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel dolor
              corrupti quasi eligendi laudantium ullam animi eos consequatur! Rem
              impedit optio ad nemo esse? Quo blanditiis pariatur molestias quisquam
              recusandae.
            </Text>
          </>
          :
          <>
            <View style={[styles.input_container, { flexDirection: 'column', gap: 20, alignItems: 'center' }]}>
              <Text style={[styles.footer_text, { color: '#fff', padding: 0 }]}>Insira o código</Text>
              <CustomInput maxLength={4} placeholder={"0000"} fz={60} />
            </View>
            <Text style={styles.about_text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel dolor
              corrupti quasi.
            </Text>
          </>
        }
      </View>
      <CustomButton text="CONTINUAR" txColor="#fff" bgColor="#0085FF" onPress={() => setController(!controller)} />
      <Text style={styles.footer_text}>Não recebeu nosso SMS?</Text>
    </View>
  )
}

const CustomInput = ({ placeholder, maxLength, fz }) => {
  return (
    <TextInput style={[styles.text_input, { fontSize: fz ? fz : 24 }]} cursorColor={"#FFF5"} keyboardType='number-pad' placeholder={placeholder} maxLength={maxLength} placeholderTextColor={"#FFF"} />
  )
}