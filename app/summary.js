import { View, Text } from 'react-native';

import TrackToolbar from '../components/trackToolbar';
import BottomToolbar from '../components/bottomToolbar';

import styles from '../styles/summary';


export default function Summary() {

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Summary</Text>
            <View style={styles.content}>
                <TrackToolbar type={"Heart Rate"} />
                <TrackToolbar type={"Sleep"} />
                <TrackToolbar type={"Afternoon Crash"} />
            </View>
            <BottomToolbar />
        </View>
    )
}
