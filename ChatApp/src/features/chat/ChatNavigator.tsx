import { NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootParamList} from '../../navigation/AppNavigator'
import { ChatRoom, Message, RoomList } from './components';

type ChatRoomProps = NativeStackScreenProps<RootParamList, 'ChatRoom'>;

export const ChatRoomScreen = ({ navigation, route }: ChatRoomProps) => {
  return <ChatRoom navigation={navigation}/>;
}

type MessageProps = NativeStackScreenProps<RootParamList, 'Message'>;

export const MessageScreen = ({ navigation, route }: MessageProps) => {
  return <Message navigation={navigation}/>;
}
type RoomListProps = NativeStackScreenProps<RootParamList, 'RoomList'>;

export const RoomListScreen = ({ navigation, route }: RoomListProps) => {
  return <RoomList navigation={navigation}/>;
}