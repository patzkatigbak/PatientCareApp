import React from 'react'
import { StyleSheet, TextInput, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { httpPostRequest } from '../../utils/http.js'

export const CreatePatientScreen = ({route}) => {
    const [patientName, setPatientName] = React.useState("")
    const [patientUserName, setPatientUserName] = React.useState("")
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [address, setAddress] = React.useState("")
    const [dateOfBirth, setDateOfBirth] = React.useState("")
    const [doctorName, setDoctorName] = React.useState("")
    const [doctorID, setDoctorID] = React.useState("")
    const [sex, setSex] = React.useState("")
    const [phoneNumber, setPhoneNumber] = React.useState("")
    const [emailAddress, setEmailAddress] = React.useState("")
    const [emergencyContact, setEmergencyContact] = React.useState("")
    const [emergencyContactPhoneNumber, setEmergencyContactPhoneNumber] = React.useState("")
    const [bedNumber, setBedNumber] = React.useState("")
    const [imageUri, setImageUri] = React.useState("")
    const [imageType, setImageType] = React.useState("")
    const [imageName, setImageName] = React.useState("")

    const navigation = useNavigation();
    const navigateToHomePage = () => {
        navigation.navigate('NavigationBar')
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImageUri(result.uri);
            setImageType(result.type);
            setImageName(patientName);
        }
        
    };

    const submitButton_Pressed = () => {
        if (imageUri == null) { alert('Please upload image photo!'); return; }

        const data = JSON.stringify(
            {
                patientName: patientName,
                patientUserName:patientUserName,
                firstName: firstName,
                lastName: lastName,
                address: address,
                dateOfBirth: dateOfBirth,
                doctorName: doctorName,
                doctorID:doctorID,
                sex: sex,
                phoneNumber: phoneNumber,
                emailAddress: emailAddress,
                emergencyContact: emergencyContact,
                emergencyContactPhoneNumber: emergencyContactPhoneNumber,
                bedNumber: bedNumber,
                imageUri: imageUri,
                imageType: imageType,
                imageName: imageName
            }
        )

        httpPostRequest('createPatient', 'POST', data).then(response => {
            //console.log(response)
        }).catch(err => {
            //console.log(err)
        })

        // navigation.navigate('NavigationBar')
    }

    React.useEffect(() => {
        setDoctorID(route.params.id)
        return () => {}
    }, [])

    const returnText = "< Return"
    return (
        <View style={styles.view_container}>
            <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={{ flex: 1 }}>
                <View>
                    <Text onPress={navigateToHomePage} style={styles.text_returnLink}>{returnText}</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 25, color: '#FFFFFF' }}>Create New Patient</Text>
                </View>
                <View style={styles.view_patientInfoList}>
                    <ScrollView>
                        <View style={styles.view_content_container}>
                            <View style={styles.view_fieldStyle}>
                                <Text style={styles.text_style}>Patient Name:</Text>
                                <TextInput style={styles.text_inputStyle} onChangeText={text => setPatientName(text)}></TextInput>
                            </View>
                        </View>
                        <View style={styles.view_content_container}>
                            <View style={styles.view_fieldStyle}>
                                <Text style={styles.text_style}>Patient User Name:</Text>
                                <TextInput style={styles.text_inputStyle} onChangeText={text => setPatientUserName(text)}></TextInput>
                            </View>
                        </View>
                        <View style={styles.view_content_container}>
                            <View style={styles.view_fieldStyle}>
                                <Text style={styles.text_style}>First Name:</Text>
                                <TextInput style={styles.text_inputStyle} onChangeText={text => setFirstName(text)}></TextInput>
                            </View>
                        </View>
                        <View style={styles.view_content_container}>
                            <View style={styles.view_fieldStyle}>
                                <Text style={styles.text_style}>Last Name:</Text>
                                <TextInput style={styles.text_inputStyle} onChangeText={text => setLastName(text)}></TextInput>
                            </View>
                        </View>
                        <View style={styles.view_content_container}>
                            <View style={styles.view_fieldStyle}>
                                <Text style={styles.text_style}>Address:</Text>
                                <TextInput style={styles.text_inputStyle} onChangeText={text => setAddress(text)}></TextInput>
                            </View>
                        </View>
                        <View style={styles.view_content_container}>
                            <View style={styles.view_fieldStyle}>
                                <Text style={styles.text_style}>Date of Birth:</Text>
                                <TextInput style={styles.text_inputStyle} onChangeText={text => setDateOfBirth(text)}></TextInput>
                            </View>
                        </View>
                        <View style={styles.view_content_container}>
                            <View style={styles.view_fieldStyle}>
                                <Text style={styles.text_style}>Doctor:</Text>
                                <TextInput style={styles.text_inputStyle} onChangeText={text => setDoctorName(text)}></TextInput>
                            </View>
                        </View>
                        <View style={styles.view_content_container}>
                            <View style={styles.view_fieldStyle}>
                                <Text style={styles.text_style}>Sex:</Text>
                                <TextInput style={styles.text_inputStyle} onChangeText={text => setSex(text)}></TextInput>
                            </View>
                        </View>
                        <View style={styles.view_content_container}>
                            <View style={styles.view_fieldStyle}>
                                <Text style={styles.text_style}>Phone Number:</Text>
                                <TextInput style={styles.text_inputStyle} onChangeText={text => setPhoneNumber(text)}></TextInput>
                            </View>
                        </View>
                        <View style={styles.view_content_container}>
                            <View style={styles.view_fieldStyle}>
                                <Text style={styles.text_style}>Email Address:</Text>
                                <TextInput style={styles.text_inputStyle} onChangeText={text => setEmailAddress(text)}></TextInput>
                            </View>
                        </View>
                        <View style={styles.view_content_container}>
                            <View style={styles.view_fieldStyle}>
                                <Text style={styles.text_style}>Emergency Contact:</Text>
                                <TextInput style={styles.text_inputStyle} onChangeText={text => setEmergencyContact(text)}></TextInput>
                            </View>
                        </View>
                        <View style={styles.view_content_container}>
                            <View style={styles.view_fieldStyle}>
                                <Text style={styles.text_style}>Emergency Contact Phone Number:</Text>
                                <TextInput style={styles.text_inputStyle} onChangeText={text => setEmergencyContactPhoneNumber(text)}></TextInput>
                            </View>
                        </View>
                        <View style={styles.view_content_container}>
                            <View style={styles.view_fieldStyle}>
                                <Text style={styles.text_style}>Bed Number:</Text>
                                <TextInput style={styles.text_inputStyle} onChangeText={text => setBedNumber(text)}></TextInput>
                            </View>
                        </View>
                        <View style={styles.view_content_container}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    style={styles.touchableOpacity_UploadAvatar}
                                    onPress={pickImage}
                                >
                                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Upload Avatar</Text>
                                </TouchableOpacity>
                            </View>
                            {imageUri && <Text style={{ marginLeft: 5, fontSize: 15 }}>Image has been uploaded!</Text>}
                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity
                    style={styles.touchableOpacity_Submit}
                    onPress={submitButton_Pressed}
                >
                    <Text style={{ color: '#FFFFFF' }} style={{ justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>Submit</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    view_container: {
        flex: 1,
    },
    text_returnLink: {
        color: '#FFFFFF',
        marginTop: 60,
        marginLeft: 20,
        fontSize: 20
    },
    view_content_container: {
        marginTop: 10,
    },
    view_fieldStyle: {
        marginTop: 10
    },
    text_style: {
        fontSize: 15,
        color: '#FFFFFF',
        fontWeight: 'bold'
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
    view_patientInfoList: {
        width: '90%',
        justifyContent: 'center',
        marginLeft: '10%',
        height: '70%',
    },
    touchableOpacity_Submit: {
        width: '80%',
        marginLeft: '10%',
        height: 30,
        backgroundColor: '#EFAD09',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 10
    },
    touchableOpacity_UploadAvatar: {
        width: '30%',
        height: 30,
        backgroundColor: '#FFA500',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }
})