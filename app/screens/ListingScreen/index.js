import React from 'react'
import Screen from '../../components/Screen'
import styles from './styles'
import listings from './listings';
import Card from '../../components/Card';

import {
  FlatList
} from 'react-native'

export default function ListingScreen () {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={
          listing => listing.id.toString()
        }
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}
