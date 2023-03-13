import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
//import { ProductCategory, ProductList } from '../Services/Redux/Productlistaction/Action'




export const LoginScreen = (props) => {
    const [secureTextEntry, SetSecureTextEntry] = useState(true)

    return (
        <ScrollView style={Styles.ScreenView}>
            <View style={Styles.HeaderView}>
                <Image
                    style={Styles.Image}
                    source={require('../../../Iamges/logo-black.png')}
                />
                <Text style={Styles.HeaderText}>
                    Login
                </Text>
                <Text style={Styles.HeaderTextWelcome}>
                    Welcome back.
                </Text>
            </View>

            <View style={Styles.EmailTextInputView}>
                <TextInput
                    style={Styles.EmailTextInput}
                    placeholder='Email'
                    placeholderTextColor='gray'
                    value={props.email}
                    onChangeText={(text) => props.setEmail(text)}
                />
            </View>

            <View style={Styles.EmailTextInputView}>
                <TextInput
                    style={Styles.EmailTextInput}
                    placeholder='Password'
                    placeholderTextColor='gray'
                    value={props.password}
                    onChangeText={(text) => props.setPassword(text)}
                    secureTextEntry={secureTextEntry}
                />
            </View>
            <TouchableOpacity onPress={props.onSubmit} style={Styles.LoginButton}>
                <Text>Login</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};


const Styles = StyleSheet.create({
    ScreenView: {
        flex: 1,
        // marginTop: '40%'
    },

    HeaderView: {
        alignItems: 'center',
        marginTop: '40%',
    },

    Image: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    HeaderText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30
    },
    HeaderTextWelcome: {
        color: 'black',
        fontWeight: '600',
    },

    EmailTextInputView: {
        borderColor: 'black',
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: 40
    },

    EmailTextInput: {
        color: 'black'
    },

    LoginButton: {
        backgroundColor: 'black',
        marginTop: 20,
        height: 40,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    }
})
