import React from 'react'

import {
  Text,
  StyleSheet,
  Platform
} from 'react-native';

function AppText ({ children }) {
  return (
    <Text style={styles.text}>{ children }</Text>
  )
}
// Platform.select({

// })
const styles = StyleSheet.create({
  text: {
    color: 'tomato',
    fontSize: 20,
    fontFamily: 'Avenir'
  }
});

export default AppText