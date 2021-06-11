import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles';

import { View, TextInput } from 'react-native'
import colors from '../../config/colors';
import defaultStyles from '../../config/defaultStyles';

export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      { icon && <MaterialCommunityIcons name={icon}  size={20} color={colors.medium} style={styles.icon}/> }
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}
