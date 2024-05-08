import { View, Text } from 'react-native';

import Header from '../../components/header';
import TrackToolbar from '../../components/trackToolbar';
import BottomToolbar from '../../components/bottomToolbar';

import { ENUMS } from '../../constants';

import baseScreenStyles from '../../styles/screens/baseScreen';

import Program from '../model/program';
import User from '../model/user';
import AfternoonCrash from '../model/afternoonCrash';
import Sleep from '../model/sleep';
import Day from '../model/day';


export default function Summary() {

    // ---- TESTING ----
    
    // var program = Program.getInstance();
    // var user = program.getCurrentUser();

    // console.log(user.name);
    // console.log(user.email);
    // console.log(user.password);
    
    // var currentDay = user.getCurrentDay();
    // console.log(currentDay.dateString);
    // console.log(currentDay.dayOfWeekString);
    // console.log(user.getNumberOfDays());
    // date = new Date();
    // console.log(user.getSpecificDay(date).dateString);
    
    // const crashStartTime = new Date(2024, 4, 1, 14, 0, 0); // May 1st, 2024, 2:00 PM
    // const crashEndTime = new Date(2024, 4, 1, 15, 30, 0); // May 1st, 2024, 3:30 PM
    // var afternoonCrash = new AfternoonCrash(crashStartTime, crashEndTime, 3, 'Quite tired');

    // const sleepStartTime = new Date(2024, 4, 1, 1, 0, 0); // May 1st, 2024, 1:00 AM
    // const sleepEndTime = new Date(2024, 4, 1, 9, 30, 0); // May 1st, 2024, 9:30 AM
    // var sleep = new Sleep(sleepStartTime, sleepEndTime, 5);

    // currentDay.addAfternoonCrash(afternoonCrash);
    // currentDay.addSleep(sleep);

    // console.log(currentDay.getAfternoonCrash().crashScore);
    // console.log(currentDay.getAfternoonCrash().durationString);

    // console.log(currentDay.getSleep().sleepScore);
    // console.log(currentDay.getSleep().durationString);

    var program = Program.getInstance();
    params = {"periodContainerPressed": false};
    program.setTempParams(params);

    return (
        <View style={baseScreenStyles.container}>
            <Header title="Summary" />
            <View style={baseScreenStyles.baseDataContainer}>
                <TrackToolbar type={ENUMS.HEART_RATE_BUTTON} />
                <TrackToolbar type={ENUMS.SLEEP_BUTTON} />
                <TrackToolbar type={ENUMS.AFTERNOON_CRASH_BUTTON} />
            </View>
            <BottomToolbar />
        </View>
    )
}
