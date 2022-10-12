import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { RenderPatientAvatar } from '../../Components/PatientAvatar/index.js';
import { AppointmentInfoCard } from '../../Components/AppointmentInfoCard/index.js';


export const Home = () => {

    const addPatientButton_Pressed = () => { }

    const testPatientData = {
        name: "Jessica Bober",
        sex: "Male",
        age: "19",
        ID: "293887263",
        mobile: "1828773627",
        time: "25 Aug 13:00 pm"

    }
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={{ flex: 1 }}>

                <View style={styles.view_welcomeInfo}>
                    <Image source={require('../../assets/usericon.jpg')} style={{ height: 50, width: 50 }} />
                    <Text style={{ marginLeft: 20, color: '#FFFFFF', fontSize: 20, fontWeight: "bold" }}>Welcome Back! {'\n'} Dr. Jim Ryan</Text>
                </View>

                <View style={styles.container_view_createPatient}>
                    <View style={styles.view_createPatient}>
                        <TouchableOpacity
                            onPress={addPatientButton_Pressed}
                            style={styles.touchableOpacity_addPatient}
                        >
                            <Text style={{ color: '#FFFFFF' }}>+</Text>
                        </TouchableOpacity>
                        <Text style={{ marginLeft: 10 }}>Create new patient</Text>
                    </View>
                </View>

                <View style={styles.view_patientsList}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, color: '#FFFFFF' }}>Patients List</Text>
                        <TouchableOpacity style={styles.touchableOpacity_viewAll}>
                            <Text style={{ fontSize: 17, color: '#000000' }}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    <RenderPatientAvatar style={styles.component_patientAvatar} />
                </View>

                <View style={styles.view_upcomingAppointment}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, color: '#FFFFFF' }}>Upcoming Appointment</Text>
                        <TouchableOpacity style={styles.touchableOpacity_viewAll}>
                            <Text style={{ fontSize: 17, color: '#000000' }}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <View style={{marginTop:10}}>
                            <AppointmentInfoCard patientInfo={testPatientData} />
                        </View>
                        <View style={{marginTop:10}}>
                            <AppointmentInfoCard patientInfo={testPatientData} />
                        </View>
                        <View style={{marginTop:10}}>
                            <AppointmentInfoCard patientInfo={testPatientData} />
                        </View>
                    </ScrollView>
                    
                </View>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    view_welcomeInfo: {
        height: 10,
        padding: 8,
        flexDirection: 'row',
        marginTop: 70,
        height: 70,
        marginLeft: 15
    },
    container_view_createPatient: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    view_createPatient: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        width: '90%',
        height: 60,
        alignItems: 'center',
        borderRadius: 20
    },
    touchableOpacity_addPatient: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: '#1589FF',
        color: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    view_patientsList: {
        width: '90%',
        marginTop: 20,
        marginLeft: '5%'
    },
    touchableOpacity_viewAll: {
        width: 100,
        height: 30,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    component_patientAvatar: {
        marginLeft: 0
    },
    view_upcomingAppointment: {
        width: '90%',
        marginLeft: '5%'
    },
});