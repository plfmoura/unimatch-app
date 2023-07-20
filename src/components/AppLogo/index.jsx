import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Logo from '../../../assets/logo.png'

export default function AppLogo({ title }) {
  return (
    <View style={styles.app_logo_container}>
      <Image source={Logo} style={styles.app_logo} />
      {title && <Text style={styles.app_logo_title}>UniMatch</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  app_logo_container: {
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  app_logo: {
    width: 80,
    height: 80,
    objectFit: 'contain'
  },
  app_logo_title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  }
})