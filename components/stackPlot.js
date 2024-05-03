import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Papa from 'papaparse';
import { StackedBarChart } from 'react-native-chart-kit';
import RNFS from 'react-native-fs';
import { ENUMS, COLORS } from '../constants';
import stopwatch from '../styles/components/stopwatch';


const loadCSVData = async () => {
  try {
      const filePath = RNFS.MainBundlePath + '../assets/data/AfternoonFake.csv'; // Adjust the path as needed
      const contents = await RNFS.readFile(filePath, 'utf8');
      const parsed = Papa.parse(contents, { header: true });
      return parsed.data;
  } catch (error) {
      console.error('Error reading CSV file:', error);
      return [];
  }
};

const processDataForChart = (data) => {
    const aggregatedData = data.reduce((acc, item) => {
        const monthIndex = new Date(item['Crash Start']).getMonth();
        if (!acc[monthIndex]) {
            acc[monthIndex] = {
                duration: 0,
                count: 0,
                score: item['Crash Score']
            };
        }
        acc[monthIndex].duration += parseInt(item['Crash Duration'], 10);
        acc[monthIndex].count += 1;
        return acc;
    }, {});

    return {
        labels: Object.keys(aggregatedData).map(month => `Month ${parseInt(month) + 1}`),
        data: Object.values(aggregatedData).map(item => [item.duration]),
        barColors: Object.values(aggregatedData).map(item => {
            switch(item.score) {
                case '1': return '#FF6347';
                case '2': return '#FFD700';
                case '3': return '#ADFF2F';
                case '4': return '#4682B4';
                case '5': return '#6A5ACD';
                default: return '#000';
            }
        })
    };
};

export default function Stackplot() {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await loadCSVData();
            if (data && data.length > 0) {
                const processedData = processDataForChart(data);
                setChartData(processedData);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={stopwatch.container}>
            {chartData ? (
                <StackedBarChart
                    data={chartData}
                    width={350}
                    height={220}
                    chartConfig={{
                        backgroundColor: '#1cc910',
                        backgroundGradientFrom: '#eff3ff',
                        backgroundGradientTo: '#efefef',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            ) : (
                <Text>Loading chart data...</Text>
            )}
        </View>
    );
}
