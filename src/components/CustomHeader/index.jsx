import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function CustomHeader({ goBack }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={ goBack }
            >
                <Icon style={styles.back_icon} name='arrow-back-ios' color="#fff" size={35} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        marginTop: 30,
        width: '100%',
        alignItems: 'flex-start'
    },
    back_icon: {
        padding: 10,
        marginLeft: 10,
    }
})