import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AppointmentInfoCard } from '../../Components/AppointmentInfoCard/index.js';

export const AppointmentScreen = () => {

    const testPatientData = {
        name: "Jessica Bober",
        sex: "Male",
        age: "19",
        ID: "293887263",
        mobile: "1828773627",
        time: "25 Aug 13:00 pm",
        photoUrl: require("../../assets/patientAvatar/patient1.jpeg"),
        height: "1.65m",
        weight: "70Kg",
        DOB: "2-16-1982",
        address: '17265 shopper Ave, Toronto, ON, M1H2ES'
    }

    return (
        <View style={styles.view_container}>
            <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={{ flex: 1 }}>
                <View>
                    <View style={styles.view_Header}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#FFFFFF' }}>Patient {'\n'}Appointment</Text>
                    </View>
                    <View style={styles.container_view_CreateAppointment}>
                        <View style={styles.view_CreateAppointment}>
                            <TouchableOpacity
                                style={styles.touchableOpacity_CreateAppointment}
                            >
                                <Text style={{ color: '#FFFFFF' }}>+</Text>
                            </TouchableOpacity>
                            <Text style={{ marginLeft: 10 }}>Create new Appointment</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.view_AppointmentList}>
                    <ScrollView s>
                        <View style={{ marginTop: 10 }}>
                            <AppointmentInfoCard patientInfo={testPatientData} />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <AppointmentInfoCard patientInfo={testPatientData} />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <AppointmentInfoCard patientInfo={testPatientData} />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <AppointmentInfoCard patientInfo={testPatientData} />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <AppointmentInfoCard patientInfo={testPatientData} />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <AppointmentInfoCard patientInfo={testPatientData} />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <AppointmentInfoCard patientInfo={testPatientData} />
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
    container_view_CreateAppointment: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    touchableOpacity_CreateAppointment: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: '#1589FF',
        color: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    view_CreateAppointment: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        width: '90%',
        height: 60,
        alignItems: 'center',
        borderRadius: 20,
    },
    view_AppointmentList: {
        width: '90%',
        justifyContent: 'center',
        marginLeft: '5%',
        height: '70%',
    }
})