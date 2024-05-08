import React from 'react';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';

import { ENUMS, COLORS } from '../constants';
import styles from '../styles/components/afternoonCrashData';


export default function AfternoonCrashData({dataType}) {
    //TODO: Implement graph library

    switch (dataType) {

        case ENUMS.CRASH_SCORE_DATA:
            const rectangles = [
                { level: 1, color: COLORS.gradient_1 },
                { level: 2, color: COLORS.gradient_2 },
                { level: 3, color: COLORS.gradient_3 },
                { level: 4, color: COLORS.gradient_4 },
                { level: 5, color: COLORS.gradient_5 },
              ];

            return (
                <View style={styles.container}>
                    {rectangles.map(({ level, color }, index) => (
                        <View key={index} style={[styles.rectangle, { backgroundColor: color, marginTop: index !== 0 ? 10 : 0 }]}>
                            <Text style={styles.text}>Level {level}</Text>
                        </View>
                    ))}
                </View>
            );


        case ENUMS.CALENDAR_DATA:
            return (
                <View style={styles.container}></View>
            );


        case ENUMS.WEAK_OVERVIEW_DATA:
            return (
                <View style={styles.container}></View>
            );
        

        case ENUMS.MONTH_OVERVIEW_PERCENTAGE_DATA:
            return (
                <View style={styles.container}></View>
            );

            
        case ENUMS.MONTH_OVERVIEW_DURATION_DATA:
            return (
                <View style={styles.container}></View>
            );
    }
}
