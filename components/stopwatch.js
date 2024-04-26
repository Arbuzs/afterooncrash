// Stopwatch.js
import React from "react";
import { Pressable, Text, Image } from 'react-native';
import {icons} from '../constants';
import styles from "../styles/components/stopWatch";

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
    
     } else {
    return (
        <Pressable style={styles.button} onPress={handleTimer}>
            <Text style={styles.buttonText}>{type}</Text>
        </Pressable>
    );
}
};

export default Stopwatch;
