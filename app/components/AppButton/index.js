import React from 'react'
import styles from './styles';

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

function AppButton ({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{ title }</Text>
    </TouchableOpacity>
  );
}

export default AppButton;