import { StyleSheet, TextInput, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import {RegisterScreen} from '../RegisterScreens/index.js'
import { useNavigation } from '@react-navigation/native';
import {HomeScreen} from '../HomeScreens/index.js'
import {AuthentificiatedApp} from '../../AuthentificatedApp.js'

export const LoginScreen = () => {

    const navigation = useNavigation();

    const navigateToRegistrationPage = () => {
        navigation.navigate('RegisterScreen',{})
    }

    const navigateToHomePage = () => {
        navigation.navigate('NavigationBar')
    }

    return (
        <View style={styles.view_container}>
            <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={{ flex: 1 }}>
                <View style={styles.userInfo_container}>
                    <View style={styles.view_userName}>
                        <TextInput placeholder="Please Input User Name" style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.view_userPassword}>
                        <TextInput placeholder="Please Input User Password" style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.view_submitButton}>
                        <TouchableOpacity
                            onPress={navigateToHomePage}
                            style={styles.touchableOpacity_login}
                        >
                            <Text style={{ color: '#FFFFFF' }} style={{justifyContent:'center',alignItems:'center'}}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text>Or</Text>
                        <TouchableOpacity
                            onPress={navigateToRegistrationPage}
                            style={styles.touchableOpacity_register}
                        >
                            <Text style={{ color: '#FFFFFF' }} style={{justifyContent:'center',alignItems:'center'}}>Register</Text>
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
        marginTop:10,
    },
    touchableOpacity_register:{
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