import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Record from '../screens/record';  
import SaveActivity from '../screens/saveActivity'; //this will be the new screen 

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="record">
        <Stack.Screen name="record" component={Record} />
        <Stack.Screen name="SaveActivity" component={SaveActivity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
