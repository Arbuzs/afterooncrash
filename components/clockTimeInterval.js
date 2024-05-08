// TimeInterval.js
import React from 'react';
import Svg, { Circle, Rect } from 'react-native-svg';

const ClockTimeInterval = () => {
  const radius = 100;
  const startAngle = (30 * Math.PI) / 180; // Start angle (6 o'clock)
  const endAngle = (120 * Math.PI) / 180; // End angle (4 o'clock)

  return (
    <Svg width={radius * 2} height={radius * 2}>
      <Circle
        cx={radius}
        cy={radius}
        r={radius}
        fill="none"
        stroke="gray"
        strokeWidth={20}
      />
      <Rect
        x={radius}
        y={0}
        width={radius}
        height={radius * 2}
        fill="lightgray"
        rotation={(180 * startAngle) / Math.PI}
        origin={`${radius},${radius}`}
        transform={`rotate(${(180 * (endAngle - startAngle)) / Math.PI},${radius},${radius})`}
      />
    </Svg>
  );
};

export default ClockTimeInterval;
