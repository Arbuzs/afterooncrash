import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";


const styles = StyleSheet.create({
    outerContainer: {
        width: '100%',
        height: 112,
        position: 'relative',
        marginTop: 20
    },
    innerContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: COLORS.primary_2,
        borderRadius: 30,
        paddingTop: 3,
    },
    buttonContainer: {
        alignItems: 'center',
    },
    recordButtonContainer: {
        marginTop: -48,
    },
    recordImage: {
        width: 90,
        height: 90,
    },
    image: {
        width: 35,
        height: 35,
    },
    text: {
        color: '#fff',
        marginTop: 5,
    },
    recordText: {
        marginTop: -2,
    },
});

export default styles;