import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { httpGetRequest } from '../../utils/http.js'
import { useNavigation } from '@react-navigation/native';

export const RenderPatientAvatar = (props) => {
    const [patients, setPatients] = React.useState([])
    const navigation = useNavigation();

    React.useEffect(() => {
        const willFocusSubscription = navigation.addListener('focus', () => {
            httpGetRequest(`patients?doctorID=${props.id}`, 'GET')
                .then(async res => {
                    if (res.ok) {
                        return await res.json()
                    } else {
                        alert("Wrong password or username!")
                        return false
                    }
                })
                .then(data => {
                    setPatients(data)
                })
        });
        return willFocusSubscription;
    }, [])

    const navigateToPatientDetailPage = (patient) => {
        navigation.navigate('PatientDetail',{patient:patient})
    }

    return (
        <View style={styles.view_patientAvatar}>
            {patients.map((patient, key) => {
                return <TouchableOpacity style={styles.touchableOpacity} onPress = {()=>navigateToPatientDetailPage(patient)}>
                    <Image source={{ uri: patient.imageUri }} style={{ height: 55, width: 55, borderRadius: 100 }} />
                    <View>
                        <Text style={{ fontSize: 10, marginTop: 5, fontWeight: 'bold' }}>{patient.name}</Text>
                    </View>
                </TouchableOpacity>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    view_patientAvatar: {
        flexDirection: 'row',
        paddingBottom: 10,
        marginTop: 10
    },
    touchableOpacity: {
        marginLeft: 7,

    }
})