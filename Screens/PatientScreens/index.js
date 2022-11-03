import React, {useContext} from 'react'
import { StyleSheet, TextInput,Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { PatientInfoCard } from '../../Components/PatientInfoCard/index.js';
import { useNavigation } from '@react-navigation/native';
import { httpGetRequest } from '../../utils/http.js'
import {UserContext} from '../../UserContext.js'
import {PatientList} from '../../Components/PatientList/index.js'


export const PatientScreen = ({props}) => {
    const navigation = useNavigation();
    const [patients,setPatients] = React.useState([])

    const renderPatientList = () => {
        return (
            <PatientList/>
        )
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
                    <ScrollView>
                        {renderPatientList()}
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