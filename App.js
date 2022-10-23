import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { LoginScreen } from './Screens/LoginScreens/index.js'
import { RegisterScreen } from './Screens/RegisterScreens/index.js'
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './Screens/HomeScreens/index.js';
import { AppointmentDetail } from './Screens/AppointmentDetailScreens/index.js';
import { PatientScreen } from './Screens/PatientScreens/index.js';
import { AppointmentScreen } from './Screens/AppointmentScreens/index.js';
import { SetUpScreen } from './Screens/SetUpScreens/index.js'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const NavigationBar = () => {
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
      <Tab.Screen name="Settings" component={SetUpScreen} />
    </Tab.Navigator>
  )
}


export default function App() {
  var test = false
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AppointmentDetail"
          component={AppointmentDetail}
        />
        <Stack.Screen
          name="NavigationBar"
          component={NavigationBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SetUpScreen"
          component={SetUpScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

