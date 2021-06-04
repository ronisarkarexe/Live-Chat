import React, { useLayoutEffect,useState, useCallback, useEffect  } from 'react'
import { View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { auth } from '../firebase';
import { TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat'

const ChatScreen = ({navigation}) => {

   const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

   useLayoutEffect(() => {
      navigation.setOptions({
         headerLeft: () => (
            <View style={{marginLeft: 15}}>
               <Avatar
               rounded
               source={{
                  uri: auth?.currentUser?.photoURL
               }}
               >
                  
               </Avatar>
            </View>
         ),


         headerRight: () => (
            <TouchableOpacity style={{
               marginRight: 30
            }
            }
            onPress={signOut}
            >
            <AntDesign name="logout" size={24} color="black" />
            </TouchableOpacity>
         )
      })
   }, [])

   const signOut = () => {
      auth.signOut().then(() => {
         // Sign-out successful.
         navigation.replace('Login')
       }).catch((error) => {
         // An error happened.
       });
   }

   return (
      <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
   )
}

export default ChatScreen
