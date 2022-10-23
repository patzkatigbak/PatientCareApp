import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './Screens/HomeScreens/index.js';
import { PatientScreen } from './Screens/PatientScreens/index.js';
import { AppointmentScreen } from './Screens/AppointmentScreens/index.js';
import { RenderPatientAvatar } from './Components/PatientAvatar/index.js';
import { AppointmentDetail } from './Screens/AppointmentDetailScreens/index.js';
import {AppointmentInfoCard} from './Components/AppointmentInfoCard/index.js'
import {PatientInfoCard} from './Components/PatientInfoCard/index.js'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const NavigationBar = () => {
    return (
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
    )
  }

  export const AuthentificiatedApp = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name = "NavigationBar"
            component = {NavigationBar}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="PatientAvatar"
            component={RenderPatientAvatar}
          />
          <Stack.Screen
            name="PatientInfoCard"
            component={PatientInfoCard}
          />
          <Stack.Screen
            name="AppointmentInfoCard"
            component={AppointmentInfoCard}
          />
          <Stack.Screen name="AppointmentDetails" 
            component={AppointmentDetail} 
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }