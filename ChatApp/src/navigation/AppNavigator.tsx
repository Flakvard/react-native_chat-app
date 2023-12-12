import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootParamList = {
  Login:    { paramA: string}
  Register: { paramA: string}
  Screen3:  { paramA: string}
  ChatRoom: { paramA: string}
  Message:  { paramA: string}
  RoomList: { paramA: string}
}

const isLoggedIn = false;

export const Root = createNativeStackNavigator<RootParamList>()

