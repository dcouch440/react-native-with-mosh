import React from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AppText from '../AppText'
import styles from './styles'
import colors from '../../colors'

import {
  View,
  Image,
  TouchableHighlight
} from 'react-native'

function ListItem ({ title, subTitle, image, onPress, renderRightActions }) {
  return (
    <Swipeable
      renderRightActions={renderRightActions}
    >
      <TouchableHighlight
        underlayColor={colors.lightGrey}
        onPress={onPress}
      >
        <View style={styles.container}>
          <Image style={styles.image} source={image}/>
          <View>
            <AppText style={styles.titleText}>{title}</AppText>
            <AppText style={styles.subText}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

export default ListItem;