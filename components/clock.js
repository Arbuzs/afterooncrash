// Clock.js
import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Text } from 'react-native-svg';

const Clock = () => {
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const hourMarkers = [];

  for (let hour = 1; hour <= 12; hour++) {
    const angle = ((hour - 3) * 30 * Math.PI) / 180;
    const x = radius + radius * Math.cos(angle);
    const y = radius + radius * Math.sin(angle);

    hourMarkers.push(
      <Text
        key={hour}
        x={x}
        y={y}
        fill="black"
        fontSize="12"
        textAnchor="middle"
        alignmentBaseline="central">
        {hour}
      </Text>
    );
  }

  return (
    <View>
      <Svg width={radius * 2} height={radius * 2}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius}
          fill="none"
          stroke="black"
          strokeWidth={2}
        />
        {hourMarkers}
      </Svg>
    </View>
  );
};

export default Clock;
