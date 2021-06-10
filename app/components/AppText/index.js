import React from 'react'
import styles from './styles';

import {
  Text
} from 'react-native';

function AppText ({ children }) {
  return (
    <Text style={styles.text}>{ children }</Text>
  )
}

export default AppText