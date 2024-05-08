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
    containerCalendar: {
      ...container,
      marginTop: '25%',
      height: '75%',
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
      color: COLORS.white,
    },
    calendar: {
      width: '95%',
      height: '100%',
      alignSelf: 'center',
      verticalAlign: 'middle',
      borderRadius: 10,
      backgroundColor: '#00000000'
    },
    textDay: {
      width: '100%',
      height: '100%',
      textAlign: 'center',
      color: COLORS.white,
      ...FONT.base_20,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonClose: {
      backgroundColor: COLORS.primary_2,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      ...FONT.base_16,
      marginBottom: 15,
      textAlign: 'center',
    },
});

export default styles;