import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";

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
        height: '12%',
    },
    sleepContainer: {
        ...container,
        height: '12%',
    },
    afternoonCrashContainer: {
        ...container,
        height: '60%',
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
    }
});

export default styles;