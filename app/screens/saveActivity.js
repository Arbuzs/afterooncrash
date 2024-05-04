// TimeDisplay.js
import React from 'react';
import { View, Text } from 'react-native';
import SaveActivityComponent from '../../components/saveActivityComponent';
import Header from '../../components/header';
import baseScreen from '../../styles/screens/baseScreen';
import Program from '../model/program';

export default function SaveActivity(){
   // const { recordedTime } = route.params;
     var program = Program.getInstance();
     var params = program.getTempParams();

     return (
          <View style={baseScreen.container}>
               <Header title="Save Activity"/>
               <View style={baseScreen.spacer}>
                    <SaveActivityComponent data={params}/>
               </View>
          </View>
    
  );
       /* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Recorded Time: {recordedTime}</Text>
        </View>
        */
   
}
