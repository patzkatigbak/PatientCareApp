import { StyleSheet, TextInput,Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { PatientInfoCard } from '../../Components/PatientInfoCard/index.js';

export const PatientScreen = () => {

    const testPatientData = {
        name: "Jessica Ryan",
        sex: "Female",
        age: "12",
        ID: "12344555",
        mobile: "1828773627",
        time: "25 Aug 13:00 pm",
        photoUrl: require("../../assets/patientAvatar/patient5.jpg"),
        height: "1.65m",
        weight: "70Kg",
        DOB: "2-16-2010",
        address: '17265 shopper Ave, Toronto, ON, M1H2ES'
    }

    return (
        <View style={styles.view_container}>
            <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={{ flex: 1 }}>
                <View>
                    <View style={styles.view_Header}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#FFFFFF' }}>Patient {'\n'}Search / List</Text>
                    </View>
                    <View style={styles.container_view_PatientList}>
                        <View style={styles.view_PatientList}>
                            
                            <TextInput 
                            style={styles.textinput} 
                            placeholder="Search Patient">
                            </TextInput>

                            
                            <TouchableOpacity
                                style={styles.touchableOpacity_PatientList}>
                                <Text style={{ color: '#FFFFFF' }}>Search</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.view_ResultList}>
                    <ScrollView s>
                        <View style={{ marginTop: 10 }}>
                            <PatientInfoCard patientInfo={testPatientData} />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <PatientInfoCard patientInfo={testPatientData} />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <PatientInfoCard patientInfo={testPatientData} />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <PatientInfoCard patientInfo={testPatientData} />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <PatientInfoCard patientInfo={testPatientData} />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <PatientInfoCard patientInfo={testPatientData} />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <PatientInfoCard patientInfo={testPatientData} />
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    view_container: {
        flex: 1,
    },
    view_Header: {
        width: '90%',
        flexDirection: 'row',
        marginTop: 70,
        marginLeft: '5%'
    },
    container_view_PatientList: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    touchableOpacity_PatientList: {
        width: 70,
        height: 40,
        borderRadius: 100,
        backgroundColor: '#1589FF',
        color: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 90
    },
    view_PatientList: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        width: '90%',
        height: 60,
        alignItems: 'center',
        borderRadius: 20,
    },
    view_ResultList: {
        width: '90%',
        justifyContent: 'center',
        marginLeft: '5%',
        height: '70%',
    },
    textinput:{
        height: 40,
        width:180,
        fontSize: 20,
        marginBottom: 0,
        marginLeft:10
    },
})