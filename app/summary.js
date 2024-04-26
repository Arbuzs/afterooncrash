import { View, Text } from 'react-native';

import Header from '../components/header';
import TrackToolbar from '../components/trackToolbar';
import BottomToolbar from '../components/bottomToolbar';

import { ENUMS } from '../constants';

import styles from '../styles/screens/summary';
import baseScreenStyles from '../styles/screens/baseScreen';


export default function Summary() {

    return (
        <View style={baseScreenStyles.container}>
            <Header title="Summary" />
            <View style={baseScreenStyles.baseDataContainer}>
                <TrackToolbar type={ENUMS.HEART_RATE_BUTTON} />
                <TrackToolbar type={ENUMS.SLEEP_BUTTON} />
                <TrackToolbar type={ENUMS.AFTERNOON_CRASH_BUTTON} />
            </View>
            <BottomToolbar />
        </View>
    )
}
