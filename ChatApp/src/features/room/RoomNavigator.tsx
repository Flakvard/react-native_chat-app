import { NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootParamList} from '../../navigation/AppNavigator'
import { ChatRoom, Message } from '../chat/components';
import { RoomList } from '../room/components';
import Profile from './components/Profile';

export type ChatRoomProps = NativeStackScreenProps<RootParamList, 'ChatRoom'>;

export const ChatRoomScreen = ({ navigation, route }: ChatRoomProps) => {
  return <ChatRoom navigation={navigation} route={route}/>;
}

export type MessageProps = NativeStackScreenProps<RootParamList, 'Message'>;

export const MessageScreen = ({ navigation, route }: MessageProps) => {
  return <Message navigation={navigation} route={route}/>;
}


export type RoomListProps = NativeStackScreenProps<RootParamList, 'RoomList'>;

export const RoomListScreen = ({ navigation, route }: RoomListProps) => {
  return <RoomList navigation={navigation} route={route}/>;
}



export type ProfileProps = NativeStackScreenProps<RootParamList, 'Profile'>

export const ProfileScreen = ({ navigation, route }: ProfileProps) => {
  return <Profile navigation={navigation} route={route}/>;
}