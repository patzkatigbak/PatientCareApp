import React, {useContext} from 'react'
import { useNavigation } from '@react-navigation/native';
import {PatientInfoCard} from '../PatientInfoCard/index.js'
import {httpGetRequest} from '../../utils/http.js'
import {UserContext} from '../../UserContext.js'

export const PatientList = () => {
    const {user} = useContext(UserContext)
    const [patients,setPatients] = React.useState([])
    const navigation = useNavigation();

    React.useEffect(() => {
        const willFocusSubscription = navigation.addListener('focus', () => {
            httpGetRequest(`patients?doctorID=${user._id}`, 'GET')
                .then(async res => {
                    if (res.ok) {
                        return await res.json()
                    } else {
                        alert("Wrong password or username!")
                        return Promise.reject(await res.json());
                    }
                })
                .then(data => {
                    setPatients(data)
                })
        });
        return willFocusSubscription;
    }, [])

    return (
        patients.map(patient=>{
            return(<PatientInfoCard patient={patient}/>)
        })
    )
}