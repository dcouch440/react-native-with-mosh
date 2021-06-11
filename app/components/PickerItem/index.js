import React from 'react'
import AppText from '../AppText/index'

import {
  TouchableOpacity
} from 'react-native';

export default function PickerItem ({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText>{ label }</AppText>
    </TouchableOpacity>
  );
}
