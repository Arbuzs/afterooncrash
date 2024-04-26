import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Record from '../record';
import TimeDisplay from '../saveactivity'; // This will be your new screen

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Record">
        <Stack.Screen name="record" component={Record} />
        <Stack.Screen name="saveactivity" component={TimeDisplay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
