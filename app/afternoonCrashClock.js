import { View, Text } from 'react-native';

import Header from '../components/header';
import BottomToolbar from '../components/bottomToolbar';
import CrashInfoBottomBox from '../components/crashInfoBottomBox';

import baseScreenStyles from '../styles/screens/baseScreen';

import { ENUMS } from '../constants';


export default function AfternoonCrashClock({}) {
    
    const dataType = ENUMS.AFTERNOON_CRASH_CLOCK_DAY;

    return (
        <View style={baseScreenStyles.container}>
            <Header title={dataType} />
            <View style={baseScreenStyles.baseDataContainer}>
                <CrashInfoBottomBox dataType={dataType}/>
            </View>
            <View style={baseScreenStyles.spacer}/>
            <BottomToolbar />
        </View>
    )
}