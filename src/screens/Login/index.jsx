import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AuthGoogle from './AuthGoogle';
import AuthPhone from './AuthPhone';
import AuthFacebook from './AuthFacebook';
import AppLogo from '../../components/AppLogo';
import { styles } from './styles';

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <AppLogo title={true}/>
      </View>
      <View style={styles.text_container}>
        <Text style={styles.title}>Encontre suas <Text style={styles.title_span}>primeiras conexões</Text> acadêmicas</Text>
        <Text style={styles.subtitle}>Junte-se a centenas de estudantes e socialize!</Text>
      </View>
      <View style={styles.auth_container}>
        <AuthGoogle />
        <AuthFacebook />
        <AuthPhone />
      </View>
      <Text style={styles.footer_text}>Problemas para iniciar sessão?</Text>
    </View>
  )
}