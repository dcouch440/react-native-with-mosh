import React from 'react'

import {
  Text,
  StyleSheet,
  Platform
} from 'react-native';

function AppText ({ children, style = {} }) {
  return (
    <Text style={[styles.text, style]}>{ children }</Text>
  )
}
// Platform.select({

// })
const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Avenir'
  }
});

export default AppText
