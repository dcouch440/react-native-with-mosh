import React from 'react'
import styles from './styles';

import {
  Image,
  View
} from 'react-native';

export default function ViewImageScreen () {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../assets/circleguy.jpg')}
      />
    </View>
  );
}
