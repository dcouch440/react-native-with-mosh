import React from 'react'
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import {
  Image,
  View
} from 'react-native';

export default function ViewImageScreen () {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' color='white' size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name='trash-can-outline' color='white' size={35} />
      </View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../assets/circleguy.jpg')}
      />
    </View>
  );
}
