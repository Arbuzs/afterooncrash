import React, { useState } from 'react';
import { Image, Text, View, Pressable } from 'react-native';

import { icons, ENUMS } from '../constants';
import styles from '../styles/components/trackToolbar';

import { COLORS } from '../constants';

export default function TrackToolbar({ type }) {
    const [selectedPeriod, setSelectedPeriod] = useState('D');

    const handlePeriodPress = (period) => {
        console.log(`${period} pressed`);
        setSelectedPeriod(period);
    };

    switch (type) {
        case ENUMS.HEART_RATE_BUTTON:
            return (
                <Pressable style={styles.heartRateContainer} onPress={() => console.log('Heart Rate pressed')}>
                    <Text style={styles.text}>Heart Rate</Text>
                    <Image source={icons.arrow} style={styles.arrow} />
                </Pressable>
            );

        case ENUMS.SLEEP_BUTTON:
            return (
                <Pressable style={styles.sleepContainer} onPress={() => console.log('Sleep pressed')}>
                    <Text style={styles.text}>Sleep</Text>
                    <Image source={icons.arrow} style={styles.arrow} />
                </Pressable>
            );

        case ENUMS.AFTERNOON_CRASH_BUTTON:
            return (
                <Pressable style={styles.afternoonCrashContainer} onPress={() => console.log('Afternoon Crash pressed')}>
                    <Text style={styles.text}>Afternoon Crash</Text>
                    <Image source={icons.arrow} style={styles.arrow} />
                    <View style={styles.periodContainer}>
                        <Pressable
                            style={[
                                styles.period, styles.firstPeriod,
                                { backgroundColor: selectedPeriod === 'D' ? COLORS.white : COLORS.secondary_2 },
                            ]}
                            onPress={() => handlePeriodPress('D')}
                        >
                            <Text style={[styles.periodText, { color: selectedPeriod === 'D' ? COLORS.black : COLORS.white }]}>D</Text>
                        </Pressable>
                        <Pressable
                            style={[
                                styles.period,
                                { backgroundColor: selectedPeriod === 'W' ? COLORS.white : COLORS.secondary_2 },
                            ]}
                            onPress={() => handlePeriodPress('W')}
                        >
                            <Text style={[styles.periodText, { color: selectedPeriod === 'W' ? COLORS.black : COLORS.white }]}>W</Text>
                        </Pressable>
                        <Pressable
                            style={[
                                styles.period,
                                { backgroundColor: selectedPeriod === 'M' ? COLORS.white : COLORS.secondary_2 },
                            ]}
                            onPress={() => handlePeriodPress('M')}
                        >
                            <Text style={[styles.periodText, { color: selectedPeriod === 'M' ? COLORS.black : COLORS.white }]}>M</Text>
                        </Pressable>
                        <Pressable
                            style={[
                                styles.period,
                                { backgroundColor: selectedPeriod === '6M' ? COLORS.white : COLORS.secondary_2 },
                            ]}
                            onPress={() => handlePeriodPress('6M')}
                        >
                            <Text style={[styles.periodText, { color: selectedPeriod === '6M' ? COLORS.black : COLORS.white }]}>6M</Text>
                        </Pressable>
                        <Pressable
                            style={[
                                styles.period, styles.lastPeriod,
                                { backgroundColor: selectedPeriod === 'Y' ? COLORS.white : COLORS.secondary_2 },
                            ]}
                            onPress={() => handlePeriodPress('Y')}
                        >
                            <Text style={[styles.periodText, { color: selectedPeriod === 'Y' ? COLORS.black : COLORS.white }]}>Y</Text>
                        </Pressable>
                    </View>
                    <View style={styles.graphContainer}/>
                </Pressable>
            );
    }
}
