import React from 'react';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';

import { format } from 'date-fns';
import { ENUMS, COLORS } from '../constants';
import styles from '../styles/components/crashInfoBottomBox';
import baseScreenStyles from '../styles/screens/baseScreen';
import Program from '../app/model/program';


export default function CrashInfoBottomBox({dataType}) {

    var program = Program.getInstance();
    var user = program.getCurrentUser();
    
    switch (dataType) {

        case ENUMS.AFTERNOON_CRASH_CLOCK_WEEK:

            var weekCrashes = [
                { weekDay: 'Mo', scoreColor: COLORS.grey, initialTime: "", finalTime: "" },
                { weekDay: 'Tu', scoreColor: COLORS.grey, initialTime: "", finalTime: "" },
                { weekDay: 'We', scoreColor: COLORS.grey, initialTime: "", finalTime: "" },
                { weekDay: 'Th', scoreColor: COLORS.grey, initialTime: "", finalTime: "" },
                { weekDay: 'Fr', scoreColor: COLORS.grey, initialTime: "", finalTime: "" },
                { weekDay: 'Sa', scoreColor: COLORS.grey, initialTime: "", finalTime: "" },
                { weekDay: 'Su', scoreColor: COLORS.grey, initialTime: "", finalTime: "" },
            ]

            var days = user.getDaysFromCurrentWeek();
            user.printDays(days);

            function fulfillWeekCrashes() {

                for (var i = 0; i < days.length; i++) {
                    if (days[i].hasAfternoonCrash()) {
                        weekCrashes[i].scoreColor = days[i].afternoonCrash.getCrashColor();
                        weekCrashes[i].initialTime = days[i].afternoonCrash.startTimeStringShort;
                        weekCrashes[i].finalTime = days[i].afternoonCrash.endTimeStringShort;
                    }
                }
            }

            fulfillWeekCrashes()

            return (
                <View style={styles.container}>
                    <View style={styles.scoresContainer}>
                        {weekCrashes.map(({ weekDay, scoreColor }, index) => (
                            <View key={index} style={[styles.weekDayScore, { backgroundColor: scoreColor }]}>
                                <Text style={styles.text}>{weekDay}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.crashTimesContainer}>
                        {weekCrashes.map(({ initialTime, finalTime }, index) => (
                            <View key={index} style={styles.crashTimes}>
                                <Text style={styles.timeText}>{initialTime}</Text>
                                <View style={styles.timeLine} />
                                <Text style={styles.timeText}>{finalTime}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            );

        case ENUMS.AFTERNOON_CRASH_CLOCK_DAY:

            var currentDay = user.getCurrentDay();
            var scoreColor;
            var crashStart;
            var crashEnd;

            if (currentDay.hasAfternoonCrash()) {
                var afternoonCrash = currentDay.getAfternoonCrash();
                scoreColor = afternoonCrash.getCrashColor();
                crashStart = afternoonCrash.startTimeStringShort;
                crashEnd = afternoonCrash.endTimeStringShort;
            }
            else {
                scoreColor = COLORS.grey;
                crashStart = "----";
                crashEnd = "----";
            }

            return (
                <View style={styles.container}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateText}>{currentDay.dayOfWeekString}</Text>
                        <View style={baseScreenStyles.spacer}/>
                        <Text style={styles.dateText}>{currentDay.dateStringDot}</Text>
                        <View style={styles.spacer}/>
                        <View style={[styles.weekDayScoreSmall, { backgroundColor: scoreColor }]}>
                            <Text style={styles.text}>{currentDay.afternoonCrash.crashScore}</Text>
                        </View>
                    </View>
                    <View style={styles.crashTimeInfo}>
                        <Text style={styles.crashTimeInfoLabel}>Crash Started</Text>
                        <View style={styles.smallSpacer}/>
                        <Text style={styles.crashTimeInfoValue}>{crashStart}</Text>
                        <View style={styles.spacer}/>
                    </View>
                    <View style={styles.crashTimeInfo}>
                        <Text style={styles.crashTimeInfoLabel}>Crash Ended</Text>
                        <View style={styles.smallSpacer}/>
                        <Text style={styles.crashTimeInfoValue}>{crashEnd}</Text>
                        <View style={styles.spacer}/>
                    </View>
                </View>
            );
    }
}
