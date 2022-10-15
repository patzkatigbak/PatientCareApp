import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export const PatientScreen = () => {
    return (
        <View style={styles.view_container}>
             <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover">

                <View style={styles.viewBoxHello}>
                    <Text style={styles.textDetail}>Hello Dr Jim Ryan</Text>
                </View>

                <View style={styles.viewBoxSearch}>
                    <TextInput 
                        style={styles.textinput} 
                        placeholder="Search Patient">
                    </TextInput>

                    <TouchableOpacity style={styles.touchableOpacitySearch}>
                            <Text style={{ fontSize: 17, color: '#000000' }}>View All</Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
view_container: {
    flex:1

},
textDetail:{
    textAlign:'center',
    fontSize:20
},
viewBoxHello:{
    textAlign:'center',
    justifyContent: 'center',
    marginLeft: '18%',
    borderRadius: 50, 
    marginTop:100,
    height:30,
    width:250,
   // backgroundColor: '#E5E4E2'
    backgroundColor: '#FFFFFF'
},
viewBoxSearch:{
    textAlign:'center',
    marginLeft: '12%',
    borderRadius: 10, 
    marginTop:50,
    height:50,
    width:300,
    backgroundColor: '#FFFFFF'
},
buttonSearch:{
    alignSelf:'stretch',
    alignItems:'center',
    padding: 20, 
    backgroundColor: '#59cbbd',
    marginTop: 10,
},
textinput:{
    textAlign:'center',
    height: 40,
    fontSize: 20,
    marginBottom: 0
},
touchableOpacitySearch: {
    width: 100,
    height: 30,
    marginTop:10,
    backgroundColor: '#1589FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
},

});