import { View, Text } from 'react-native';

import Header from '../../components/header';
import BottomToolbar from '../../components/bottomToolbar';

import baseScreenStyles from '../../styles/screens/baseScreen';
import AfternoonCrashData from '../../components/afternoonCrashData';

import { ENUMS } from '../../constants';
import Program from '../model/program';


export default function AfternoonCrashScreen({}) {
    
    var program = Program.getInstance();
    var params = program.getTempParams();
    console.log(params);

    const dataType = params['afternoonCrashDataType'];

    return (
        <View style={baseScreenStyles.container}>
            <Header title={dataType} />
            <View style={baseScreenStyles.baseDataContainer}>
                <AfternoonCrashData dataType={dataType}/>
            </View>
            <View style={baseScreenStyles.spacer}/>
            <BottomToolbar />
        </View>
    )
}