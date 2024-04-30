// TimeDisplay.js
import React from 'react';
import { View, Text } from 'react-native';
import SaveActivity from '../components/saveActivity';
import Header from '../components/header';
import baseScreen from '../styles/screens/baseScreen';

export default function Savectivity(){
   // const { recordedTime } = route.params; 
   return (
    <View style={baseScreen.container}>
    <Header title="Save Activity"/>
    <View style={baseScreen.spacer}>
    
    <SaveActivity/>
    </View>
    </View>
    
  );
       /* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Recorded Time: {recordedTime}</Text>
        </View>
        */
   
}
