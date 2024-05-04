
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import Stopwatch from '../../components/stopwatch';
import styles from '../../styles/components/header';
import styles3 from '../../styles/components/stopwatch'; 
import styles2 from '../../styles/screens/record';

import Program from '../model/program';

import { differenceInSeconds, parse } from 'date-fns';

export default function Record() {
    var seconds = 0;
    var timeStatus = 'idle';

    const checkPreviousTime = () => {
        const program = Program.getInstance();
        params = program.getTempParams();
        if (params != null) {
            if (params['recordedTimeResume']) {
                const timeString = params['recordedTimeResume'];
                const parsedTime = parse(timeString, 'HH:mm:ss', new Date());
                seconds = differenceInSeconds(parsedTime, new Date().setHours(0, 0, 0, 0));
                timeStatus = 'paused';
            }
        }
    }

    checkPreviousTime();
    const [time, setTime] = useState(seconds);
 
    const [intervalId, setIntervalId] = useState(null);
    const [timerStatus, setTimerStatus] = useState(timeStatus); // 'idle', 'running', 'paused'

    const startTimer = () => {
        if (!intervalId) {
            const id = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
            setIntervalId(id);
            setTimerStatus('running');
        }
    };

    const stopTimer = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
            setTimerStatus('paused');
        }
    };

    const resetTimer = () => {
        stopTimer();
        setTime(0);
        setTimerStatus('idle');
    };
    // const finishAndSave = () => {
    //     console.log('finishAndSave');
        
    //     stopTimer();  // Stop the timer if running
    //     try {
    //         navigation.navigate('SaveActivity', {recordedTime: formatTime()});
    //         console.log('Navigation object:', navigation);

    //     } catch (error) {
    //         console.error('Failed to navigate:', error);
    //     }
    //      // Navigate and pass time
    // };

    useEffect(() => {
        return () => intervalId && clearInterval(intervalId);
    }, [intervalId]);

    const formatTime = () => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <View style={styles2.content}>
            <Text style={styles.heading}>Record</Text>
            <Text style={styles3.timer}>{formatTime()}</Text>
            <View style={styles3.container}>
                {timerStatus === 'idle' && (
                    <>
                        <Stopwatch type="Start" handleTimer={startTimer} time={formatTime()} />
            
                    </>
                )}
                {timerStatus === 'running' && (
                    <>
                        <Stopwatch type="Pause" handleTimer={stopTimer} time={formatTime()} />
                    </>
                )}
                {timerStatus === 'paused' && (
                    <>
                        <Stopwatch type="Resume" handleTimer={startTimer} time={formatTime()} />
                        <Stopwatch type="Finish" time={formatTime()} />
                    </>
                )}
            </View>
        </View>
    );
    

}
