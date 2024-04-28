import { View, Text } from 'react-native';

import Header from '../components/header';
import BottomToolbar from '../components/bottomToolbar';

import baseScreenStyles from '../styles/screens/baseScreen';
import AfternoonCrashData from '../components/afternoonCrashData';

import { ENUMS } from '../constants';


export default function AfternoonCrashScreen({}) {
    
    const dataType = ENUMS.MONTH_OVERVIEW_PERCENTAGE_DATA;

    return (
        <View style={baseScreenStyles.container}>
            <Header title={dataType} />
            <View style={baseScreenStyles.baseDataContainer}>
                <AfternoonCrashData dataType={dataType}/>
            </View>
            <View style={baseScreenStyles.spacer}/>
            <BottomToolbar />
        </View>
    )
}