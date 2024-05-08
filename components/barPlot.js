import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Rect, Text, G } from 'react-native-svg';
import { COLORS, FONT } from '../constants';


const BarPlot = ({ type, barData }) => {
    switch (type) {
        case "Weekly":
            const barHeight = 40;
            const totalHeight = barHeight * 7; // Fixed total height for 7 bars
            return (
                <View style={styles.container}>
                    <Svg width="100%" height={totalHeight}>
                        {barData.map((data, index) => {
                            if (data) {
                                const x = 0;
                                const y = index * barHeight;
                                const width = '100%';
                                const height = barHeight;
                                return (
                                    <G key={index}>
                                        <Rect
                                            x={x}
                                            y={y}
                                            width={width}
                                            height={height}
                                            fill={COLORS.primary_2} // Background color of the bar
                                        />
                                        <Rect
                                            x={(data.startHour * 60 + data.startMinute) / 1440 * 100 + '%'}
                                            y={y}
                                            width={(data.endHour * 60 + data.endMinute - data.startHour * 60 - data.startMinute) / 1440 * 100 + '%'}
                                            height={height}
                                            fill={data.scoreColor}
                                        />
                                        <Text style={styles.text} x="10" y={y + barHeight / 2 + 5} fill="black">{data.weekday}</Text>
                                    </G>
                                );
                            }
                            return (
                                <G key={index}>
                                    <Rect
                                        x={0}
                                        y={index * barHeight}
                                        width="100%"
                                        height={barHeight}
                                        fill={COLORS.primary_2} // Background color of the empty bar
                                    />
                                </G>
                            );
                        })}
                    </Svg>
                </View>
            );
    }
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginBottom: 20,
    },
    text: {
        ...FONT.base_16,
    },
    rect: {
        borderRadius: 10,
    }
});

export default BarPlot;
