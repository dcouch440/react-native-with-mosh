import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../colors';
import styles from './styles';

import {
  View,
  TouchableNativeFeedback
} from 'react-native';

export default function ListItemDeleteAction ({ onPress }) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="trash-can" size={35} color={colors.white} />
      </View>
    </TouchableNativeFeedback>
  );
}
