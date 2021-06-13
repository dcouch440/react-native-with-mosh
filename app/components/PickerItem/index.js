import React from 'react'
import AppText from '../AppText/index'
import styles from './styles';

import {
  TouchableOpacity
} from 'react-native';

export default function PickerItem ({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{ label }</AppText>
    </TouchableOpacity>
  );
}
