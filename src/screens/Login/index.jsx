import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AuthGoogle from './AuthGoogle';
import AuthPhone from './AuthPhone';
import AuthFacebook from './AuthFacebook';
import AppLogo from '../../components/AppLogo';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#111',
    color: "#fff"
  },
  logo_container:{
    marginTop: 20
  },
  text_container: {
    gap: 20,
    width: 400,
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    color: "#fff",
    width: "100%",
    fontSize: 28,
    fontWeight: 'bold'
  },
  title_span: {
    color: "#FF453C"
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 20,
    width: "60%",
    color: "#fff"
  },
  auth_container: {
    gap: 15
  },
  footer_text: {
    color: '#0085FF',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 20
  }
})