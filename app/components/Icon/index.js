import React from 'react'
import styles from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import {
  View
} from 'react-native'

export default function Icon ({
  name,
  size = 40,
  backgroundColor = '#000',
  iconColor = '#fff'
}) {
  return (
    <View style={styles.attr({ size, backgroundColor })}>
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.8} />
    </View>
  );
}
