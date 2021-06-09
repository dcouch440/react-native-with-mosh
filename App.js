import React from 'react';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';

export default function App() {
  const screen = useDimensions().screen;
  console.log(screen);
  return (
    <SafeAreaView style={styles.container}>
      {/* number of lines sets max lines */}
      <View
        style={{
          backgroundColor: 'red',
          height: '50%',
          width: '100%'
        }}
      >
      </View>
    </SafeAreaView>
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
