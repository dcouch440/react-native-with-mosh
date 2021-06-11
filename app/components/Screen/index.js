import React from 'react';
import styles from './styles';

import {
  SafeAreaView,
  View,
} from 'react-native'

export default function Screen ({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {children}
    </SafeAreaView>
  );
}
