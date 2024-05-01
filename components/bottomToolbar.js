import { Link } from 'expo-router';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';

import { icons } from '../constants';
import styles from '../styles/components/bottomToolbar';


export default function BottomToolbar() {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>

                {/* Home */}
                <Link href="/screens/summary" style={styles.buttonContainer} asChild>
                    <Pressable onPress={() => console.log('Home pressed')}>
                        <Image source={icons.homeButton} style={styles.image} />
                        <Text style={styles.text}>Home</Text>
                    </Pressable>
                </Link>

                {/* Record */}
                <Link href="/screens/record" style={[styles.buttonContainer, styles.recordButtonContainer]} asChild>
                    <Pressable onPress={() => console.log('Record pressed')}>
                        <Image source={icons.recordButton} style={[styles.image, styles.recordImage]} />
                        <Text style={[styles.text, styles.recordText]}>Record</Text>
                    </Pressable>
                </Link>
                {/* Settings */}
                <Pressable style={styles.buttonContainer} onPress={() => console.log('Settings pressed')}>
                    <Image source={icons.settingsButton} style={styles.image} />
                    <Text style={styles.text}>Settings</Text>
                </Pressable>

            </View>
        </View>
    );
}
