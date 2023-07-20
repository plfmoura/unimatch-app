import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Auth() {
  return (
    <View style={styles.auth_container}>
      <TouchableOpacity style={[styles.btn, { backgroundColor: '#fff', }]}>
        <Text style={[styles.btn_value, { color: '#333' }]}>Entrar com o Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, { backgroundColor: '#3b5998', }]}>
        <Text style={styles.btn_value}>Entrar com o Facebook</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    auth_container: {
        backgroundColor: '#33333377',
        width: '90%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginBottom: 50,
        gap: 20
    },
  
});
