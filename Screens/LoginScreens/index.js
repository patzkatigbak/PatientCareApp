import React, {useContext}from 'react'
import { StyleSheet, TextInput, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { httpGetRequest } from '../../utils/http.js'
import {UserContext} from '../../UserContext.js'

export const LoginScreen = () => {
    const [username, setUserName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const {setUser} = useContext(UserContext)
    const navigation = useNavigation();

    const loginButton_Pressed = () => {
        if (username == "" || password == "") {
            alert("Please input user name and password!")
            return
        }

        httpGetRequest(`login?username=${username}&password=${password}`, 'GET')
        .then(async res => {
            if(res.ok){
                return res.json()
            }else{
                return Promise.reject(await res.json());
            }
        })
        .then(data => {
            setUser(data)
            navigation.navigate('NavigationBar', {
                screen: 'Home',
                params: { userInfo: data},
              });
        })
    }

    const registerButton_Pressed = () => {
        navigation.navigate('RegisterScreen', {})
    }

    return (
        <View style={styles.view_container}>
            <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={{ flex: 1 }}>
                <View style={styles.userInfo_container}>
                    <View style={styles.view_userName}>
                        <TextInput placeholder="Please Input User Name" style={styles.textInput} onChangeText={text => setUserName(text)}></TextInput>
                    </View>
                    <View style={styles.view_userPassword}>
                        <TextInput placeholder="Please Input User Password" secureTextEntry={true} style={styles.textInput} onChangeText={text => setPassword(text)}></TextInput>
                    </View>
                    <View style={styles.view_submitButton}>
                        <TouchableOpacity
                            onPress={loginButton_Pressed}
                            style={styles.touchableOpacity_login}
                        >
                            <Text style={{ color: '#FFFFFF' }} style={{ justifyContent: 'center', alignItems: 'center' }}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Or</Text>
                        <TouchableOpacity
                            onPress={registerButton_Pressed}
                            style={styles.touchableOpacity_register}
                        >
                            <Text style={{ color: '#FFFFFF' }} style={{ justifyContent: 'center', alignItems: 'center' }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    view_container: {
        flex: 1,
    },
    view_userName: {

    },
    view_userPassword: {
        marginTop: 10
    },
    userInfo_container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200
    },
    textInput: {
        width: 300,
        height: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        alignItems: 'center'
    },
    touchableOpacity_login: {
        width: 300,
        height: 40,
        borderRadius: 10,
        color: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        backgroundColor: '#FFA500',
    },
    view_submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    touchableOpacity_register: {
        width: 300,
        height: 40,
        borderRadius: 10,
        color: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        backgroundColor: '#FFA500',
    }
})