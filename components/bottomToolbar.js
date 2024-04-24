import React from 'react';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';

import { icons } from '../constants';
import styles from '../styles/bottomToolbar';


export default function BottomToolbar() {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>

                {/* Home */}
                <Pressable style={styles.buttonContainer} onPress={() => console.log('Home pressed')}>
                    <Image source={icons.homeButton} style={styles.image} />
                    <Text style={styles.text}>Home</Text>
                </Pressable>

                {/* Record */}
                <Pressable style={[styles.buttonContainer, styles.recordButtonContainer]} onPress={() => console.log('Record pressed')}>
                    <Image source={icons.recordButton} style={[styles.image, styles.recordImage]} />
                    <Text style={[styles.text, styles.recordText]}>Record</Text>
                </Pressable>

                {/* Settings */}
                <Pressable style={styles.buttonContainer} onPress={() => console.log('Settings pressed')}>
                    <Image source={icons.settingsButton} style={styles.image} />
                    <Text style={styles.text}>Settings</Text>
                </Pressable>

            </View>
        </View>
    );
}
