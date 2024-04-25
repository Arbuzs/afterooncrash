
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Stopwatch from '../components/stopwatch';
import styles from '../styles/components/header';
import styles2 from '../styles/components/stopwatch';

export default function Record() {
    const [time, setTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [timerStatus, setTimerStatus] = useState('idle'); // 'idle', 'running', 'paused'

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
        <View style={styles.container}>
            <Text style={styles.heading}>Record</Text>
            <Text style={styles2.timer}>{formatTime()}</Text>
            <View style={styles2.container}>
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
                        <Stopwatch type="Finish" handleTimer={stopTimer} time={formatTime()} />
                        <Stopwatch type="Resume" handleTimer={startTimer} time={formatTime()} />
                    </>
                )}
            </View>
        </View>
    );
}
