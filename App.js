import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Platform
} from 'react-native';

export default function App () {
  return (
    <SafeAreaView style={styles.test}>
      <ViewImageScreen />
    </SafeAreaView>
    // <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  test: {
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
