import { NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootParamList, Stack} from '../../navigation/AppNavigator'
import { ChatRoom, Message } from './components';
import { RoomList } from '../room/components';
import { COLORS } from '../../common/constants/theme';

export type ChatRoomProps = NativeStackScreenProps<RootParamList, 'ChatRoom'>;

export const ChatRoomComponent = ({ navigation, route }: ChatRoomProps) => {
  return <ChatRoom navigation={navigation} route={route}/>;
}

export type MessageProps = NativeStackScreenProps<RootParamList, 'Message'>;

export const MessageComponent = ({ navigation, route }: MessageProps) => {
  return <Message navigation={navigation} route={route}/>;
}
export type RoomListProps = NativeStackScreenProps<RootParamList, 'RoomList'>;


// Stack Navigators
export const MessageScreens = () => {
  return(
  <Stack.Navigator >
    <Stack.Screen name="Message" component={MessageComponent} 
          options={({ navigation: { navigate } }) => ({
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: COLORS.primary
            },
          })}
    />
    <Stack.Screen name="ChatRoom" component={ChatRoomComponent} />
  </Stack.Navigator>
  );
};
