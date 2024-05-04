// Stopwatch.js
import React from "react";
import { Pressable, Text, Image } from 'react-native';
import {icons} from '../constants';
import styles from "../styles/components/stopwatch";
import Program from "../app/model/program";
import { format, subSeconds, parse } from 'date-fns'
import { Link } from "expo-router";

const Stopwatch = ({ type, handleTimer, time }) => {
    if (type == "Pause") {
        return (
            <Pressable style={styles.button} onPress={handleTimer}>
                <Image style={styles.pauseImage} source = {icons.pause}/>
            </Pressable>
        );
    }
    if (type == "Resume") {
        return (
            <Pressable style={[styles.button, styles.resumeButton]} onPress={handleTimer}>
                <Text style={styles.resumeText}>{type}</Text>
            </Pressable>
        );
    }
     if (type == "Start") {
        return (
            <Pressable style={styles.button} onPress={handleTimer}>
                <Text style={styles.buttonText}>{type}</Text>
            </Pressable>
        );
    }
    if (type == "Finish") {
        var timeInSeconds = parse(time, 'HH:mm:ss', new Date()); // Convert time string to Date object
        var currentMillis = Date.now(); // Current time in milliseconds
        var program = Program.getInstance();
        var params = {
            'recordedTime': time,
            'date': format(currentMillis, 'dd/MM/yy'),
            'crashStart': format(subSeconds(currentMillis, timeInSeconds.getSeconds()), 'HH:mm:ss'),
            'crashEnd': format(currentMillis, 'HH:mm:ss'),
        };
        program.setTempParams(params)
        return (
            <Link href="/screens/saveActivity" asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>{type}</Text>
                </Pressable>
            </Link>
        );
    }
};

export default Stopwatch;
