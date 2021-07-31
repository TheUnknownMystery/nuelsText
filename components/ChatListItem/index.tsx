
import React from "react";
import moment from "moment";
import { View, 
Text, 
Image, 
TouchableWithoutFeedback 
} from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";

import { useNavigation } from '@react-navigation/native';

export type ChatListItemProps = {
    ChatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { ChatRoom } = props;

  const user = ChatRoom.users[1];

   const navigation = useNavigation();

    const onClick = () => {
        navigation.navigate('ChatRoom',
         {id: ChatRoom.id,  
         name: user.name
         }
      )
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
          <View style={styles.container}>
              <View style={styles.leftContainer}>
               <Image source={{ uri: user.imageUri }} style={styles.avarta} />

            <View style={styles.midContainer}>
               <Text style={styles.username}>{user.name}</Text>
               <Text numberOfLine={2} style={styles.lastMessage}>{ChatRoom.lastMessage.content}</Text>
            </View>

            </View>
               <Text style={styles.time}>
               <Text>{moment(ChatRoom.lastMessage.createdAt).fromNow()}</Text>
              </Text> 
          </View>

        </TouchableWithoutFeedback>
    )
};

export default ChatListItem;