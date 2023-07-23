import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppLogo from '../AppLogo'

export default function Loading() {
    return (
        <View style={styles.container}>
            <View
            >
                <AppLogo />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 100,
        backgroundColor: '#111',
        alignItems: 'center',
        justifyContent: 'center'
    }
})