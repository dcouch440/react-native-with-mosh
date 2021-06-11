import React from 'react'
import { FlatList, View } from 'react-native'
import ListItem from '../../components/ListItem';
import styles from './styles';
import messages from './messages';
import Screen from '../../components/Screen';
import ListItemSeparator from '../../components/ListItemSeparator';

export default function MessagesScreen () {
  return (
    <Screen>
      <FlatList
        // takes the whole array
        data={messages}
        // what prop can be used for key? === id;
        keyExtractor={message => message.id.toString()}
        // render item is the item passing through like map
        renderItem={
          ({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log('Message selected', item)}
              renderRightActions={() => (
                <View style={{
                  backgroundColor: 'red',
                  width: 70
                }}>
                </View>
              )}
            />
          )
        }
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}