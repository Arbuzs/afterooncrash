import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import styles from '../styles/components/clock';

const Clock = ({ size = 200, hours = 0, minutes = 0, seconds = 0 }) => {
    const radius = size / 2 - 10;
    const centerX = size / 2;
    const centerY = size / 2;

    const hourAngle = (hours % 12 + minutes / 60) * 30; // 30 degrees per hour
    const minuteAngle = (minutes + seconds / 60) * 6; // 6 degrees per minute
    const secondAngle = seconds * 6; // 6 degrees per second

    const getX = (angle, radius) => centerX + radius * Math.sin(angle * Math.PI / 180);
    const getY = (angle, radius) => centerY - radius * Math.cos(angle * Math.PI / 180);

    return (
        <View style={{ width: size, height: size }}>
            <Svg width={size} height={size}>
                <Circle cx={centerX} cy={centerY} r={radius} fill="transparent" stroke="black" strokeWidth={2} />
                {/* Hour hand */}
                <Line x1={centerX} y1={centerY} x2={getX(hourAngle, radius * 0.5)} y2={getY(hourAngle, radius * 0.5)} stroke="black" strokeWidth={4} strokeLinecap="round" />
                {/* Minute hand */}
                <Line x1={centerX} y1={centerY} x2={getX(minuteAngle, radius * 0.7)} y2={getY(minuteAngle, radius * 0.7)} stroke="black" strokeWidth={3} strokeLinecap="round" />
                {/* Second hand */}
                <Line x1={centerX} y1={centerY} x2={getX(secondAngle, radius * 0.9)} y2={getY(secondAngle, radius * 0.9)} stroke="red" strokeWidth={2} strokeLinecap="round" />
                {/* Center dot */}
                <Circle cx={centerX} cy={centerY} r={4} fill="black" />
            </Svg>
        </View>
    );
};

export default Clock;
