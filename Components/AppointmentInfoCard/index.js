import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, FlatList } from 'react-native';

export const AppointmentInfoCard = (props) => {
    const { name, age, sex, ID, mobile, time } = props.patientInfo
    return (
        <View style={styles.view_container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../assets/patientAvatar/patient1.jpeg')} style={{ height: 55, width: 55, borderRadius: 100 }} />
                    <View>
                        <Text style={{ fontSize: 17, marginLeft: 10, fontWeight: 'bold' }}>{name}</Text>
                        <Text style={styles.text_style}>{time}</Text>
                        <Text style={styles.text_style}>{sex}  {age}yrs</Text>
                        <Text style={styles.text_style}>ID:{ID}  Mobile:{mobile}</Text>
                        <TouchableOpacity style={styles.touchableOpacity_viewDetail}>
                            <Text style={{ fontSize: 12, marginTop: 5, fontWeight: 'bold', color:'#FFFFFF' }}>View Detail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view_container: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 20,
        flexDirection: 'column'
    },
    view_patientAvatar: {
        paddingBottom: 10,
        marginBottom: 10,
    },
    touchableOpacity: {
        marginLeft: 8,
        marginTop: 20
    },
    text_style: {
        fontSize: 15,
        marginTop: 5,
        marginLeft: 10,
        color: '#454545'
    },
    touchableOpacity_viewDetail:{
        width:90,
        height:30,
        borderRadius:20,
        backgroundColor:'#1589FF',
        alignItems:'center',
        justifyContent:'center',
        marginLeft: 10,
        marginTop:5
    }
})