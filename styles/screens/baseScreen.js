import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const baseScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        position: 'relative',
    },
    baseDataContainer: {
        marginTop: 80,
    }
});

export default baseScreenStyles;