import React from 'react';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';

import { ENUMS } from '../constants';
import styles from '../styles/components/afternoonCrashData';


export default function AfternoonCrashData({dataType}) {

    const rectangles = [
        { level: 1, color: '#44CE1B' },
        { level: 2, color: '#BBDB44' },
        { level: 3, color: '#F7E379' },
        { level: 4, color: '#F2A134' },
        { level: 5, color: '#E51F1F' },
      ];

    //TODO: Implement graph library

    switch (dataType) {

        case ENUMS.CRASH_SCORE_DATA:
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
