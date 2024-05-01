import {StyleSheet} from 'react-native';
import { COLORS, FONT,SIZES } from '../../constants';
const styles = StyleSheet.create({
    
    container: {
      position:'absolute',
      bottom: 20,
      width: '100%',
      height: 60,
      flexDirection: 'row',
      justifyContent:'space-around',
      alighItems:'center'
    },
    button: {
      marginBottom: 20,
      width: 82,
      height: 82,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 60, // half of width/height to make it a circle
      backgroundColor: COLORS.primary_2,
    },
    resumeButton: {
      backgroundColor: COLORS.lightShade_2,
      stroke: COLORS.mainText_1,
      borderWidth: 1, // This is equivalent to 'stroke-width' in CSS for SVGs
      borderColor: COLORS.mainText_1,
    },
    resumeText: {
      ...FONT.bold_16,
      color: COLORS.mainText_1,
    },
    buttonText: {
      ...FONT.bold_16,
      color: COLORS.white,
    },
    pauseImage: {
        width: 24,
        height: 24
    },
    timer: {
      marginTop: -250,
      ...FONT.title_1,
      color: COLORS.mainText_1,
      textAlign: 'center',
    }
  });
  
  export default styles;