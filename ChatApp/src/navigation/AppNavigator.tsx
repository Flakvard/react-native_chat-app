import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootParamList = {
  Login:    undefined;
  Register: undefined;
  Screen3:  undefined;
  ChatRoom: undefined;
  Message:  undefined;
  RoomList: undefined;
  Profile:  { userId: string };
  User: undefined;
}

const isLoggedIn = false;

export const Root = createNativeStackNavigator<RootParamList>()

