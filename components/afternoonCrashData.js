import React, {useState} from 'react';
import { Alert, Modal, StyleSheet, View, Image, Text, Pressable } from 'react-native';
import { format } from 'date-fns';

import { ENUMS, COLORS } from '../constants';
import styles from '../styles/components/afternoonCrashData';
import { Calendar } from 'react-native-calendars';
import Program from '../app/model/program';
import { useNavigation } from '@react-navigation/native';


export default function AfternoonCrashData({dataType}) {
    const navigation = useNavigation(); // Get navigation object
    //TODO: Implement graph library

    switch (dataType) {

        case ENUMS.CRASH_SCORE_DATA:
            const rectangles = [
                { level: 1, color: COLORS.gradient_1 },
                { level: 2, color: COLORS.gradient_2 },
                { level: 3, color: COLORS.gradient_3 },
                { level: 4, color: COLORS.gradient_4 },
                { level: 5, color: COLORS.gradient_5 },
              ];

            return (
                <View style={styles.container}>
                    {rectangles.map(({ level, color }, index) => (
                        <View key={index} style={[styles.rectangle, { backgroundColor: color, marginTop: index !== 0 ? 10 : 0 }]}>
                            <Text style={styles.text}>Level {level}</Text>
                        </View>
                    ))}
                </View>
            );


        case ENUMS.MONTH_CALENDAR_DATA:
            const [modalVisible, setModalVisible] = useState(false);
            const [selectedDay, setSelectedDay] = useState(null);

            const program = Program.getInstance();
            const user = program.getCurrentUser()
            const days = user.days
            const markedDates = {};
            var day;

            const handleDayPress = (date) => {
                day = user.getSpecificDay(new Date(date['dateString']));
                if (day != null) {
                    console.log("Day: " + day.dateString + ":")
                    console.log("Crash Start: " + day.afternoonCrash.startTimeStringShort + " - Crash End: " + day.afternoonCrash.endTimeStringShort + " - Crash Duration: " + day.afternoonCrash.durationStringShort + " - Crash Score: " + day.afternoonCrash.crashScore);
                    console.log("Sleep Start: " + day.sleep.startTimeStringShort + " - Sleep End: " + day.sleep.endTimeStringShort + " - Sleep Duration: " + day.sleep.durationStringShort + " - Sleep Score: " + day.sleep.sleepScore);
                    console.log("\n");
                    setSelectedDay(day);
                    setModalVisible(true);
                }
            };

            for (let i = 0; i < days.length; i++) {
                const date = format(days[i].date, 'yyyy-MM-dd');
                const crashColor = days[i].getAfternoonCrash().getCrashColor();

                markedDates[date] = {
                    selected: true,
                    selectedColor: crashColor,
                    selectedTextColor: COLORS.white,
                };
            }

            return (
                <View style={styles.containerCalendar}>
                    <Calendar 
                        style={styles.calendar}
                        hideExtraDays={true}
                        markedDates={markedDates}
                        onDayPress={handleDayPress}
                        theme={{
                            monthTextColor: COLORS.white,
                            textMonthFontSize: 20,
                            calendarBackground: '#00000000',
                            textSectionTitleColor: COLORS.white,
                            textDayStyle: styles.textDay,
                        }} 
                    />
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>{selectedDay ? (
                                <>
                                    Day: {selectedDay.dateString} {"\n\n"}
                                    Crash Start: {selectedDay.afternoonCrash.startTimeStringShort} - Crash End: {selectedDay.afternoonCrash.endTimeStringShort} - Crash Duration: {selectedDay.afternoonCrash.durationStringShort} - Crash Score: {selectedDay.afternoonCrash.crashScore} {"\n\n"}
                                    Sleep Start: {selectedDay.sleep.startTimeStringShort} - Sleep End: {selectedDay.sleep.endTimeStringShort} - Sleep Duration: {selectedDay.sleep.durationStringShort} - Sleep Score: {selectedDay.sleep.sleepScore} {"\n\n"}
                                </>
                            ) : (
                                'Loading...'
                            )}</Text>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Close</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </View>
            );


        case ENUMS.MONTH_OVERVIEW_DURATION_DATA:
            return (
                <View style={styles.container}></View>
            );


        // case ENUMS.WEAK_OVERVIEW_DATA:
        //     return (
        //         <View style={styles.container}></View>
        //     );
        

        // case ENUMS.MONTH_OVERVIEW_PERCENTAGE_DATA:
        //     return (
        //         <View style={styles.container}></View>
        //     );

    }
}
