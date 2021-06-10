import React from 'react'
import styles from './styles';
import { View, Image } from 'react-native'
import AppText from '../AppText';

function Card ({ image, title, subTitle }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText>{title}</AppText>
        <AppText>{subTitle}</AppText>
      </View>
    </View>
  );
}

export default Card;