import React from 'react';
import { Image, Text, Pressable } from 'react-native';

import { icons, ENUMS } from '../constants';
import styles from '../styles/components/trackToolbar';


export default function TrackToolbar({type}) {
    switch (type) {

        case ENUMS.HEART_RATE_BUTTON:
            return (
                <Pressable style={styles.heartRateContainer} onPress={() => console.log('Heart Rate pressed')}>
                    <Text style={styles.text}>Heart Rate</Text>
                    <Image source={icons.arrow} style={styles.arrow}></Image>
                </Pressable>
            );

        case ENUMS.SLEEP_BUTTON:
            return (
                <Pressable style={styles.sleepContainer} onPress={() => console.log('Sleep pressed')}>
                    <Text style={styles.text}>Sleep</Text>
                    <Image source={icons.arrow} style={styles.arrow}></Image>
                </Pressable>
            );

        case ENUMS.AFTERNOON_CRASH_BUTTON:
            return (
                <Pressable style={styles.afternoonCrashContainer} onPress={() => console.log('Afternoon Crash pressed')}>
                    <Text style={styles.text}>Afternoon Crash</Text>
                    <Image source={icons.arrow} style={styles.arrow}></Image>
                </Pressable>
            );
    }
};