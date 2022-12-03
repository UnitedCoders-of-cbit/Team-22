import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './screens/MainScreen' 
import BookingScreen from './screens/BookingScreen';
import Status from './screens/Status';
import AuthScreen from './screens/AuthScreen';

import { createNativeStackNavigator  } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Auth' component={AuthScreen}/>
        <Stack.Screen name='Main' component={MainScreen}/>
        <Stack.Screen name='Booking' component={BookingScreen}/>
        <Stack.Screen name='Status' component={Status}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
