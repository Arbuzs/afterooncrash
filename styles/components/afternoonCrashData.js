import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const container = {
    width: '90%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: COLORS.primary_2,
    borderRadius: 10,
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
};

const styles = StyleSheet.create({
    container: {
        ...container,
    },
    rectangle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
      },
      text: {
        ...FONT.bold_48,
        color: 'white',
      },
});

export default styles;