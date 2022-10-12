import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './Screens/HomeScreens/index.js'
import { PatientScreen } from './Screens/PatientScreens/index.js'
import { AppointmentScreen } from './Screens/AppointmentScreens/index.js'


//screenOptions={{ headerShown: false,  }}
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'rgba(34,36,40,1)',
            position: 'absolute',
            borderTopWidth: 0,
          },
        })}
        tabBarOptions={{
          activeTintColor: "#50d3a7",
          inactiveTintColor: "gray",
          labelStyle: {
            fontSize: 15,
          },
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Patient" component={PatientScreen} />
        <Tab.Screen name="Appointment" component={AppointmentScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

