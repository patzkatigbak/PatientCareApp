import { StyleSheet, TextInput, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const SetUpScreen = () => {

    const navigation = useNavigation();

    const navigateToLoginPage = () => {
        navigation.navigate('LoginScreen')
    }


    return (
        <View style={styles.view_container}>
            <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={{ flex: 1 }}>
                <View style={styles.view_TouchableOpacity_container}>
                    <TouchableOpacity
                        onPress = {navigateToLoginPage}
                        style={styles.touchableOpacity_LogOut}>
                        <Text style={{ color: '#FFFFFF' }}>Log out</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    view_container:{
        flex: 1,
    },
    view_TouchableOpacity_container:{
        alignItems:'center',
        justifyContent:'center'
    },
    touchableOpacity_LogOut: {
        width:'80%',
        height:30,
        backgroundColor:'red',
        marginTop:150,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
})