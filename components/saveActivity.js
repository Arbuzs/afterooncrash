import React from 'react';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';

import { ENUMS, COLORS } from '../constants';
import styles from '../styles/components/saveActivity';
import baseScreenStyles from '../styles/screens/baseScreen';
import stopwatch from '../styles/components/stopwatch';


export default function SaveActivity({dataType}) {
    return (
        <View style={styles.container}>
        <View style= {styles.horizontalLine}/>
            {/*Time and date Section */}
           <View style= {styles.section}>
             
                    <View style= {styles.row}>
                        <View style= {styles.column}>
                            <Text style={styles.label1}>Time</Text>
                            <Text style={styles.value}>01:25:35</Text>
                        </View>
                        <View style={styles.verticalLine}/>
                        <View style= {styles.column}>
                            <Text style={styles.label1}>Date</Text>
                            <Text style={styles.value}>25/06</Text>
                        </View>
                    </View>
                </View>     
            {/*Crash Time Section */}
        
        <View style= {styles.section}>
             
             <View style= {styles.row}>
                 <View style= {styles.column}>
                     <Text style={styles.label1}>Crash Started</Text>
                     <Text style={styles.value}>12:30</Text>
                 </View>
                 <View style={styles.verticalLine}/>
                 <View style= {styles.column}>
                     <Text style={styles.label1}>Crash Ended</Text>
                     <Text style={styles.value}>14:10</Text>
                 </View>
             </View>
         </View>
         
        {/*Crash intensity Section */}
        <View style = {styles.row}>
            <Text style={styles.intensityHeading}>Crash Intensity</Text>
           </View>
        <View style = {styles.intensitySection}>
            {/*Button 1 */}
            
            <View style={styles.row}>
                <View style={styles.intensityContainer}>
                    <Pressable style={[styles.intensityButton, {backgroundColor:COLORS.gradient_1}]}>
                        <Text style={styles.intensityButtonText}>1</Text>
                    </Pressable>
                </View>
            </View>
           {/*Button 2 */}
            <View style={styles.row}>
                <View style={styles.intensityContainer}>
                    <Pressable style={[styles.intensityButton, {backgroundColor:COLORS.gradient_2}]}>
                        <Text style={styles.intensityText}>2</Text>
                    </Pressable>
                </View>
            </View>
            {/*Button 3*/}
            <View style={styles.row}>
                <View style={styles.intensityContainer}>
                    <Pressable style={[styles.intensityButton, {backgroundColor:COLORS.gradient_3}]}>
                        <Text style={styles.intensityText}>3</Text>
                    </Pressable>
                </View>
            </View>
            {/*Button 4 */}
            <View style={styles.row}>
                <View style={styles.intensityContainer}>
                    <Pressable style={[styles.intensityButton, {backgroundColor:COLORS.gradient_4}]}>
                        <Text style={styles.intensityText}>4</Text>
                    </Pressable>
                </View>
            </View>
            {/*Button 5 */}
            <View style={styles.row}>
                    <View style={styles.intensityContainer}>
                        <Pressable style={[styles.intensityButton, {backgroundColor:COLORS.gradient_5}]}>
                            <Text style={styles.intensityText}>5</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        <View style = {styles.horizontalLine}/>
        <View style = {styles.row}>
            <Text style={styles.intensityHeading}>Notes</Text>
           
        </View>
        <View style = {styles.row}>
            <View style={styles.notes}>

            </View>
        </View>
        <View style = {styles.row}>
            <Pressable style={[stopwatch.button,stopwatch.resumeButton]}>
                <Text style={stopwatch.resumeText}>Resume</Text>
            </Pressable>
            <Pressable style={stopwatch.button}>
                <Text style={stopwatch.buttonText}>Save</Text>
            </Pressable>
        </View>
        <View style = {styles.row}>
            <Text style={styles.discardText}>Discard</Text>
        </View>
    </View>
   
    );
};
