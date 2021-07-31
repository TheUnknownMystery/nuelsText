  
import * as React from 'react';
import { StyleSheet } from 'react-native';
import ContactListItem from '../components/ContactListItem';
import users from '../data/Users';

import { View } from '../components/Themed';
import { FlatList } from 'react-native-gesture-handler';


export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
      data={users} 
      renderItem={({ item}) => <ContactListItem user={item} /> }
      keyExtractor={(item) => item.id}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});