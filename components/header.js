import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/components/header';

export default function Header({ title }) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{title}</Text>
        </View>
    );
}