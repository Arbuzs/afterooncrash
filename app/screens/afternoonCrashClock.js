import { View, Text } from 'react-native';

import Header from '../../components/header';
import BottomToolbar from '../../components/bottomToolbar';
import CrashInfoBottomBox from '../../components/crashInfoBottomBox';

import baseScreenStyles from '../../styles/screens/baseScreen';

import { ENUMS } from '../../constants';
import Program from '../model/program';

import Clock from '../../components/clock';
import ClockTimeInterval from '../../components/clockTimeInterval';


export default function AfternoonCrashClock({}) {
    
    var program = Program.getInstance();
    var params = program.getTempParams();

    const dataType = params['afternoonCrashDataType'];

    return (
        <View style={baseScreenStyles.container}>
            <Header title={dataType} />
            {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Clock />
                <ClockTimeInterval />
            </View> */}
            <View style={baseScreenStyles.baseDataContainer}>
                <CrashInfoBottomBox dataType={dataType}/>
            </View>
            <View style={baseScreenStyles.spacer}/>
            <BottomToolbar />
        </View>
    )
}