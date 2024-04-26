import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";
import BottomToolbar from "../../components/bottomToolbar";

const baseScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        position: 'relative',
    },
    baseDataContainer: {
        alignItems: 'center',
        flex: 10,
        marginTop: 80,
    },
    spacer: {
        flex: 1,
    },
});

export default baseScreenStyles;