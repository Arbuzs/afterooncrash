import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    heading: {
        color: '#000',
        ...FONT.bold_30,
        position: 'absolute',
        top: 20,
        left: 20,
    },
});

export default styles;