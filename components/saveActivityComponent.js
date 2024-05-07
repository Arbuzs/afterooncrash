import React, { useRef } from 'react';
import { Platform } from 'react-native';
import { StyleSheet, View, Image, Text, Pressable, TextInput } from 'react-native';
import { Link } from 'expo-router';

import { ENUMS, COLORS } from '../constants';
import styles from '../styles/components/saveActivity';
import baseScreenStyles from '../styles/screens/baseScreen';
import stopwatch from '../styles/components/stopwatch';
import Program from '../app/model/program';
import AfternoonCrash from '../app/model/afternoonCrash';
import { format, parse } from 'date-fns'

var crashStart = null;
var crashEnd = null;
var notes = null;
var crashIntensity = null;

var recordedTime = null;


const setCrashIntensity = (intensity, refs) => {
    crashIntensity = intensity;

    if (Platform.OS === 'web') {
        // Deselect all other buttons
        Object.keys(refs).forEach((key) => {
            if (key != intensity) {
                refs[key].style.borderColor = COLORS.white;
            }
        });
        // Apply style to the pressed button
        refs[intensity].style.borderColor = COLORS.black;
    } else {
        // Deselect all other buttons
        Object.keys(refs).forEach((key) => {
            if (key != intensity) {
                refs[key].setNativeProps({ style: [styles.intensityButton, { borderColor: COLORS.white }] });
            }
        });

        // Apply style to the pressed button
        refs[intensity].setNativeProps({ style: [styles.intensityButton, { borderColor: COLORS.black }] });
    }
};

const handleTextChange = (newText) => {
    notes = newText;
};

const submit = () => {
    if (crashIntensity != null) {
        var afternoonCrash = new AfternoonCrash(crashStart, crashEnd, crashIntensity, notes);
        var program = Program.getInstance();
        var currentDay = program.getCurrentUser().getCurrentDay();
        currentDay.setAfternoonCrash(afternoonCrash)
    }
    crashStart = null;
    crashEnd = null;
    notes = null;
    crashIntensity = null;
    console.log("Afternoon Crash Added")
    // console.log(program.getCurrentUser().days)
    // console.log(currentDay.getAfternoonCrash())
}

const resumeCounter = () => {
    const params = {'recordedTimeResume': recordedTime}
    var program = Program.getInstance();
    program.setTempParams(params)
};

export default function SaveActivityComponent({ data }) {

    recordedTime = data['recordedTime']
    crashStart = parse(data['crashStart'], 'HH:mm:ss', new Date());
    crashEnd = parse(data['crashEnd'], 'HH:mm:ss', new Date());

    // Object to hold references to Pressable components
    const refs = {};

    return (
        <View style={styles.container}>
            <View style={styles.horizontalLine}/>
            {/*Time and date Section */}
            <View style={styles.section}>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label1}>Time</Text>
                        <Text style={styles.value}>{data['recordedTime']}</Text>
                    </View>
                    <View style={styles.verticalLine}/>
                    <View style={styles.column}>
                        <Text style={styles.label1}>Date</Text>
                        <Text style={styles.value}>{data['date']}</Text>
                    </View>
                </View>
            </View>
            {/*Crash Time Section */}
            <View style={styles.section}>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label1}>Crash Started</Text>
                        <Text style={styles.value}>{data['crashStart']}</Text>
                    </View>
                    <View style={styles.verticalLine}/>
                    <View style={styles.column}>
                        <Text style={styles.label1}>Crash Ended</Text>
                        <Text style={styles.value}>{data['crashEnd']}</Text>
                    </View>
                </View>
            </View>
            {/*Crash intensity Section */}
            <View style={styles.row}>
                <Text style={styles.intensityHeading}>Crash Intensity</Text>
            </View>
            <View style={styles.intensitySection}>
                {[1, 2, 3, 4, 5].map((intensity) => (
                    <View key={intensity} style={styles.row}>
                        <View style={styles.intensityContainer}>
                            <Pressable
                                ref={(ref) => refs[intensity] = ref} // Save reference to Pressable
                                style={[styles.intensityButton, { backgroundColor: COLORS[`gradient_${intensity}`] }]}
                                onPress={() => setCrashIntensity(intensity, refs)} // Pass refs object to setCrashIntensity
                            >
                                <Text style={styles.intensityText}>{intensity}</Text>
                            </Pressable>
                        </View>
                    </View>
                ))}
            </View>
            <View style={styles.horizontalLine}/>
            <View style={styles.row}>
                <Text style={styles.intensityHeading}>Notes</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.notes}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => handleTextChange(text)}
                        placeholder="Any particular observation?"
                        multiline={true}
                        textAlignVertical="top" // Align text to the top
                    />
                </View>
            </View>
            <View style={styles.row}>
                <Link href="/screens/record" style={[stopwatch.button,stopwatch.resumeButton]} asChild>
                    <Pressable onPress={resumeCounter}>
                        <Text style={stopwatch.resumeText}>Resume</Text>
                    </Pressable>
                </Link>
                <Link href="/screens/summary" asChild>
                    <Pressable style={stopwatch.button} onPress={submit}>
                        <Text style={stopwatch.buttonText}>Save</Text>
                    </Pressable>
                </Link>
            </View>
            <Link href="/screens/summary" asChild>
                <Pressable style={styles.row}>
                    <Text style={styles.discardText}>Discard</Text>
                </Pressable>
            </Link>
        </View>
    );
};
