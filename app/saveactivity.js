// TimeDisplay.js
import React from 'react';
import { View, Text } from 'react-native';

const TimeDisplay = ({ route }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Recorded Time: {route.params.recordedTime}</Text>
        </View>
    );
}

export default TimeDisplay;
