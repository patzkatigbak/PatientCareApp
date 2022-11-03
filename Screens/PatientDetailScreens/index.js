import { StyleSheet, Text, View, ImageBackground, Image, TextInput } from 'react-native';
import {SpliteLine} from '../../Components/SpliteLine/index.js'

export const PatientDetailScreen = ({route}) => {
    const {firstName,lastName,imageUri, sex, address, phoneNumber, emailAddress, emergencyContact, 
        emergencyContactPhoneNumber, bedNumber} = route.params.patient
    return (
        <View style = {styles.view_Container}>
            <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={{ flex: 1 }}>
                <View style={styles.view_PatientInfo_Container}>
                    <View style={styles.view_patientIdAndNameInfo}>
                        <View>
                            <Image  source={{ uri: imageUri }} style={{ height: 55, width: 55, borderRadius: 100 }} />
                        </View>
                        <View style={{marginLeft:15}}>
                            <Text style={{fontSize:20,fontWeight:'bold'}}>{firstName} {lastName}</Text>
                        </View>
                    </View>
                    <SpliteLine/>
                    <View style = {styles.view_patientRestInfo}>
                        <Text style={styles.text_patientInfoTitle}>Sex</Text>
                        <Text style={styles.text_patientInfo}>{sex}</Text>
                        <SpliteLine/>
                        <Text style={styles.text_patientInfoTitle}>Address</Text>
                        <Text style={styles.text_patientInfo}>{address}</Text>
                        <SpliteLine/>
                        <Text style={styles.text_patientInfoTitle}>Phone Number</Text>
                        <Text style={styles.text_patientInfo}>{phoneNumber}</Text>
                        <SpliteLine/>
                        <Text style={styles.text_patientInfoTitle}>Email Address</Text>
                        <Text style={styles.text_patientInfo}>{emailAddress}</Text>
                        <SpliteLine/>
                        <Text style={styles.text_patientInfoTitle}>Emergency Contact</Text>
                        <Text style={styles.text_patientInfo}>{emergencyContact}</Text>
                        <SpliteLine/>
                        <Text style={styles.text_patientInfoTitle}>Emergency Contact Phone Number</Text>
                        <Text style={styles.text_patientInfo}>{emergencyContactPhoneNumber}</Text>
                        <SpliteLine/>
                        <Text style={styles.text_patientInfoTitle}>BedNumber</Text>
                        <Text style={styles.text_patientInfo}>{bedNumber}</Text>
                    </View>
                    <SpliteLine/>                  
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    view_Container: {
        flex: 1,
    },
    view_PatientInfo_Container:{
        width:'90%',
        height:'80%',
        backgroundColor:'#FFFFFF',
        borderRadius:20,
        marginLeft:'5%',
        marginTop:20
    },
    view_patientIdAndNameInfo:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    text_patientInfoTitle:{
        marginLeft:7,
        fontSize:14,
        opacity:0.5
    },
    text_patientInfo:{
        marginTop:5,
        marginLeft:7,
        color:'#4C4646',
        fontSize:16,
    },
    view_patientRestInfo:{
        flexDirection:'column',
        justifyContent:'space-evenly',
    },
    view_TextInput:{
        marginLeft:'7%',
        
    }
})