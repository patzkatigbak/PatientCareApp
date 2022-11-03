import React from 'react'
import { StyleSheet, TextInput, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { httpPostRequest } from '../../utils/http.js'

export const RegisterScreen = () => {

    const [username, setUserName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [occupation, setOccupation] = React.useState("")
    const [dateOfBirth, setDateOfBirth] = React.useState("")
    const [emailAddress, setEmailAddress] = React.useState("")
    const [phoneNumber, setPhoneNumber] = React.useState("")
    const [imageUri, setImageUri] = React.useState(null);
    const [imageType, setImageType] = React.useState(null);
    const [imageName, setImageName] = React.useState(null);
    const navigation = useNavigation();

    const navigateToLoginPage = () => {
        navigation.navigate('LoginScreen')
    }

    const submitButton_Pressed = () => {
        if (imageUri == null) { alert('Please upload image photo!'); return; }

        //console.log("imageUri is:" + imageUri)

        const data = JSON.stringify(
            {
                username: username,
                password: password,
                occupation: occupation,
                dateOfBirth: dateOfBirth,
                emailAddress: emailAddress,
                phoneNumber: phoneNumber,
                imageUri: imageUri,
                imageType: imageType,
                imageName: imageName
            }
        )

        httpPostRequest('register', 'POST', data).then(response => {
            //console.log(response)
        }).catch(err => {
            //console.log(err)
        })
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        //console.log(result);

        if (!result.cancelled) {
            setImageUri(result.uri);
            setImageType(result.type);
            setImageName(username);
        }
        
    };

    const returnText = "< Return"

    return (
        <View style={styles.view_container}>
            <View>
                <Text onPress={navigateToLoginPage} style={styles.text_returnLink}>{returnText}</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <Text style={{ fontSize: 25, color: '#4169E1' }}>User Registration</Text>
            </View>
            <View style={styles.view_content_container}>
                <View style={styles.view_fieldStyle}>
                    <Text style={styles.text_style}>User Name:</Text>
                    <TextInput style={styles.text_inputStyle} onChangeText={text => setUserName(text)}></TextInput>
                </View>
                <View style={styles.view_fieldStyle}>
                    <Text style={styles.text_style}>Password:</Text>
                    <TextInput secureTextEntry={true} style={styles.text_inputStyle} onChangeText={text => setPassword(text)}></TextInput>
                </View>
                <View style={styles.view_fieldStyle}>
                    <Text style={styles.text_style}>Occupation:</Text>
                    <TextInput style={styles.text_inputStyle} onChangeText={text => setOccupation(text)}></TextInput>
                </View>
                <View style={styles.view_fieldStyle}>
                    <Text style={styles.text_style}>Date of Birth:</Text>
                    <TextInput style={styles.text_inputStyle} onChangeText={text => setDateOfBirth(text)}></TextInput>
                </View>
                <View style={styles.view_fieldStyle}>
                    <Text style={styles.text_style}>Email Address:</Text>
                    <TextInput style={styles.text_inputStyle} onChangeText={text => setEmailAddress(text)}></TextInput>
                </View>
                <View style={styles.view_fieldStyle}>
                    <Text style={styles.text_style}>Phone Number:</Text>
                    <TextInput style={styles.text_inputStyle} onChangeText={text => setPhoneNumber(text)}></TextInput>
                </View>
                <View style={styles.view_fieldStyle}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity
                            style={styles.touchableOpacity_UploadAvatar}
                            onPress={pickImage}
                        >
                            <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Upload Avatar</Text>
                        </TouchableOpacity>
                    </View>
                    {imageUri && <Text style={{marginLeft:5,fontSize:15}}>Image has been uploaded!</Text>}
                </View>
                <View style={styles.view_fieldStyle}>
                    <TouchableOpacity
                        style={styles.touchableOpacity_Submit}
                        onPress={submitButton_Pressed}
                    >
                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Submit</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.view_fieldStyle}>
                    <Text title="Pick an image from camera roll" onPress={pickImage} style={{fontSize:80}}>Click Me!</Text>
                    {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
                </View> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view_container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    view_content_container: {
        marginTop: 30,
        marginLeft: 20,

    },
    text_returnLink: {
        color: '#0041C2',
        marginTop: 60,
        marginLeft: 20,
        fontSize: 20
    },
    view_fieldStyle: {
        marginTop: 10
    },
    text_style: {
        fontSize: 15,
    },
    text_inputStyle: {
        width: '90%',
        height: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1,
        borderColor: '#B6B6B4'
    },
    touchableOpacity_Submit: {
        width: '90%',
        height: 30,
        backgroundColor: '#4169E1',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 20
    },
    touchableOpacity_UploadAvatar: {
        width: '30%',
        height: 30,
        backgroundColor: '#FFA500',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }
})