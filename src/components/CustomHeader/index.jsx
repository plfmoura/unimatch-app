import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Logo from '../../../assets/logo.png'
import { useNavigation } from '@react-navigation/native'

export default function CustomHeader({ goBack, variant, userImage }) {
    const navigation = useNavigation();

    return (
        <>
            {variant === 'back-header' ?
                <View style={styles.container_back}>
                    <TouchableOpacity
                        onPress={goBack}
                    >
                        <Icon style={styles.back_icon} name='arrow-back-ios' color="#fff" size={35} />
                    </TouchableOpacity>
                </View>
                : variant === 'user-header' ?
                    <View style={styles.container_user}>
                        <Image source={Logo} style={styles.app_logo} />
                        <TouchableOpacity
                            onPress={() => navigation.navigate("profile")}
                        >
                            <Image source={{ uri: userImage }} style={styles.user_image} />
                        </TouchableOpacity>
                    </View>
                    : variant === 'logo-header' ?
                        <View style={styles.container_logo}>
                            <TouchableOpacity
                            >
                                <Image source={Logo} style={styles.app_logo} />

                            </TouchableOpacity>
                        </View>
                        : null
            }
        </>

    )
}

const styles = StyleSheet.create({
    container_back: {
        position: 'absolute',
        marginTop: 30,
        width: '100%',
        alignItems: 'flex-start'
    },
    back_icon: {
        padding: 10,
        marginLeft: 10,
    },
    container_user: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#222'
    },
    app_logo: {
        width: 40,
        height: 40,
        objectFit: 'contain'
    },
    user_image: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    container_logo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingVertical: 10,
        backgroundColor: '#222'
    },
})