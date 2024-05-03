import React from 'react';
import Papa from 'papaparse';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';

import { ENUMS, COLORS } from '../constants';
import stopwatch from '../styles/components/stopwatch';

const loadCSVData = async () => {
    try {
      const response = await fetch('../assets/data/AfternoonFake.csv');
      const text = await response.text();
      const parsed = Papa.parse(text, { header: true });
      console.log(parsed.data);  // You can replace this with setting state or another action
    } catch (error) {
      console.error('Error loading CSV: ', error);
    }
  };