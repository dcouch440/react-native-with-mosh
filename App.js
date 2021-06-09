import React from 'react';
import { useDimensions } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';

import {
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App () {
  return (
    <ViewImageScreen />
    // <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
