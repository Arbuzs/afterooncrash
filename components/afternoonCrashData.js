import React from 'react';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';

import { ENUMS } from '../constants';
import styles from '../styles/components/afternoonCrashData';


export default function AfternoonCrashData({dataType}) {

    //TODO: Implement graph library

    switch (dataType) {

        case ENUMS.CRASH_SCORE_DATA:
            return (
                <View style={styles.container}></View>
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
