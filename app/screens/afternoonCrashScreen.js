import { View, Text } from 'react-native';

import Header from '../../components/header';
import BottomToolbar from '../../components/bottomToolbar';

import baseScreenStyles from '../../styles/screens/baseScreen';
import AfternoonCrashData from '../../components/afternoonCrashData';
import CrashInfoBottomBox from '../../components/crashInfoBottomBox';

import Clock from '../../components/clock';
import ClockTimeInterval from '../../components/clockTimeInterval';

import { ENUMS } from '../../constants';
import Program from '../model/program';


export default function AfternoonCrashScreen({}) {
    
    var program = Program.getInstance();
    var params = program.getTempParams();
    const dataType = params['afternoonCrashDataType'];
    

    if (dataType == ENUMS.AFTERNOON_CRASH_CLOCK_DAY || dataType == ENUMS.AFTERNOON_CRASH_CLOCK_WEEK) {
        return (
            <View style={baseScreenStyles.container}>
                <Header title={dataType} />
                {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Clock />
                    <ClockTimeInterval />
                </View> */}
                <View style={baseScreenStyles.baseDataContainer}>
                    <CrashInfoBottomBox dataType={dataType}/>
                </View>
                <View style={baseScreenStyles.spacer}/>
                <BottomToolbar />
            </View>
        )
    }

    else if (dataType == ENUMS.MONTH_OVERVIEW_DURATION_DATA || dataType == ENUMS.MONTH_CALENDAR_DATA) {
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
}