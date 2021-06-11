import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import ListItem from '../../components/ListItem';
import styles from './styles';
import initialMessages from './messages';
import Screen from '../../components/Screen';
import ListItemSeparator from '../../components/ListItemSeparator';
import ListItemDeleteAction from '../../components/ListItemDeleteAction';

export default function MessagesScreen () {
  const [messages, setMessage] = useState([...initialMessages]);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    // Delete the message from messages Array
    setMessage(messages.filter(m => m.id !== message.id))
  }

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
              renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
            />
          )
        }
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={
          () => setMessage([...initialMessages])
        }
      />
    </Screen>
  );
}