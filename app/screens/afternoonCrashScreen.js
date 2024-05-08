import { View, Text, StyleSheet } from 'react-native';

import Header from '../../components/header';
import BottomToolbar from '../../components/bottomToolbar';

import baseScreenStyles from '../../styles/screens/baseScreen';
import AfternoonCrashData from '../../components/afternoonCrashData';
import CrashInfoBottomBox from '../../components/crashInfoBottomBox';

import BarPlot from '../../components/barPlot';

import Clock from '../../components/clock';
import ClockTimeInterval from '../../components/clockTimeInterval';

import { ENUMS } from '../../constants';
import Program from '../model/program';


export default function AfternoonCrashScreen({}) {
    
    var program = Program.getInstance();
    var params = program.getTempParams();
    const dataType = params['afternoonCrashDataType'];
    
    const weekDays = program.getCurrentUser().getDaysFromCurrentWeek();

    if (dataType == ENUMS.AFTERNOON_CRASH_CLOCK_DAY || dataType == ENUMS.AFTERNOON_CRASH_CLOCK_WEEK) {

        const barData = Array.from({ length: 7 }, (_, index) => {
            const day = weekDays.find(day => day.dayOfWeekNumber === index);
            if (day) {
                const afternoonCrash = day.getAfternoonCrash();
                if (afternoonCrash) {
                    const startTime = afternoonCrash.getStartTime();
                    const endTime = afternoonCrash.getEndTime();
                    return {
                        dayOfWeek: day.dayOfWeekNumber,
                        weekday: day.dayOfWeekShortString,
                        startHour: startTime.getHours(),
                        startMinute: startTime.getMinutes(),
                        endHour: endTime.getHours(),
                        endMinute: endTime.getMinutes(),
                        scoreColor: afternoonCrash.getCrashColor(),
                    };
                }
            }
            return null; // If no data for this day, set it to null
        });
        
        return (
            <View style={baseScreenStyles.container}>
                <Header title={dataType} />
                <View style={baseScreenStyles.baseDataContainer}>
                    {/* <BarPlot type={"Weekly"} barData={barData} style={stylesAux.container} /> */}
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

const stylesAux = StyleSheet.create({
    container: {
        borderRadius: 20,
    }
})