import { Platform, StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";


const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: '30%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignSelf: 'center',
        backgroundColor: COLORS.primary_2,
        borderRadius: 10,
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    scoresContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
    },
    weekDayScore: {
        flex: 1,
        height: '100%',
        aspectRatio: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2000,
        marginLeft: 2,
        marginRight: 2,
    },
    text: {
        ...FONT.bold_20,
        color: COLORS.white,
        textAlign: 'center',
    },
    crashTimesContainer: {
        flex: 2,
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
    },
    crashTimes: {
        flex: 1,
        height: '80%',
        alignSelf: 'center',
        alignItems: 'center',
        marginLeft: 2,
        marginRight: 2,
        marginTop: 5,
    },
    timeLine: {
        flex: 1,
        width: 2,
        backgroundColor: COLORS.white,
    },
    timeText: {
        ...FONT.bold_16,
        color: COLORS.white,
        textAlign: 'center',
    }
});

export default styles;