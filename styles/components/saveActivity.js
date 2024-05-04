import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
       flex:1,
       marginTop: 80,
       width: '100%',
       
    },  
    section: {
        
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,  // Adds a bottom border
        borderBottomColor: COLORS.mainText_1,
        borderTopColor: COLORS.mainText_1,
        paddingHorizontal: 20,
       
    },
   /*
    section:{ 
     
        borderBottomWidth: 1,  // Adds a bottom border
        borderBottomColor: COLORS.mainText_1,
        borderTopColor: COLORS.mainText_1,
        width: '100%',
        paddingHorizontal: 20,
    
        

    },
    */
    horizontalLine: {
        width: '100%', // Adjust width based on your container size
        height: 1,
        backgroundColor: COLORS.mainText_1,
    },
    verticalLine: {
        height: '100%', // Adjust height based on your container size
        width: 1,
        backgroundColor: COLORS.mainText_1,
        marginHorizontal:10,
    },


    row: {
        minHeight: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        
        margin: 3, // Space between rows
    },
    column: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        borderColor: COLORS.mainText_1,
       
    },
    label1: {
        ...FONT.base_16,
        color: COLORS.mainText_1,
      
    },
    value:{
        ...FONT.bold_30
    },
    intensityContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    intensitySection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 25,

    },
    intensityButton: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderColor: COLORS.white,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    intensityButtonText: {
        ...FONT.base_16,
        color: COLORS.mainText_1,    
        //marginBottom: 5,
    },
    
    intensityHeading: {
        ...FONT.base_16,
        color: COLORS.mainText_1,  
        paddingTop:10,  
        //marginBottom: 5,
    },
    notes:{
        height: 100,
        width: '90%',
        borderWidth: 1,
        borderColor: COLORS.mainText_1,
        borderRadius: 10,
        backgroundColor:'transparent',
        marginBottom: 40,
    },
    input: {
        height: 100,
        paddingHorizontal: 10,
        paddingTop: 5,
        marginBottom: 10,
        textAlignVertical: 'top',
        flexWrap: 'wrap',
    },
    discardText: {
        ...FONT.mainText_1,
        color: COLORS.secondary_2,
        paddingTop: 15,
    },
});

export default styles;