import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Platform,
  Text
} from 'react-native';

export default function App () {
  return (
    <SafeAreaView style={styles.test}>
      {/* <View style={[styles.blueCircle]} /> */}
      <Text style={styles.textExample}>I love React Native</Text>
      <AppText>YabaDatadsfg</AppText>
    </SafeAreaView>
    // <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  textExample: {
    fontSize: 30,
    fontWeight: '600',
    fontStyle: 'italic',
    color: 'tomato',
    textTransform: 'capitalize',
    textDecorationLine: 'line-through',
    textAlign: 'center',
    lineHeight: 20
  },
  shadowExample: {
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: .5,
    shadowRadius: 10,
    // elevation is your only option for android
    elevation: 4
  },
  test: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  blueCircle: {
    backgroundColor: 'dodgerblue',
    height: 100,
    width: 100,
    borderWidth: 10,
    borderColor: 10,
    borderRadius: 50,
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
