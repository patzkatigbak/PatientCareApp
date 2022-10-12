import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, FlatList } from 'react-native';

export const RenderPatientAvatar = () => {

    const testData = [
        {
            name:'Jessica Ryan',
            imageUrl: require('../../assets/patientAvatar/patient1.jpeg')
        },
        {
            name:'Jessica Ryan',
            imageUrl: require('../../assets/patientAvatar/patient2.png')
        },
        {
            name:'Jessica Ryan',
            imageUrl: require('../../assets/patientAvatar/patient3.jpeg')
        },
        {
            name:'Jessica Ryan',
            imageUrl: require('../../assets/patientAvatar/patient4.jpg')
        },
        {
            name:'Jessica Ryan',
            imageUrl: require('../../assets/patientAvatar/patient5.jpg')
        },
    ]

    const renderAvatarItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.touchableOpacity}>
                <Image source={item.imageUrl} style={{height:55,width:55,borderRadius:100}}/>
                <View>
                    <Text style={{fontSize:10,marginTop:5,fontWeight:'bold'}}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.view_patientAvatar}>
            <FlatList
                data={testData}
                keyExtractor={(item, index) => index}
                renderItem={renderAvatarItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view_patientAvatar: {
        paddingBottom:10,
        marginBottom:10,
    },
    touchableOpacity:{
        marginLeft:8,
        marginTop:20
    }
})