import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const container = {
    width: '90%',
    backgroundColor: COLORS.primary_2,
    borderRadius: 10,
    marginTop: 20,
};

const text = {
    position: 'absolute',
    top: 5,
    left: 8,
    color: COLORS.white,
    ...FONT.bold_16,
};

const styles = StyleSheet.create({
    container: {
        ...container,
    },
    heartRateContainer: {
        ...container,
        flex: 0.2,
    },
    sleepContainer: {
        ...container,
        flex: 0.2,
    },
    afternoonCrashContainer: {
        ...container,
        flex: 1,
    },
    text: {
        ...text,
    },
    arrow: {
        width: 8,
        height: 10,
        position: 'absolute',
        top: 10,
        right:10,
    },
    periodContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 40,
        alignSelf: 'center',
      },
      period: {
        flex: 1,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      periodText: {
        ...FONT.bold_16,
        color: COLORS.black,
      },
      firstPeriod: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    lastPeriod: {
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    graphContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 30,
        borderRadius: 10,
    }
});

export default styles;