import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function CustomButton({ text, onPress, bgColor, txColor, icon }) {
  return (
    <TouchableOpacity style={[styles.btn, { backgroundColor: bgColor, }]} onPress={onPress}>
        {icon}
        <Text style={[styles.btn_value, { color: txColor }]}>{text}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btn: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 15,
        borderRadius: 15,
        paddingHorizontal: 30
    },
    btn_value: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 18,
    }
})