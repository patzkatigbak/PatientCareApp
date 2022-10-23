import { StyleSheet, Text, View, ImageBackground, Image, TextInput } from 'react-native';
import {SpliteLine} from '../../Components/SpliteLine/index.js'

export const AppointmentDetail = ({ navigation, route }) => {
    const { name, age, sex, ID, mobile, time, photoUrl, symptom, email } = route.params.props.patientInfo
    return (
        <View style = {styles.view_Container}>
            <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={{ flex: 1 }}>
                <View style={styles.view_PatientInfo_Container}>
                    <View style={styles.view_patientIdAndNameInfo}>
                        <View>
                            <Image source={photoUrl} style={{height:70,width:70,borderRadius:100}}/>   
                        </View>
                        <View style={{marginLeft:15}}>
                            <Text style={{fontSize:20,fontWeight:'bold'}}>{name}</Text>
                            <Text>ID:{ID}</Text>
                        </View>
                    </View>
                    <View style={styles.view_SpliteLine}>
                        <SpliteLine/>
                    </View>
                    <View style = {styles.view_patientRestInfo}>
                        <Text style={styles.text_patientInfo}>Age: {age}</Text>
                        <Text style={styles.text_patientInfo}>Gender: {sex}</Text>
                        <Text style={styles.text_patientInfo}>Mobile: {mobile}</Text>
                        <Text style={styles.text_patientInfo}>Email: {email}</Text>
                        <Text style={styles.text_patientInfo}>AppointTime: {time}</Text>
                        <Text style={styles.text_patientInfo}>Symptom: {symptom}</Text>
                    </View>
                    <View style={styles.view_SpliteLine}>
                        <SpliteLine/>
                    </View>
                    <View style={styles.view_TextInput}>
                        <Text style={styles.text_patientInfo}>Remark:</Text>
                        <TextInput style={{width:'92%',height:300,backgroundColor:'#E5E4E2',borderRadius:10}}></TextInput>
                    </View>
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
    view_SpliteLine:{
        alignItems:'center'
    },
    text_patientInfo:{
        marginTop:5,
        color:'#4C4646',
        fontSize:15,
    },
    view_patientRestInfo:{
        flexDirection:'column',
        justifyContent:'space-evenly',
        marginLeft:'7%',
    },
    view_TextInput:{
        marginLeft:'7%',
        
    }
})