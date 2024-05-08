import React, { useState } from 'react';
import { Image, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

import { icons, ENUMS } from '../constants';
import styles from '../styles/components/trackToolbar';
import Program from '../app/model/program';

import { COLORS } from '../constants';

export default function TrackToolbar({ type }) {

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

            const [selectedPeriod, setSelectedPeriod] = useState('D');

            var params;
            var program = Program.getInstance();
            params = program.getTempParams(reset=false);
        
            if (params['periodContainerPressed'] == false) {
                params = {"afternoonCrashDataType": ENUMS.AFTERNOON_CRASH_CLOCK_DAY};
                program.setTempParams(params);
            }
        
            const handlePeriodPress = (period) => {
                const currentSelectedPeriod = selectedPeriod || '';
            
                if (currentSelectedPeriod !== period) {
                    switch (period) {
                        case 'D':
                            params = {"periodContainerPressed": true, "afternoonCrashDataType": ENUMS.AFTERNOON_CRASH_CLOCK_DAY};
                            break;
            
                        case 'W':
                            params = {"periodContainerPressed": true, "afternoonCrashDataType": ENUMS.AFTERNOON_CRASH_CLOCK_WEEK};
                            break;
            
                        case 'M':
                            params = {"periodContainerPressed": true, "afternoonCrashDataType": ENUMS.MONTH_CALENDAR_DATA};
                            break;
            
                        case '6M':
                            params = {"periodContainerPressed": true, "afternoonCrashDataType": ENUMS.MONTH_CALENDAR_DATA};
                            break;
            
                        case 'Y':
                            params = {"periodContainerPressed": true, "afternoonCrashDataType": ENUMS.MONTH_CALENDAR_DATA};
                            break;
                    }
                    program.setTempParams(params);
                    setSelectedPeriod(period);
                }
            };

            return (
                <Link href="screens/afternoonCrashScreen" asChild>
                    <Pressable style={styles.afternoonCrashContainer}>
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
                </Link>
            );
    }
}
