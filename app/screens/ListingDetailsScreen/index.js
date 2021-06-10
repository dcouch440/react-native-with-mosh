import React from 'react'
import styles from './styles';

import {
  View,
  Image
} from 'react-native'
import AppText from '../../components/AppText';
import ListItem from '../../components/ListItem';

export default function ListingDetailsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Image style={styles.image} source={require('../../assets/redjacket.jpg')}/>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket For Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
      <ListItem
        image={require('../../assets/skull-cross.png')}
        title='Carry Armor'
        subTitle='hello world'
      />
    </View>
  );
}
