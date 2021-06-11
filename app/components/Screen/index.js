import React from 'react';
import styles from './styles';

import {
  SafeAreaView,
} from 'react-native'

export default function Screen ({ children }) {
  return (
    <SafeAreaView style={styles.screen}>
      {children}
    </SafeAreaView>
  );
}
