import React from 'react';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';

import { ENUMS, COLORS } from '../constants';
import styles from '../styles/components/crashInfoBottomBox';
import baseScreenStyles from '../styles/screens/baseScreen';


export default function CrashInfoBottomBox({dataType}) {

    var weekCrashes = [
       { weekDay: 'Mo', scoreColor: null, initialTime: null, finalTime: null },
       { weekDay: 'Tu', scoreColor: null, initialTime: null, finalTime: null },
       { weekDay: 'We', scoreColor: null, initialTime: null, finalTime: null },
       { weekDay: 'Th', scoreColor: null, initialTime: null, finalTime: null },
       { weekDay: 'Fr', scoreColor: null, initialTime: null, finalTime: null },
       { weekDay: 'Sa', scoreColor: null, initialTime: null, finalTime: null },
       { weekDay: 'Su', scoreColor: null, initialTime: null, finalTime: null },
    ]

    //Temporary
    var colors = [COLORS.gradient_5, COLORS.gradient_3, COLORS.gradient_3, COLORS.gradient_5, COLORS.gradient_1, COLORS.gradient_2, COLORS.gradient_1 ]

    function fulfillWeekCrashes() {
        for (var i = 0; i < colors.length; i++) {
            weekCrashes[i].scoreColor = colors[i];
            weekCrashes[i].initialTime = '16:00';
            weekCrashes[i].finalTime = '18:00';
        }
    }
    fulfillWeekCrashes()

    switch (dataType) {

        case ENUMS.AFTERNOON_CRASH_CLOCK_WEEK:
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
            return (
                <View style={styles.container}>

                </View>
            );
    }
}
