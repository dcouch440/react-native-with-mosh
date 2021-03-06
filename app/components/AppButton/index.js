import React from 'react'
import styles from './styles';
import colors from '../../config/colors';

import {
  Text,
  TouchableOpacity
} from 'react-native';

function AppButton ({ title, onPress, color = 'primary' }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
      <Text style={styles.text}>{ title }</Text>
    </TouchableOpacity>
  );
}

export default AppButton;