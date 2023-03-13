import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LoginScreen } from './LoginScreen'
import Toast from 'react-native-toast-message';

const showToast = (message) => {
    Toast.show({
        type: 'error',
        text1: message,
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 10,
        style: Styles.toastContainer,
    });
};


export const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [secureTextEntry, SetSecureTextEntry] = useState(true)

    const _Validation = (callback) => {
        let flag = true
        const EmailReg = /^\S+@\S+\.\S+$/;
        const PasswordReg = /.+/;
        console.log(EmailReg.test(password))
        let validateemail = EmailReg.test(email)
        if (!validateemail) {
            flag = false
            showToast('Enter valid email');
        }
        let validatePassword = PasswordReg.test(password)
        if (!validatePassword) {
            flag = false
            showToast('Enter valid Password');
        }
        callback(flag)

    }


    const handleLogin = () => {
        _Validation((flag) => {
            if (flag) {
                props.navigation.navigate('TopTabnavigation')
            }
        })

    }

    return (
        <View style={{ flex: 1 }}>
            <LoginScreen
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                onSubmit={handleLogin}
            />
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
    );
};


const Styles = StyleSheet.create({
    toastContainer: {
        backgroundColor: 'red', // Set the background color to red
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 20,
        marginTop: 40,
    },
})
