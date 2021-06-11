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

function ListItem ({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
  return (
    <Swipeable
      renderRightActions={renderRightActions}
    >
      <TouchableHighlight
        underlayColor={colors.lightGrey}
        onPress={onPress}
      >
        <View style={styles.container}>
          { IconComponent }
          { image && <Image style={styles.image} source={image}/> }
          <View style={styles.detailsContainer}>
            <AppText style={styles.titleText}>{title}</AppText>
            { subTitle && <AppText style={styles.subText}>{subTitle}</AppText> }
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

export default ListItem;