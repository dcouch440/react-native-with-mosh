import React from 'react'
import menuItems from './menu';
import Screen from '../../components/Screen';
import ListItem from '../../components/ListItem';
import Icon from '../../components/Icon';
import styles from './styles';
import ListItemSeparator from '../../components/ListItemSeparator';

import {
  View,
  FlatList
} from 'react-native'


export default function AccountScreen () {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='David Couch'
          subTitle='programmingWithDavid@notReal.com'
          image={require('../../assets/skull-cross.png')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.id.toString()}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={ ({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
              }
            />
          )}
        />
      </View>
      <ListItem
        title='Log Out'
        IconComponent={
          <Icon
            name='logout'
            backgroundColor='#ffe66d'
          />
        }
      />
    </Screen>
  );
}
