import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultCategories from './categories';
import PickerItem from '../PickerItem';
import styles from './styles';
import AppText from '../AppText';
import colors from '../../config/colors';
import defaultStyles from '../../config/defaultStyles';

import {
  View,
  Modal,
  TouchableWithoutFeedback,
  Button,
  FlatList
} from 'react-native';

export default function AppPicker ({ icon, placeholder, items = defaultCategories }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {
            icon && <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          }
          <AppText style={styles.text}>{ placeholder }</AppText>
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={defaultStyles.colors.medium}
            styles={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Button title='close' onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={item => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => console.log(item)}
            />
          )}
        />
      </Modal>
    </>
  );
}
