import React from 'react'
import { View, Image } from 'react-native'
import AppText from '../AppText'
import styles from './styles'

function ListItem ({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}/>
      <View>
        <AppText style={styles.titleText}>{title}</AppText>
        <AppText style={styles.subText}>{subTitle}</AppText>
      </View>
    </View>
  )
}

export default ListItem;